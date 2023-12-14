import follow from "./follow_model.js";

export const findAllFollowingUsers = (userId) => follow.find({userId: userId});
export const followUser = async (userId, userNameToFollow) => {
  try {
    if (!userId) {
      throw new Error('userId is required');
    }

    let followData = await follow.findOne({ userId: userId });
    console.log(followData);

    if (!followData) {
      followData = new follow({ userId: userId, following: [] });
    }

    if (!followData.following.includes(userNameToFollow)) {
      followData.following.push(userNameToFollow);
      await followData.save();
    }

    return followData.following;
  } catch (error) {
    console.error('Error following user:', error);
    throw error;
  }
};