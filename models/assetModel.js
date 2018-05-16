const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assetModel = Schema({
    school: {
        type: String
    },
    campus: {
        type: String
    },
    manufacture: {
        type: String
    },
    model: {
        type: String
    },
    deviceType: {
        type: String
    },
    serialNo: {
        type: String
    },
    warranty: {
        type: Boolean,
        default: false
    },
    age: {
        type: Number
    },
    user: {
        type: String
    },
    location: {
        type: String
    }
});

module.exports = mongoose.model('asset', assetModel );