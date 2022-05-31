import { useRef } from 'react';
import styles from './MessageForm.module.css';
import { addNewMessageActionCreator, updateNewMessageText } from '../../../redux/state';

const MessageForm = (props) => {
    const newMessageRef = useRef();

    const handleChange = () => {
        const text = newMessageRef.current.value;
        props.dispatch(updateNewMessageText(text));
    }

    const addNewMessage = (event) => {
        event.preventDefault();
        props.dispatch(addNewMessageActionCreator());
    }


    return (
        <form className={styles.form}>
            <textarea ref={newMessageRef} className={styles.form__textarea} 
            value={props.state.newMessageText} onChange={handleChange} />
            <button className={styles.form__button} onClick={addNewMessage}>Send</button>
        </form>
    )
}

export default MessageForm;