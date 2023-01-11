import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({handekClickGood, handekClickNeutral, handekClickBad}) => {
    return(
    <ul className={styles.list}>
            <li className={styles.item}>
                <button className={styles.button}
                    type="button"
                    onClick={handekClickGood}>Good
                </button>
            </li>
            <li className={styles.item}>
                <button className={styles.button}
                    type="button"
                    onClick={ handekClickNeutral}>Neutral
                </button>
            </li>
            <li className={styles.item}>
                <button className={styles.button}
                    type="button"
                    onClick={handekClickBad}>Bad
                </button>
            </li>
    </ul>
)}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}