import React from "react";
import styles from './Messages.module.css';

const Messages = () => {
    return (
        <div className={styles.messages}>
            <div className={styles.dialogs}>
                <div className={styles.dialog + " " + styles.active}>
                    Kate
                </div>
                <div className={styles.dialog}>
                    Mary
                </div>
                <div className={styles.dialog}>
                    Lena
                </div>
            </div>
            <div className={styles.messagesItems}>
                <div className={styles.message}>Hi</div>
                <div className={styles.message}>Hello</div>
                <div className={styles.message}>How are you doing?</div>
            </div>
        </div>
    );
}

export default Messages;