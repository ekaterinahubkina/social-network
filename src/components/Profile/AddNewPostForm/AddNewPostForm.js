import { useRef } from 'react';
import styles from './AddNewPostForm.module.css';
import { addPostActionCreator, updateNewPostText } from '../../../redux/state';

const AddNewPostForm = (props) => {

    const postTextRef = useRef();

    const handleAddNewPost = (event) => {
        event.preventDefault();
        props.dispatch(addPostActionCreator());
    }

    const handleChange = () => {
        const text = postTextRef.current.value;
        props.dispatch(updateNewPostText(text));
    }

    return (
        <form className={styles.form}>
            <textarea ref={postTextRef} className={styles.form__textarea}
                value={props.state.newPostText} onChange={handleChange} />
            <button className={styles.form__button} onClick={handleAddNewPost}>Add post</button>
        </form>
    )
}

export default AddNewPostForm; 