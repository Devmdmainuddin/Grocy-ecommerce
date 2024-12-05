const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, role } = req.body;
       
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'firstName,lastName, email, and password are required.'
            });
        }
        const existingUser = await User.findOne({
            $or: [{ firstName }, { lastName }, { email }]
        });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashPassword,
            role,
        });
        await newUser.save();
        return res.status(201).json({
            success: true,
            message: 'User registered successfully'
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Email and password are required.'
            });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email or password.'
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email or password.'
            });
        }
        const token = jwt.sign({
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role
        }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).json({
            success: true,
            message: 'Login successful',
            data: {
                token,
                user: {
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    role: user.role
                }
            }
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
const logOutUser= async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(400).json({ success: false, message: 'No token provided' });
        }

  
        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
            console.error("JWT verification error:", err);
            return res.status(401).json({ success: false, message: 'Invalid or expired token' });
        }

       

        return res.status(200).json({ success: true, message: 'Logged out successfully' });
    } catch (error) {
        console.error("Logout route error:", error);
        res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
    }
};




module.exports = {
    registerUser,
    loginUser,
    logOutUser
};
