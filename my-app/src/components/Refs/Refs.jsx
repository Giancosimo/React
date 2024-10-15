import React, { useEffect, useRef } from 'react';

const FocusableInput = () => {
    const inputRef = useRef(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    return <input type="text" ref={inputRef} placeholder="Focus on mount" />;
}
const MountEffectComponent = () => {
    const hasMounted = useRef(false);
    useEffect(() => {
        if (!hasMounted.current) {

            console.log('Component mounted for the first time');
            hasMounted.current = true;
        }
    }, []);
    return <div>Check the console for the mount message.</div>;
}
export default FocusableInput