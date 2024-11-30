import sequelize from '../config/sequelize.js';
import Estimate from '../Model/Estimate.js';
import EstLab from '../Model/EstLab.js';
import EstMat from '../Model/EstMat.js';
import EstMac from '../Model/EstMac.js';
import EstTrans from '../Model/EstTrans.js';
import EstStock from '../Model/EstStock.js';
import EstWel from '../Model/EstWel.js';
import EstSun from '../Model/EstSun.js';
import EstOther from '../Model/EstOther.js';

const EstMockData = async () => {
    try {
        // Ensure the database is synced without force to avoid dropping tables
        await sequelize.sync({ force: false });

        // Prepare mock data for Estimate table
        const estimateData = [
            {
                Date: new Date(),
                Estimated: 1000,
                book_id: 1
            },
            {
                Date: new Date(),
                Estimated: 2000,
                book_id: 2
            }
        ];

        // Insert mock data into Estimate table
        const estimateRecords = await Estimate.bulkCreate(estimateData, { returning: true });

        // Prepare mock data for Labour and Material tables
        const labourData = [
            {
                Labour: 'Labour 1',
                Lab_cost: 100,
                LabQ: 10,
                EstimateId: estimateRecords[0].id
            },
            {
                Labour: 'Labour 2',
                Lab_cost: 200,
                LabQ: 20,
                EstimateId: estimateRecords[1].id
            }
        ];

        const materialData = [
            {
                Material: 'Material 1',
                Mat_cost: 300,
                MatQ: 30,
                EstimateId: estimateRecords[0].id
            },
            {
                Material: 'Material 2',
                Mat_cost: 400,
                MatQ: 40,
                EstimateId: estimateRecords[1].id
            }
        ];

        const machineData = [
            {
                Machining: 'Machine 1',
                Mac_cost: 500,
                MacQ: 50,
                EstimateId: estimateRecords[0].id
            },
            {
                Machining: 'Machine 2',
                Mac_cost: 600,
                MacQ: 60,
                EstimateId: estimateRecords[1].id
            }
        ];

        const transData = [
            {
                Transport: 'Transport 1',
                Trans_cost: 700,
                TransQ: 70,
                EstimateId: estimateRecords[0].id
            },
            {
                Transport: 'Transport 2',
                Trans_cost: 800,
                TransQ: 80,
                EstimateId: estimateRecords[1].id
            },
        ];

        const stockData = [
            {
                Stock: 'Stock 1',
                Stock_cost: 900,
                StockQ: 90,
                EstimateId: estimateRecords[0].id
            },
            {
                Stock: 'Stock 2',
                Stock_cost: 1000,
                StockQ: 100,
                EstimateId: estimateRecords[1].id
            }
        ];
        const welfareData = [
            {
                Welding: 'Welfare 1',
                Wel_cost: 1100,
                WelQ: 110,
                EstimateId: estimateRecords[0].id
            },
            {
                Welding: 'Welfare 2',
                Wel_cost: 1200,
                WelQ: 120,
                EstimateId: estimateRecords[1].id
            }
        ];
        const sundryData = [
            {
                Sundries: 'Sundry 1',
                Sun_cost: 1300,
                SunQ: 130,
                EstimateId: estimateRecords[0].id
            },
            {
                Sundries: 'Sundry 2',
                Sun_cost: 1400,
                SunQ: 140,
                EstimateId: estimateRecords[1].id
            }
        ];
        const otherData = [
            {
                other: 'Other 1',
                other_cost: 1500,
                otherQ: 150,
                EstimateId: estimateRecords[0].id
            },
            {
                other: 'Other 2',
                other_cost: 1600,
                otherQ: 160,
                EstimateId: estimateRecords[1].id
            }
        ];

        // Insert mock data into Labour and Material tables

        await EstLab.bulkCreate(labourData);
        await EstMat.bulkCreate(materialData);
        await EstMac.bulkCreate(machineData);
        await EstTrans.bulkCreate(transData);
        await EstStock.bulkCreate(stockData);
        await EstWel.bulkCreate(welfareData);
        await EstSun.bulkCreate(sundryData);
        await EstOther.bulkCreate(otherData);

        console.log('Mock data inserted successfully');
    }
    catch (error) {
        console.error('Error inserting mock data:', error);
    }
};

EstMockData();