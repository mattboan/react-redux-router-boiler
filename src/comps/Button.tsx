import { motion } from 'framer-motion';
import '../styles/button.scss';

export interface Props {
    children?: React.ReactNode;
    onClick?: any;
    disabled?: boolean;
    loading?: boolean;
    secondary?: boolean;
}

// Default button
export const Button = (props: Props) => {
    return (
        <motion.button
            id={props.disabled ? 'disabled' : ''}
            className={`btn def-btn ${props.secondary ? 'secondary' : ''}`}
            onClick={props.onClick}
            whileTap={{ scale: props.disabled ? 1 : 0.9 }}
            transition={{ type: 'tween' }}
            disabled={props.disabled}
        >
            {/* If loading */}
            {props.loading ? <>Loading...</> : <>{props.children} </>}
        </motion.button>
    );
};
