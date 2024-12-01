import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Implement() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [visibleSections, setVisibleSections] = useState(1);
    const [values, setValues] = useState({
        Start_Date: '',
        Job_Assigned: '',
        Req_date: '',
        Req_off: '',
        Vaucher: '',
        Auth: '',
        supplier: ''
    });
    const [labourDetails, setLabourDetails] = useState([
        { Labour: '', Lab_cost: '', LabQ: '' }
    ]);
    const [matcost, setMatcost] = useState([
        { Material: '', Mat_cost: '', MatQ: '', issued: '' }
    ]);
    const [isInitialSubmission, setIsInitialSubmission] = useState(true); // Track if it's the first submission

    const handleAddMoreLabour = () => {
        setLabourDetails([...labourDetails, { Labour: '', Lab_cost: '', LabQ: '' }]);
    };

    const handleAddMoreMaterial = () => {
        setMatcost([...matcost, { Material: '', Mat_cost: '', MatQ: '', issued: '' }]);
        setVisibleSections(visibleSections + 1);
    };

    const handleLabourInputChange = (index, event) => {
        const newLabourDetails = [...labourDetails];
        newLabourDetails[index][event.target.name] = event.target.value;
        setLabourDetails(newLabourDetails);
    };

    const handleMaterialInputChange = (index, event) => {
        const newMaterialData = [...matcost];
        newMaterialData[index][event.target.name] = event.target.value;
        setMatcost(newMaterialData);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://rda-e-job-card.vercel.app/api/imp/Imview/${id}`);
                if (res.data && res.data.length > 0) {
                    const implementData = res.data[0];
                    setData(implementData);
                    setValues({
                        Start_Date: formatDate(implementData.Start_Date) || '',
                        Job_Assigned: implementData.Job_Assigned || '',
                        Req_date: formatDate(implementData.Req_date) || '',
                        Req_off: implementData.Req_off || '',
                        Vaucher: implementData.Vaucher || '',
                        Auth: implementData.Auth || '',
                        supplier: implementData.supplier || ''
                    });
                    setIsInitialSubmission(false); // Set to false if data exists
                }
            } catch (err) {
                console.error('Error fetching implement data:', err);
            }
        };
        fetchData();
    }, [id]);

    useEffect(() => {
        const fetchLabData = async () => {
            try {
                const res = await axios.get(`http://rda-e-job-card.vercel.app/api/imp/ImviewLab/${id}`);
                if (res.data && Array.isArray(res.data) && res.data.length > 0) {
                    setLabourDetails(res.data);
                }
            } catch (err) {
                console.error('Error fetching labour data:', err);
            }
        };
        fetchLabData();
    }, [id]);

    useEffect(() => {
        const fetchMaterialData = async () => {
            try {
                const res = await axios.get(`http://rda-e-job-card.vercel.app/api/imp/ImviewMat/${id}`);
                if (res.data && Array.isArray(res.data) && res.data.length > 0) {
                    setMatcost(res.data);
                }
            } catch (err) {
                console.error('Error fetching material data:', err);
            }
        };
        fetchMaterialData();
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const filterEmptyFields = (detailsArray) => {
            return detailsArray.filter(item => Object.values(item).some(value => value !== ''));
        };
        const filteredLabDetails = filterEmptyFields(labourDetails);
        const filteredMatDetails = filterEmptyFields(matcost);
        const token = localStorage.getItem('token');

        const url = isInitialSubmission
            ? `http://rda-e-job-card.vercel.app/api/imp/Iminsert/${id}`
            : `http://rda-e-job-card.vercel.app/api/imp/Imput/${id}`;

        const method = isInitialSubmission ? 'post' : 'put';

        axios({
            method,
            url,
            data: {
                ...values,
                labourDetails: filteredLabDetails,
                matcost: filteredMatDetails,
                book_id: id,
            },
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        .then(res => {
            console.log(isInitialSubmission ? "Logbook entry submitted successfully" : "Logbook entry updated successfully");
            setIsInitialSubmission(false); // After the first submission, switch to update mode
            navigate('/Home');
        })
        .catch(err => {
            if (err.response) {
                console.error('Error with logbook entry:', err.response.status, err.response.data);
            } else {
                console.error('Error with logbook entry:', err.message);
            }
        });
    };
    return (
        <div className='formContainer'>
            <div className='formTitle'>Implement</div>
            <form onSubmit={handleSubmit}>
                <div className='formGroup'>
                    <label className='label'>Start Date:</label>
                    <input className='input' type='date' name='Start_Date' value={values.Start_Date} onChange={handleChange} />
                </div>
                <div className='formGroup'>
                    <label className='label'>Job Assigned:</label>
                    <input type='text' className='input' name='Job_Assigned' value={values.Job_Assigned} onChange={handleChange} />
                </div>
                <div className='form-Multi-btn'>
                    <label>Labour:</label>
                    <button type='button' onClick={handleAddMoreLabour}>Add More</button>
                </div>
                {labourDetails.map((labour, index) => (
                    <div key={index} className='dateGroup'>
                        <div className='formGroup'>
                            <label className='label'>Labour {index + 1}</label>
                            <input type='text' className='input' name='Labour' value={labour.Labour} onChange={e => handleLabourInputChange(index, e)} />
                        </div>
                        <div className='formGroup'>
                            <label className='label'>Labour Cost</label>
                            <input type='text' className='input' name='Lab_cost' value={labour.Lab_cost} onChange={e => handleLabourInputChange(index, e)} />
                        </div>
                        <div className='formGroup'>
                            <label className='label'>Labour Quantity</label>
                            <input type='text' className='input' name='LabQ' value={labour.LabQ} onChange={e => handleLabourInputChange(index, e)} />
                        </div>
                    </div>
                ))}
                <div className='form-Multi-btn'>
                    <label>Material:</label>
                    <button type='button' onClick={handleAddMoreMaterial}>Add More</button>
                </div>
                {matcost.map((material, index) => (
                    <div key={index} className='dateGroup'>
                        <div className='formGroup'>
                            <label className='label'>Material {index + 1}</label>
                            <input type='text' className='input' name='Material' value={material.Material} onChange={e => handleMaterialInputChange(index, e)} />
                        </div>
                        <div className='formGroup'>
                            <label className='label'>Material Cost</label>
                            <input type='text' className='input' name='Mat_cost' value={material.Mat_cost} onChange={e => handleMaterialInputChange(index, e)} />
                        </div>
                        <div className='formGroup'>
                            <label className='label'>Material Quantity</label>
                            <input type='text' className='input' name='MatQ' value={material.MatQ} onChange={e => handleMaterialInputChange(index, e)} />
                        </div>
                        <div className='formGroup'>
                            <label className='label'>Issued</label>
                            <input type='text' className='input' name='issued' value={material.issued} onChange={e => handleMaterialInputChange(index, e)} />
                        </div>
                    </div>
                ))}
                <div className='formGroup'>
                    <label className='label'>Required Date:</label>
                    <input className='input' type='date' name='Req_date' value={values.Req_date} onChange={handleChange} />
                </div>
                <div className='formGroup'>
                    <label className='label'>Required Officer:</label>
                    <input className='input' type='text' name='Req_off' value={values.Req_off} onChange={handleChange} />
                </div>
                <div className='formGroup'>
                    <label className='label'>Voucher:</label>
                    <input className='input' type='text' name='Vaucher' value={values.Vaucher} onChange={handleChange} />
                </div>
                <div className='formGroup'>
                    <label className='label'>Authorised:</label>
                    <input className='input' type='text' name='Auth' value={values.Auth} onChange={handleChange} />
                </div>
                <div className='formGroup'>
                    <label className='label'>Supplier:</label>
                    <input className='input' type='text' name='supplier' value={values.supplier} onChange={handleChange} />
                </div>
                <div className='form-Imp-btn'>
                    <button className='submitButton' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Implement;