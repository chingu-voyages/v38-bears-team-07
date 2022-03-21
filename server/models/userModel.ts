import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface User {
    email: String;
    password: String;
    generateToken: () => string;
}

const userSchema = new mongoose.Schema<User>({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: String,
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.generateToken = function () {
    return jwt.sign({ _id: this._id }, `${process.env.JWT_SECRET}`, {
        expiresIn: '3d',
    });
};

export default mongoose.model<User>('User', userSchema);
