import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div className={styles.wallpaper}>
                <img src="https://images.unsplash.com/photo-1646313522505-cf1e3c05b288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="wallpaper" />
            </div>
            <MyPosts />

        </div>
    );
}

export default Profile;