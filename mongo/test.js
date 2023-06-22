const mongoose = require('mongoose');
const Product = require('./product');
mongoose.connect('mongodb+srv://himakshitalukdar:vmW0ZUPiMHGaqQ3l@cluster0.vb0gwj8.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    const newProduct = new Product({
      name: 'Example1 Product1',
      email: 'example2@example.com',
      mobileNumber: 1344567890,
      age: 25,
      address: '125 Example Street1',
      isActive: true
    });
    newProduct.save()
      .then((savedProduct) => {
        console.log('Product saved:', savedProduct);
        mongoose.connection.close()
          .then(() => {
            console.log('MongoDB connection closed');
          })
          .catch((error) => {
            console.error('Failed to close MongoDB connection', error);
          });
      })
      .catch((error) => {
        console.error('Failed to save product', error);
      });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });
