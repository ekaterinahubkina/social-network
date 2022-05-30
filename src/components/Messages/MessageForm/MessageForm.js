import { useRef } from 'react';
import styles from './MessageForm.module.css';

const MessageForm = (props) => {
    const newMessageRef = useRef();

    const handleChange = () => {
        const text = newMessageRef.current.value;
        props.updateNewMessageText(text);
    }

    const sendNewMessage = (event) => {
        event.preventDefault();
        props.addNewMessage();

    }


    return (
        <form className={styles.form}>
            <textarea ref={newMessageRef} className={styles.form__textarea} 
            value={props.state.newMessageText} onChange={handleChange} />
            <button className={styles.form__button} onClick={sendNewMessage}>Send</button>
        </form>
    )
}

export default MessageForm;