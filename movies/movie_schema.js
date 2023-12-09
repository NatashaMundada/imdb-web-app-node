import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: {type: String},
  actors: {type: String},
  rating: {type: Number}
},
{ collection: "movies" });

export default movieSchema;