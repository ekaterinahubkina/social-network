import React from "react";
import AddNewPostForm from "../AddNewPostForm/AddNewPostForm";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <section className={styles.myPosts}>
            <h2>My Posts</h2>
            <AddNewPostForm state={props.state} dispatch={props.dispatch} />
            {props.state.posts.map((post) => (
                <Post key={post.id} title={post.message} likeCount={post.likesCount} />
            ))}
        </section>
    );
}

export default MyPosts;