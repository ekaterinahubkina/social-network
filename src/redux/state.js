const state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hey, how are you?', likesCount: 11 },
            { id: 2, message: 'What\'s up?', likesCount: 9 },
            { id: 3, message: 'My first post..', likesCount: 10 },
            { id: 4, message: 'blalala', likesCount: 5 }
        ],
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
    }

}

export const addPost = (newPostMessage) => {
    const newPost = {
        id: 5,
        message: newPostMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
}

export default state;