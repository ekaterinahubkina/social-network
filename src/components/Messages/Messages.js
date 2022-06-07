import React from "react";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import MessageForm from "./MessageForm/MessageForm";
import styles from "./Messages.module.css";

const Messages = (props) => {
  return (
    <div className={styles.messages}>
      <div className={styles.dialogs}>
        {props.state.dialogs.map((dialog) => (
          <Dialog key={dialog.id} name={dialog.name} id={dialog.id} />
        ))}
      </div>
      <div className={styles.messagesItems}>
        {props.state.messages.map((message) => (
          <Message key={message.id} message={message.message} />
        ))}
        <MessageForm state={props.state} dispatch={props.dispatch} />
      </div>
    </div>
  );
};

export default Messages;
