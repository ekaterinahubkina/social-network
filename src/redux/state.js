// import { rerenderEntireTree } from '../index';
// let rerenderEntireTree = () => {
//     console.log('state changed');
// }
const store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hey, how are you?', likesCount: 11 },
                { id: 2, message: 'What\'s up?', likesCount: 9 },
                { id: 3, message: 'My first post..', likesCount: 10 },
                { id: 4, message: 'blalala', likesCount: 5 }
            ],
            newPostText: '',
        },
        messagesPage: {
            dialogs: [
                { id: 1, name: 'Kate' },
                { id: 2, name: 'Elena' },
                { id: 3, name: 'Vlad' },
                { id: 4, name: 'Dima' },
            ],
            messages: [
                { id: 1, message: 'Hi, it\'s me' },
                { id: 2, message: 'Hello!' },
                { id: 3, message: 'Hello, world!' },
                { id: 4, message: 'Hey yo!' },
            ],
            newMessageText: '',
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    addPost() {
        const newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addNewMessage() {
        const newMessage = {
            id: 5,
            message: this._state.messagesPage.newMessageText,
        }
        this._state.messagesPage.messages.push(newMessage);
        this._state.messagesPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText (newText) {
        this._state.messagesPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

// const state = {
//     profilePage: {
//         posts: [
//             { id: 1, message: 'Hey, how are you?', likesCount: 11 },
//             { id: 2, message: 'What\'s up?', likesCount: 9 },
//             { id: 3, message: 'My first post..', likesCount: 10 },
//             { id: 4, message: 'blalala', likesCount: 5 }
//         ],
//         newPostText: '',
//     },
//     messagesPage: {
//         dialogs: [
//             { id: 1, name: 'Kate' },
//             { id: 2, name: 'Elena' },
//             { id: 3, name: 'Vlad' },
//             { id: 4, name: 'Dima' },
//         ],
//         messages: [
//             { id: 1, message: 'Hi, it\'s me' },
//             { id: 2, message: 'Hello!' },
//             { id: 3, message: 'Hello, world!' },
//             { id: 4, message: 'Hey yo!' },
//         ],
//         newMessageText: '',
//     }

// }

// export const addPost = () => {
//     const newPost = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likesCount: 0
//     }
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';
//     rerenderEntireTree(state);
// }

// export const updateNewPostText = (newText) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
// }

// export const addNewMessage = () => {
//     const newMessage = {
//         id: 5,
//         message: state.messagesPage.newMessageText,
//     }
//     state.messagesPage.messages.push(newMessage);
//     state.messagesPage.newMessageText = '';
//     rerenderEntireTree(state);
// }

// export const updateNewMessageText = (newText) => {
//     state.messagesPage.newMessageText = newText;
//     rerenderEntireTree(state);
// }

// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// }

window.store = store;

export default store;