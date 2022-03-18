import mongoose from 'mongoose'


interface User{
    email: string;
    password: string;
}

const userSchema =  new mongoose.Schema({
    email: String,
    password: String
});
                                            
export default mongoose.model('User', userSchema);