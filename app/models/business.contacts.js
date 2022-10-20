import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const bus_ContactSchema = new Schema({
    name: String,
    ContactNumber: Number,
    email: String
}, {
    timestamps: true,
    collection: 'BusinessContacts'
});

export default mongoose.model('BusinessContacts', bus_ContactSchema);