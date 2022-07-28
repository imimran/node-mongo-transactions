const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {

    name: String,
    status: Boolean
  
  }, 
   { timestamps: true },
)

const User = model("User", userSchema);

module.exports = User;
