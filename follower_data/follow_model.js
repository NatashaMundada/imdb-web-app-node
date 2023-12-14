import mongoose from "mongoose";
import FollowSchema from "./follow_schema.js";
const follow = mongoose.model("follow", FollowSchema);
export default follow;