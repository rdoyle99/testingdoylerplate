import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  full_name: String,
  paying: Boolean,
  stripe_id: String,
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
