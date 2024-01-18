import { useField } from '../hooks';

const CreateNew = (props) => {
    // 7.4: anecdotes and hooks step 1:
    // Simplify the anecdote creation form of your application with the useField custom hook.
    const content = useField('text');
    const author = useField('text');
    const info = useField('text');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addNew({
            content: content.value,
            author: author.value,
            info: info.value,
            votes: 0,
        });
    };

    // 7.5: anecdotes and hooks step 2:
    // Add a button to the form that you can use to clear all the input fields. Expand the functionality
    // of the useField hook so that it offers a new reset operation for clearing the field.
    const handleReset = (e) => {
        e.preventDefault();
        content.reset();
        author.reset();
        info.reset();
    };

    // 7.6: anecdotes and hooks step3
    // Make the necessary changes to get rid of the Invalid value for prop `reset` on <input> tag console warning.
    const contentField = { ...content, reset: undefined };
    const authorField = { ...author, reset: undefined };
    const infoField = { ...info, reset: undefined };

    return (
        <div>
            <h2>Create a new anecdote</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    content:
                    <input {...contentField} />
                </div>
                <div>
                    author:
                    <input {...authorField} />
                </div>
                <div>
                    url for more info
                    <input {...infoField} />
                </div>
                <button type="submit">Create</button>
                <button onClick={handleReset}>Reset</button>
            </form>
        </div>
    );
};

export default CreateNew;
