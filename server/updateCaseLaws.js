const mongoose = require('mongoose');
const dotenv = require('dotenv');
const CaseLaw = require('./models/CaseLaw');
const connectDB = require('./config/db');

dotenv.config();

const updateCaseLaws = async () => {
    try {
        await connectDB();

        // Update all case laws to be public
        const result = await CaseLaw.updateMany(
            { isPublic: { $ne: true } },
            { $set: { isPublic: true } }
        );

        console.log(`✓ Updated ${result.modifiedCount} case law(s) to public.`);

        // Show all case laws
        const allCases = await CaseLaw.find({});
        console.log(`\nTotal case laws in database: ${allCases.length}`);
        allCases.forEach((c, i) => {
            console.log(`${i + 1}. ${c.citation} - Public: ${c.isPublic}`);
        });

        process.exit(0);
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
};

updateCaseLaws();
