import { useEffect, useState, useRef } from 'react';

const intersectionObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
}

export const useIntersectionObserver = (ref) => {
    const [isVisible, setIsVisible] = useState(false)
    const observerRef = useRef(null);

    const callback = (entries) => {
        const [entry] = entries
        setIsVisible(!entry.isIntersecting)
    }

    useEffect(() => {
        observerRef.current = new IntersectionObserver(callback, intersectionObserverOptions)
    }, [])

    useEffect(() => {
        observerRef.current.observe(ref.current);

        return () => {
            observerRef.current.disconnect();
        }
    }, [ref])

    return isVisible;
}