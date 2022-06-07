import styles from "./MessageForm.module.css";
import {
  addNewMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../redux/messagesReducer";

const MessageForm = (props) => {
  // const newMessageRef = useRef();

  const handleChange = (event) => {
    const text = event.target.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };

  const addNewMessage = (event) => {
    event.preventDefault();
    props.dispatch(addNewMessageActionCreator());
  };

  return (
    <form className={styles.form}>
      <textarea
        className={styles.form__textarea}
        value={props.state.newMessageText}
        onChange={handleChange}
      />
      <button className={styles.form__button} onClick={addNewMessage}>
        Send
      </button>
    </form>
  );
};

export default MessageForm;
