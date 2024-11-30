import sequelize from '../config/sequelize.js';
import Regist from '../Model/Regist.js';

const insertMockData = async () => {
    try {
        // Ensure the database is synced without force to avoid dropping tables
        await sequelize.sync({ force: false });

        // Prepare mock data with a static userID for testing purposes
        // const userID = id.param;  // Add a valid userID from your database
        const userID = 1;

        const mockData = [
            {
                Vehicle_num: 'CAA-1234',
                Year: '2004',
                Vehicle_type: 'Vans',
                Fault: 'Brake system failure',
                Inspected: 'Mr. John',
                Meter: '10000',
                Location: 'Vavuniya',
                Reference: 'RDA/24/123',
                Response: 'yes',
                CrossCheck: 'Miss Jane',
                userID: userID  // Add userID from token
            },
            {
                Vehicle_num: 'KAA-1234',
                Year: '2005',
                Vehicle_type: 'Lorry',
                Fault: 'Engine failure',
                Inspected: 'Mr. John',
                Meter: '20000',
                Location: 'Jaffna',
                Reference: 'RDA/24/124',
                Response: 'yes',
                CrossCheck: 'Miss Jane',
                userID: userID  // Add userID from token
            },
            {
                Vehicle_num: 'CAB-1234',
                Year: '2004',
                Vehicle_type: 'Vans',
                Fault: 'Brake system failure',
                Inspected: 'Mr. John',
                Meter: '10000',
                Location: 'Vavuniya',
                Reference: 'RDA/24/123',
                Response: 'yes',
                CrossCheck: 'Miss Jane',
                userID: userID  // Add userID from token
            },
            {
                Vehicle_num: 'KAB-1234',
                Year: '2005',
                Vehicle_type: 'Lorry',
                Fault: 'Engine failure',
                Inspected: 'Mr. John',
                Meter: '20000',
                Location: 'Jaffna',
                Reference: 'RDA/24/124',
                Response: 'yes',
                CrossCheck: 'Miss Jane',
                userID: userID  // Add userID from token
            },
            {
                Vehicle_num: 'CAC-1234',
                Year: '2004',
                Vehicle_type: 'Vans',
                Fault: 'Brake system failure',
                Inspected: 'Mr. John',
                Meter: '10000',
                Location: 'Vavuniya',
                Reference: 'RDA/24/123',
                Response: 'yes',
                CrossCheck: 'Miss Jane',
                userID: userID  // Add userID from token
            },
            {
                Vehicle_num: 'KAC-1234',
                Year: '2005',
                Vehicle_type: 'Lorry',
                Fault: 'Engine failure',
                Inspected: 'Mr. John',
                Meter: '20000',
                Location: 'Jaffna',
                Reference: 'RDA/24/124',
                Response: 'yes',
                CrossCheck: 'Miss Jane',
                userID: userID  // Add userID from token
            }
        ];

        // Insert mock data into the Regist table
        await Regist.bulkCreate(mockData);
        console.log('Mock data inserted successfully');
    } catch (error) {
        console.error('Error inserting mock data:', error);
    }
};

insertMockData();