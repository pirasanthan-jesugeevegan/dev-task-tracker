const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  dt: { type: String, required: true },
  reminder: { type: Boolean, required: true },
});

module.exports = mongoose.model('Product', taskSchema);
