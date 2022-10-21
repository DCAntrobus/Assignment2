//import modules
import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

//extracting specific schema from mongoose 
const { PassportLocalSchema } = mongoose;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    displayName: String,
    userName: String,
    emailAddress: String
}, {
    timestamps: true,
    collection: 'users'
});

UserSchema.plugin(passportLocalMongoose);

export default mongoose.model('User', UserSchema);
