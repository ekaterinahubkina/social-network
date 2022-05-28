import React, { useState } from "react";
import styles from './Post.module.css';

const Post = (props) => {

    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setIsLiked(true)
    }

    const handleDislike = () => {
        setIsLiked(false);
    }

    return (
        <article className={styles.post}>
            <h1>{props.title}</h1>
            <div className={styles.likeContainer}>
                <button className={`${styles.likeButton} ${isLiked && styles.likeButton_active}`} onClick={isLiked ? handleDislike : handleLike}></button>
                <span>{props.likeCount}</span>
            </div>
        </article>
    );
}

export default Post;