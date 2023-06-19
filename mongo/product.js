const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: {
        validator: (value) => {
          return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
        }
      }
    },
    mobileNumber: {
      type: Number,
      unique: true,
      required: true,
      length: 10,
      match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
    },
    age: {
      type: Number,
      required: true
    },
    address: {
      type: String
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { collection: 'products' }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
