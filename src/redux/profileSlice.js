import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profilePage",
  initialState: {
    posts: [
      { id: 1, message: "Hey, how are you?", likesCount: 11 },
      { id: 2, message: "What's up?", likesCount: 9 },
      { id: 3, message: "My first post..", likesCount: 10 },
      { id: 4, message: "blalala", likesCount: 5 },
    ],
    newPostText: "",
  },
  reducers: {
    addPost(state, action) {
      console.dir(state);
      console.dir(action);

      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
    },
    updateNewPostText(state, action) {
      state.newPostText = action.newText;
    },
  },
});

export const { addPost, updateNewPostText } = profileSlice.actions;
export default profileSlice.reducer;
