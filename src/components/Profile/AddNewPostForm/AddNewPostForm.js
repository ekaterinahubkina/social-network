import { useRef } from 'react';
import styles from './AddNewPostForm.module.css';

const AddNewPostForm = (props) => {

    const postTextRef = useRef();

    const handleAddNewPost = (event) => {
        event.preventDefault();
        const text = postTextRef.current.value;
        props.addPost(text);
        postTextRef.current.value = '';
    }
    return (
        <form className={styles.form}>
            <textarea ref={postTextRef} className={styles.form__textarea}></textarea>
            <button className={styles.form__button} onClick={handleAddNewPost}>Add post</button>
        </form>
    )
}

export default AddNewPostForm; 