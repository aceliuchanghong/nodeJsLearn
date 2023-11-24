
const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb+srv://lawrence:uUUNVML_Xc56d4X@lawrence-try.enktwcr.mongodb.net/todo?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connect successfully!!!');
  } catch (error) {
    console.log('Connect failure!!!');
  }
}
module.exports = { connect };
