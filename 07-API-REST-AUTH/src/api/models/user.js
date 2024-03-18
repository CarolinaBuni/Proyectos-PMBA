const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema(
     {
          img: { type: String },
          name: { type: String },
          userName: { type: String },
          email: { type: String },
          password: { type: String },
          age: { type: Number },
          rol: { type: String, default: "user", enum: [ "admin", "user" ] },
          devices: [{ type: mongoose.Types.ObjectId, ref: "device" }],
          group: [{ type: mongoose.Types.ObjectId, ref: "group" }]
     },
     {
          timestamps: true,
          collection: "user"
     }
);

userSchema.pre("save", function (){
     this.password = bcrypt.hashSync(this.password, 10);
})


const User = mongoose.model("user", userSchema, "user");
module.exports = User; 