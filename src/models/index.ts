import mongoose, { Schema } from 'mongoose';

const OrderSchema = new Schema({
  orderId: { type: String, required: true, unique: true },
  items: [{
    id: String,
    name: String,
    price: Number,
    quantity: Number
  }],
  total: { type: Number, required: true },
  customerDetails: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: false },
    type: { type: String, enum: ['Delivery', 'Pickup'], default: 'Pickup' }
  },
  status: { type: String, enum: ['Pending', 'Confirmed', 'Preparing', 'Ready', 'Completed', 'Cancelled'], default: 'Pending' }
}, { timestamps: true });

export const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);

const BookingSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  guests: { type: Number, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  occasion: { type: String },
  specialRequests: { type: String },
  status: { type: String, enum: ['Pending', 'Confirmed', 'Cancelled'], default: 'Pending' }
}, { timestamps: true });

export const Booking = mongoose.models.Booking || mongoose.model('Booking', BookingSchema);

const TestimonialSchema = new Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  rating: { type: Number, required: true },
  avatar: { type: String }
}, { timestamps: true });

export const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);
