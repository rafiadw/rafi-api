// import mongoose
import mongoose from "mongoose";

// Buat Schema
const Contact = mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  nomor: {
    type: Number,
    required: true,
  },
});

// export model
export default mongoose.model("Contact", Contact);
