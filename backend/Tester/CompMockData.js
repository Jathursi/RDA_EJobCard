import sequelize from '../config/sequelize.js';
import Complete from '../Model/Complete.js';

const CompMockData = async () => {
    try {
        // Ensure the database is synced without force to avoid dropping tables
        await sequelize.sync({ force: false });

        // Prepare mock data for Estimate table
        const completeData = [
            {
                // id: 1,
                supervised: 'John Doe',
                initiated: '2023-01-01',
                closed: '2023-01-10',
                approved: 'Jane Smith',
                aditional_fault: 'None',
                book_id: 1
            },
            {
                // id: 2,
                supervised: 'Alice Johnson',
                initiated: '2023-02-01',
                closed: '2023-02-10',
                approved: 'Bob Brown',
                aditional_fault: 'Minor delay',
                book_id: 2
            }            
        ];

        // Insert mock data into Estimate table
         await Complete.bulkCreate(completeData, { returning: true });
        
    }
    catch (error) {
        console.error('Error inserting mock data:', error);
    }
};

CompMockData();