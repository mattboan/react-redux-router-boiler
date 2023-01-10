import { useRef } from 'react';

/**
 * Hook for focusing on an element
 */
export const useFocus = () => {
    const htmlElRef = useRef<any>(null!);

    // Set the focus to the element
    const setFocus = (val: boolean) => {
        if (val) {
            htmlElRef.current && htmlElRef.current.focus();
        } else {
            htmlElRef.current && htmlElRef.current.blur();
        }
    };

    return [htmlElRef, setFocus] as [typeof htmlElRef, typeof setFocus];
};
