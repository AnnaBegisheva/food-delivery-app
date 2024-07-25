import { useEffect, useState } from 'react';
import { usePopper } from 'react-popper'

export const usePopupComponent = (referenceRef, popperRef) => {
    const [arrowElement, setArrowElement] = useState(null)
    const [visible, setVisibility] = useState(false)

    useEffect(() => {
        document.addEventListener('mousedown', handleDocumentClick)
        return () => {
            document.removeEventListener('mousedown', handleDocumentClick)
        }
    }, [])

    const handleDocumentClick = (event) => {
        if (referenceRef.current.contains(event.target)) {
            return
        }
        setVisibility(false)
    }

    const { styles, attributes } = usePopper(referenceRef.current, popperRef.current, {
        placement: 'bottom',
        modifiers: [
            {
                name: 'offset',
                enabled: true,
                options: {
                    offset: [0, 40],
                },
            },
            { name: 'arrow', options: { element: arrowElement, padding: 8 } },
        ],
    })

    return { styles, attributes, visible, setVisibility, setArrowElement }
}