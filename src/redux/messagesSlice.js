import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
  name: "messagesPage",
  initialState: {
    dialogs: [
      { id: 1, name: "Kate" },
      { id: 2, name: "Elena" },
      { id: 3, name: "Vlad" },
      { id: 4, name: "Dima" },
    ],
    messages: [
      { id: 1, message: "Hi, it's me" },
      { id: 2, message: "Hello!" },
      { id: 3, message: "Hello, world!" },
      { id: 4, message: "Hey yo!" },
    ],
    newMessageText: "",
  },
  reducers: {
    addNewMessage(state, action) {
      console.dir(state);
      console.dir(action);

      const newMessage = {
        id: 5,
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
    },
    updateNewMessageText(state, action) {
      state.newMessageText = action.newText;
    },
  },
});

export const { addNewMessage, updateNewMessageText } = messagesSlice.actions;
export default messagesSlice.reducer;
