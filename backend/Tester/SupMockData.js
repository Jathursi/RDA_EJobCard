import sequelize from '../config/sequelize.js';
// import Implement from '../Model/Implement.js';
// import Labour from '../Model/Labour.js';
// import Material from '../Model/Material.js';
import Supplement from '../Model/Supplement.js';
import SupLab from '../Model/SupLab.js';
import SupMat from '../Model/SupMat.js';
import SupMac from '../Model/SupMac.js';
import SupTrans from '../Model/SupTrans.js';
// import SupStock from '../Model/SupStock.js';
import SupStrock from '../Model/SupStrock.js';
import SupWel from '../Model/SupWel.js';
import SupSun from '../Model/SupSun.js';
import SupOther from '../Model/SupOther.js';


const SupMockData = async () => {
    try {
        // Ensure the database is synced without force to avoid dropping tables
        await sequelize.sync({ force: false });

        // Prepare mock data for Implement table
        const supplementData = [
            {
                No: '1',
                Date: new Date(),
                Estimated: 1000,
                book_id: 1
            },
            {
                No: '2',
                Date: new Date(),
                Estimated: 1000,
                book_id: 1
            },
            {
                No: '2',
                Date: new Date(),
                Estimated: 2000,
                book_id: 2
            }
        ];

        // Insert mock data into Implement table
        const supplementRecords = await Supplement.bulkCreate(supplementData, { returning: true });

        // Prepare mock data for Labour and Material tables
        const labourData = [
            {
                Labour: 'Labour 1',
                Lab_cost: 100,
                LabQ: 10,
                SupplierId: supplementRecords[0].id
            },
            {
                Labour: 'Labour 1',
                Lab_cost: 100,
                LabQ: 10,
                SupplierId: supplementRecords[0].id
            },
            {
                Labour: 'Labour 2',
                Lab_cost: 200,
                LabQ: 20,
                SupplierId: supplementRecords[1].id
            }
        ];

        const materialData = [
            {
                Material: 'Material 1',
                Mat_cost: 300,
                MatQ: 30,
                SupplierId: supplementRecords[0].id
            },
            {
                Material: 'Material 2',
                Mat_cost: 400,
                MatQ: 40,
                SupplierId: supplementRecords[1].id
            }
        ];

        const machineData = [
            {
                Machining: 'Machine 1',
                Mac_cost: 500,
                MacQ: 50,
                SupplierId: supplementRecords[0].id
            },
            {
                Machining: 'Machine 2',
                Mac_cost: 600,
                MacQ: 60,
                SupplierId: supplementRecords[1].id
            }
        ];

        const transData = [
            {
                Transport: 'Transport 1',
                Trans_cost: 700,
                TransQ: 70,
                SupplierId: supplementRecords[0].id
            },
            {
                Transport: 'Transport 2',
                Trans_cost: 800,
                TransQ: 80,
                SupplierId: supplementRecords[1].id
            }
        ];

        const stockData = [
            {
                Stock: 'Stock 1',
                Stock_cost: 900,
                StockQ: 90,
                SupplierId: supplementRecords[0].id
            },
            {
                Stock: 'Stock 2',
                Stock_cost: 1000,
                StockQ: 100,
                SupplierId: supplementRecords[1].id
            }
        ];

        const welfareData = [
            {
                Welding: 'Welfare 1',
                Wel_cost: 1100,
                WelQ: 110,
                SupplierId: supplementRecords[0].id
            },
            {
                Welding: 'Welfare 2',
                Wel_cost: 1200,
                WelQ: 120,
                SupplierId: supplementRecords[1].id
            }
        ];

        const sundryData = [
            {
                Sundries: 'Sundry 1',
                Sun_cost: 1300,
                SunQ: 130,
                SupplierId: supplementRecords[0].id
            },
            {
                Sundries: 'Sundry 2',
                Sun_cost: 1400,
                SunQ: 140,
                SupplierId: supplementRecords[1].id
            }
        ];

        const otherData = [
            {
                other: 'Other 1',
                other_cost: 1500,
                otherQ: 150,
                SupplierId: supplementRecords[0].id
            },
            {
                other: 'Other 2',
                other_cost: 1600,
                otherQ: 160,
                SupplierId: supplementRecords[1].id
            }
        ];

        // Insert mock data into Labour and Material tables
        await SupLab.bulkCreate(labourData);
        await SupMat.bulkCreate(materialData);
        await SupMac.bulkCreate(machineData);
        await SupTrans.bulkCreate(transData);
        await SupStrock.bulkCreate(stockData);
        await SupWel.bulkCreate(welfareData);
        await SupSun.bulkCreate(sundryData);
        await SupOther.bulkCreate(otherData);

        console.log('Mock data inserted successfully');
    }
    catch (error) {
        console.error('Error inserting mock data:', error);
    }

};

SupMockData();