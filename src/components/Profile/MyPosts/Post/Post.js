import React from "react";
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <article className={styles.post}>
            <h1>{props.title}</h1>
            <button>like</button>
            <span>{props.likeCount}</span>
        </article>
    );
}

export default Post;