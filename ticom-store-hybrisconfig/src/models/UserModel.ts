import mongoose, { Schema, Document } from 'mongoose';

interface User extends Document {
  firstName: string;
  lastName: string;
  phoneNo: string;
}

const userSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNo: { type: String, required: true }
});

const UserModel = mongoose.model<User>('User', userSchema);

export default UserModel;
