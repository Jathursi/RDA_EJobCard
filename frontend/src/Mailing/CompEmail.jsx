import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CompEmail = () => {
    const { id } = useParams();
    const [resources, setResources] = useState([]);
    const [images, setImages] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [emails, setEmails] = useState(['']);
    const [emailData, setEmailData] = useState([]);

    useEffect(() => {
        const fetchResourcesAndImages = async () => {
            try {
                const res1 = await axios.get(`http://localhost:8081/api/resource/resources/${id}`);
                setResources(res1.data);

                const res2 = await axios.get(`http://localhost:8081/api/email/get-emailattach1/${id}`);
                console.log('Fetched email data:', res2.data);
                setEmailData(res2.data);
            } catch (error) {
                console.error('Error fetching resources and images:', error);
            }
        };

        fetchResourcesAndImages();
    }, [id]);

    const handleFileChange = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions);
        const newSelectedFiles = selectedOptions.map(option => ({
            id: option.value,
            name: option.text,
            type: option.getAttribute('data-type'),
            url: option.getAttribute('data-url')
        }));

        // Use a Set to ensure unique file IDs
        const uniqueFiles = new Map(selectedFiles.map(file => [file.id, file]));
        newSelectedFiles.forEach(file => uniqueFiles.set(file.id, file));

        setSelectedFiles(Array.from(uniqueFiles.values()));
    };

    const handleRemoveFile = (fileId) => {
        setSelectedFiles(selectedFiles.filter(file => file.id !== fileId));
    };

    const handleEmailChange = (index, event) => {
        const newEmails = [...emails];
        newEmails[index] = event.target.value;
        setEmails(newEmails);
    };

    const handleAddEmail = () => {
        setEmails([...emails, '']);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formData = {
            emails,
            attachments: selectedFiles.map(file => file.id),
            book_id: id
        };

        console.log('Sending email with formData:', formData);

        axios.post('http://localhost:8081/api/email/send-emailattach1', formData)
            .then(response => {
                alert('Email sent successfully!');
                console.log('Email sent response:', response.data);
            })
            .catch(error => {
                console.error('Error sending the email:', error);
            });
    };

    return (
        <div className='formContainer'>
            <div className='tableContainer'>
                <h3>Email Data</h3>
                <table className='dataTable'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Attachments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emailData.emailComp && emailData.emailComp.map(email => {
                            const attachments = emailData.attachments
                                .filter(attach => attach.emailCompId === email.id)
                                .map(attach => attach.fileName)
                                .join(', ');

                            return (
                                <tr key={email.id}>
                                    <td>{email.id}</td>
                                    <td>{email.email}</td>
                                    <td>{attachments}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className='formTitle'>Authority Email</div>
            <form onSubmit={handleSubmit} className='form'>
                <div className='form-Multi-btn'>
                    <label className='label'>Email:</label>
                    <button type="button" onClick={handleAddEmail} className='addButton'>Add Email</button>
                </div>
                <div className='formGroup'>
                    {emails.map((email, index) => (
                        <div key={index} className='formGroup'>
                            <input 
                                type="email" 
                                value={email} 
                                onChange={(e) => handleEmailChange(index, e)} 
                                className='input'
                                required 
                            />
                        </div>
                    ))}
                </div>
                
                <div className='formGroup'>
                    <label className='label'>Attachments:</label>
                    <select multiple onChange={handleFileChange} className='input'>
                        <option value="">Select Files</option>
                        {resources.map(resource => (
                            <option key={resource.id} value={resource.id} data-type="pdf" data-url={resource.url}>
                                {resource.customName}
                            </option>
                        ))}
                        {images.map(image => (
                            <option key={image.id} value={image.id} data-type="image" data-url={image.url}>
                                {image.customName}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='formGroup'>
                    {selectedFiles.map(file => (
                        <div key={file.id} className='selectedFile'>
                            <input 
                                type="text" 
                                value={file.name} 
                                readOnly 
                                className='input'
                            />
                            <button 
                                type="button" 
                                onClick={() => handleRemoveFile(file.id)}
                                className='removeButton'
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                {/* Preview Section */}
                <div className='previewSection'>
                    <h3>Preview Selected Files:</h3>
                    {selectedFiles.map(file => (
                        <div key={file.id} className='resourceItem'>
                            <h3>{file.name}</h3>
                            {file.type === 'image' ? (
                                <img
                                    src={file.url}
                                    alt={file.name}
                                    className='resourceImage'
                                    style={{ maxWidth: '100%', height: 'auto' }}
                                />
                            ) : file.type === 'pdf' ? (
                                <iframe
                                    src={file.url}
                                    title={file.name}
                                    className='resourcePdf'
                                    width="100%"
                                    height="500px"
                                />
                            ) : (
                                <p>Unsupported file type</p>
                            )}
                        </div>
                    ))}
                </div>

                <div className='form-Imp-btn'>
                    <button type="submit">Send Email</button>
                </div>
            </form>
        </div>
    );
};

export default CompEmail;