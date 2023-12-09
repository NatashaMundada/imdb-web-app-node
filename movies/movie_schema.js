import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: {type: String},
  actors: {type: String}
},
{ collection: "movies" });

export default movieSchema;