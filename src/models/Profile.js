const { model, Schema } = require("mongoose");

const profileSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    gender: String,
  }, 
   { timestamps: true },
)

const Profile = model("Profile", profileSchema);

module.exports = Profile;