import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let issue = new Schema({
  title: {
    type: String
  },
  responsible: {
    type: String
  },
  description: {
    type: String
  },
  severity: {
    type: String
  },
  Status: {
    type: String,
    default: 'Open'
  }
});

export default mongoose.model('Issue', Issue);
