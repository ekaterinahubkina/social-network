import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hey, how are you?", likesCount: 11 },
        { id: 2, message: "What's up?", likesCount: 9 },
        { id: 3, message: "My first post..", likesCount: 10 },
        { id: 4, message: "blalala", likesCount: 5 },
      ],
      newPostText: "",
    },
    messagesPage: {
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
  },
  _callSubscriber() {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(
      this._state.messagesPage,
      action
    );

    this._callSubscriber(this._state);
  },
};

window.store = store;

export default store;
