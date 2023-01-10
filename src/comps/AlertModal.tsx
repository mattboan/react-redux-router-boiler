import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/alert-modal.scss';
import { Button } from './Button';

export interface Props {
    type: 'success' | 'error' | 'warning';
    children: React.ReactNode;
    open: boolean;
    onClose?: () => void;
    onSuccess?: any;
}

export const AlertModal = (props: Props) => {
    return (
        <div className="alert-wrapper">
            {/* Actual Alert */}
            <AnimatePresence>
                {props.open && (
                    <motion.div
                        className="alert-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className={`alert ${props.type}`}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            {/* Header for the alert */}
                            <div className="alert-header">
                                <div className="alert-title">
                                    {props.type === 'success' && <>Success</>}
                                    {props.type === 'error' && <>Error</>}
                                    {props.type === 'warning' && <>Warning</>}
                                </div>
                            </div>
                            <div className="alert-content">
                                {props.children}
                            </div>
                            <div className="alert-close">
                                <Button onClick={props.onClose}>Cancel</Button>
                                <Button onClick={props.onSuccess} secondary>
                                    Delete
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
