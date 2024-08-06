import { useLayoutEffect } from 'react';

function useLockBodyScroll(lock) {
    useLayoutEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        if (lock) {
            document.body.style.overflow = "hidden";
        }

        return () => {
            if (lock) {
                document.body.style.overflow = originalStyle;
            }
        };
    }, [lock]);
}

export default useLockBodyScroll;