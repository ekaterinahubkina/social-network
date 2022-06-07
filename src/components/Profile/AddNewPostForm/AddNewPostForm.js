import styles from './AddNewPostForm.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';

const AddNewPostForm = (props) => {

    //const postTextRef = useRef();

    const handleAddNewPost = (event) => {
        event.preventDefault();
        props.dispatch(addPostActionCreator());
    }

    const handleChange = (event) => {
        const text = event.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <form className={styles.form}>
            <textarea className={styles.form__textarea}
                value={props.state.newPostText} onChange={handleChange} />
            <button className={styles.form__button} onClick={handleAddNewPost}>Add post</button>
        </form>
    )
}

export default AddNewPostForm; 