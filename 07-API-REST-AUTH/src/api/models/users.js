const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const usersSchema = new Schema(
     {
          "name": { type: String, required: true },
          "userName": { type: String },
          "password": { type: String, required: true },
          "favoritesMovies": [{ type: Schema.Types.ObjectId, ref: "movies"}],
          "rol": { type: String, enum: [ "admin", "user" ], default: "user" }
     },
     {
          timestamps: true,
          collection: 'users',
     }
);

usersSchema.pre("save", function () {
     this.password = bcrypt.hashSync(this.password, 10);
});

const User = mongoose.model("users", usersSchema, "users");

module.exports = User;

