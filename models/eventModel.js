const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the event schema with embedded address
const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  participants: [{
    type: Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a 'User' model for participants
  }],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Assuming 'User' model for the event creator
    required: true,
  },
  status: {
    type: String,
    enum: ['upcoming', 'ongoing', 'completed', 'cancelled'],
    default: 'upcoming',
  },
  // Embedded Address
  address: {
    type: String,
    required: true,
  },
  visibility: {
    type: String,
    enum: ['public', 'private'],
    default: 'public',
  },
  category:{
    type: String,
    required: true,
  } ,   
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});


const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
