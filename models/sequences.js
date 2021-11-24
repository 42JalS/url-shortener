const mongoose = require('mongoose');

const { Schema } = mongoose;

const SequencesSchema = new Schema(
  {
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 },
  },
  { timestamps: { updatedAt: 'updated_at' } }
);

const sequence = mongoose.model('sequence', SequencesSchema);

module.exports = sequence;
