const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const connectDB = require('./config/db');

dotenv.config();

const createAdminUser = async () => {
    try {
        await connectDB();

        const adminEmail = 'admin@mab.com';
        const adminPassword = 'Admin@123';
        const adminName = 'MAB Admin';

        // Check if user already exists
        let user = await User.findOne({ email: adminEmail });

        if (user) {
            console.log(`User ${adminEmail} already exists. Updating to admin role...`);
            user.role = 'admin';
            await user.save();
            console.log(`✓ User ${adminEmail} is now an admin.`);
        } else {
            console.log(`Creating new admin user: ${adminEmail}`);
            user = new User({
                name: adminName,
                email: adminEmail,
                password: adminPassword,
                role: 'admin'
            });
            await user.save();
            console.log(`✓ Admin user ${adminEmail} created successfully.`);
        }

        console.log('\n=== Admin Credentials ===');
        console.log(`Email: ${adminEmail}`);
        console.log(`Password: ${adminPassword}`);
        console.log('========================\n');

        process.exit(0);
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
};

createAdminUser();
