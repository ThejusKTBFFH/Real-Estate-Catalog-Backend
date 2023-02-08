const mongoose = require('mongoose')
const propertySchema = new mongoose.Schema({
    //models
    propertyType:{ type: String},
    negotiable:{ type: String},
    price:{ type: String},
    ownership:{ type: String},
    propertyAge:{ type: String},
    propertyApproved:{ type: String},
    propertyDescription:{ type: String},
    bankLoan:{ type: String},
    length:{ type: String},
    breadth:{ type: String},
    totalArea:{ type: Number},
    areaUnit:{ type: String},
    noOfBHK:{ type: String},
    attached: { type: String },
    western: { type: String },
    furnished: { type: String },
    carParking: { type: String },
    lift: { type: String },
    electricity: { type: String },
    facing: { type: String },

    name: { type: String },
    mobile: { type: String },
    postedBy: { type: String },
    saleType: { type: String },
    featuredPackage: { type: String },
    ppdPackage: { type: String },

    email: { type: String },
    city: { type: String },
    area:{ type: String },
    pincode: { type: String },
    address: { type: String },
    landmark: { type: String },
    latitude: { type: String },
    longitude: { type: String },
    ppdId: { required: true, type: String },
    views: { required: true, type: String },
    daysLeft: { required: true, type: String },

    siteImage: { type: String },
    status: { type: String, default: "Unsold" },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }

}, {timestamps:true})

const Property = mongoose.model('property', propertySchema);

module.exports = Property;