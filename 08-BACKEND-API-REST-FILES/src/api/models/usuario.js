const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema(
     {
          img: { type: String },
          userName: { type: String, required: true },
          email: { type: String, required: true },
          password: { type: String, required: true },
          rol: { type: String, required: true, enum: [ "admin", "user" ], default: "user" },
          eventos: [{ type: Schema.Types.ObjectId, ref: "events" }]
     },
     {
          timestamps: true,
          collection: "usuarios"
     }
);

usuarioSchema.pre("save", function () {
     this.password = bcrypt.hashSync(this.password, 10);
});

const Usuario = mongoose.model("usuarios", usuarioSchema, "usuarios");

module.exports = Usuario;