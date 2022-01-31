const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://aabare:password1234@cluster0.s8l4h.mongodb.net/test`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

module.exports = mongoose.connection;
