const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        switch (true) {
            case action.type === 'ADD-POST':
                const newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0
                }
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
                break;
            case action.type === 'UPDATE-NEW-POST-TEXT':
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
                break;
            case action.type === 'ADD-NEW-MESSAGE':
                const newMessage = {
                    id: 5,
                    message: this._state.messagesPage.newMessageText,
                }
                this._state.messagesPage.messages.push(newMessage);
                this._state.messagesPage.newMessageText = '';
                this._callSubscriber(this._state);
                break;
            case action.type === 'UPDATE-NEW-MESSAGE-TEXT':
                this._state.messagesPage.newMessageText = action.newText;
                this._callSubscriber(this._state);
                break;
            default:
                return;
        }

    },
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}

export const updateNewPostText = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

export const addNewMessageActionCreator = () => {
    return {
        type: ADD_NEW_MESSAGE,
    }
}

export const updateNewMessageText = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text,
    }
}

window.store = store;

export default store;