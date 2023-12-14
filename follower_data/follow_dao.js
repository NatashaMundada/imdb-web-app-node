import follow from "./follow_model.js";

export const findAllFollowingUsers = (userId) => follow.findById(userId);
export const followUser = (userId, userNameToFollow) => {
    try {
        let followData =  follow.findOne({ user: userId });
        console.log(followData)
        if (!followData) {
          followData = new follow({ user: userId, following: [] });
        }
        if (!followData.following.includes(userNameToFollow)) {
          followData.following.push(userNameToFollow);
        followData.save();
        }
        return followData.following;
      } catch (error) {
            throw error;
      }
}
