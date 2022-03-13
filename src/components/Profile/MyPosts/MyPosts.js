import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <section className={styles.myPosts}>
            <h1>My Posts</h1>
            <Post title='My first post' likeCount='1' />
            <Post title='My second post' likeCount='2' />
            <Post title='My third post' likeCount='3' />
        </section>
    );
}

export default MyPosts;