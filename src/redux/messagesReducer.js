const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const addNewMessageActionCreator = () => {
  return {
    type: ADD_NEW_MESSAGE,
  };
};

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
  };
};

const initialState = {
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
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      const newMessage = {
        id: 5,
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
};

export default messagesReducer;
