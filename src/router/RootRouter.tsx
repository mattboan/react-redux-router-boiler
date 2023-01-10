import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Entry } from '../Entry';

/**
 * This is the RootRouter, this is where the root router is defined
 */
export const RootRouter = () => {
    return (
        <div className="router">
            <Routes>
                <Route path="/" element={<Entry />} />
            </Routes>
        </div>
    );
};
