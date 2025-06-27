const mongoose = require("mongoose");

//===================== User Schema ========================
const userSchema = new mongoose.Schema({
  name: { type: String, required: 'Name is required' },
  email: { type: String, required: 'Email is required', unique: true },
  password: { type: String, required: 'Password is required' },
  userType: {
    type: String,
    required: 'UserType is required',
    enum: ['Admin', 'Agent', 'Ordinary'],
  },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

//================== Complaint Schema =================
const complaintSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: Number, required: true },
  comment: { type: String, required: true },
  status: { 
    type: String, 
    required: true,
    enum: ['Pending', 'In Progress', 'Resolved', 'Rejected'],
    default: 'Pending'
  },
}, { timestamps: true });

const Complaint = mongoose.model("Complaint", complaintSchema);

//================== Assigned Complaint Schema =====================

const assignedComplaintSchema = new mongoose.Schema({
  agentId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  complaintId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Complaint" }, // Corrected to ObjectId
  status: { 
    type: String, 
    required: true,
    enum: ['Assigned', 'In Progress', 'Completed'],
    default: 'Assigned'
  },
  agentName: { type: String, required: true },
}, { timestamps: true });

const AssignedComplaint = mongoose.model("AssignedComplaint", assignedComplaintSchema);

//--------------Message Schema ---------------
const messageSchema = new mongoose.Schema({
  name: { type: String, required: 'Name is required' },
  message: { type: String, required: 'Message is required' },
  complaintId: { type: mongoose.Schema.Types.ObjectId, ref: "Complaint" },
}, { timestamps: true });

const Message = mongoose.model("Message", messageSchema);

//============== Export All Models ================
module.exports = {
  User,
  Complaint,
  AssignedComplaint,
  Message,
};
