const bcrypt = require('bcrypt');
const User = require("../models/user");

const createuser = async (name, password, email, age, uid) => {
    try {
        let root = uid ? "google" : "register";
        let otp = null;

        if (root === "register") {
            otp = generateOTP();
            setTimeout(() => {
                otp = null;
            }, 2 * 60 * 1000);
        }

        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return false;
        }

 
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, password: hashedPassword, email, age, uid, root, otp });
        const savedUser = await newUser.save();
        return savedUser;
    } catch (error) {
        console.error('Error al crear usuario:', error);
        throw error;
    }
}

function generateOTP() {
    const min = 1000;
    const max = 9999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = createuser;
