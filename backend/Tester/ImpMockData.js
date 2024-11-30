import sequelize from '../config/sequelize.js';
import Implement from '../Model/Implement.js';
import Labour from '../Model/Labour.js';
import Material from '../Model/Material.js';

const ImpMockData = async () => {
    try {
        // Ensure the database is synced without force to avoid dropping tables
        // await sequelize.sync({ force: false });

        // Prepare mock data for Implement table
        const implementData = [
            {
                book_id: 1,
                Start_Date: '2021-09-01',
                Job_Assigned: 'John',
                Req_date: '2021-09-02',
                Req_off: 'Jane',
                supplier: 'Supplier 1',
                Vaucher: 1111,
                Auth: 'Mr. John',
            },
            {
                book_id: 2,
                Start_Date: '2021-09-02',
                Job_Assigned: 'Jane',
                Req_date: '2021-09-03',
                Req_off: 'John',
                supplier: 'Supplier 2',
                Vaucher: 2222,
                Auth: 'Miss Jane',
            }
        ];

        // // Insert mock data into Implement table
        const implementRecords = await Implement.bulkCreate(implementData, { returning: true });

        // Prepare mock data for Labour and Material tables
        const labourData = [
            {
                Labour: 'Labour 1',
                Lab_cost: 100,
                LabQ: 10,
                implement_id: implementRecords[0].id
            },
            {
                Labour: 'Labour 2',
                Lab_cost: 200,
                LabQ: 20,
                implement_id: implementRecords[1].id
            }
        ];

        const materialData = [
            {
                Material: 'Material 1',
                Mat_cost: 300,
                MatQ: 30,
                issued: 4,
                implement_id: implementRecords[0].id
            },
            {
                Material: 'Material 2',
                Mat_cost: 400,
                MatQ: 40,
                issued: 12,
                implement_id: implementRecords[1].id
            }
        ];

        // Insert mock data into Labour and Material tables
        await Labour.bulkCreate(labourData);
        await Material.bulkCreate(materialData);

        console.log('Mock data inserted successfully');
    } catch (error) {
        console.error('Error inserting mock data:', error);
    }
};

ImpMockData();