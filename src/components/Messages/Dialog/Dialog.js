import styles from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
//debugger
    const linkActiveClass = ({ isActive }) => {
        return `${styles.dialog__link} ${isActive && styles.dialog__link_active}`;
    }

    return (
        <div className={styles.dialog}>
            <NavLink className={linkActiveClass} to={`${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;