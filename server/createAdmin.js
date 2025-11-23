const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const connectDB = require('./config/db');
const bcrypt = require('bcryptjs');

dotenv.config();
connectDB();

const createAdmin = async () => {
    try {
        const email = 'testuser10@gmail.com';
        const password = 'Hello@123';
        const name = 'Admin User';

        // Check if user exists
        let user = await User.findOne({ email });

        if (user) {
            user.role = 'admin';
            user.password = password; // Reset password just in case
            await user.save();
            console.log(`User ${email} updated to admin.`);
        } else {
            user = await User.create({
                name,
                email,
                password,
                role: 'admin'
            });
            console.log(`User ${email} created as admin.`);
        }
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

createAdmin();
