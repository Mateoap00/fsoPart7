import { useState } from 'react';

// 7.4: anecdotes and hooks step 1:
// Simplify the anecdote creation form of your application with the useField custom hook.
export const useField = (type) => {
    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    };

    // 7.5: anecdotes and hooks step 2:
    // Add a button to the form that you can use to clear all the input fields. Expand the functionality
    // of the useField hook so that it offers a new reset operation for clearing the field.
    const reset = () => {
        setValue('');
    };

    return {
        type,
        value,
        onChange,
        reset,
    };
};
