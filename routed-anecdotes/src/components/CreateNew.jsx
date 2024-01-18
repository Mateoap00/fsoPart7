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

    return (
        <div>
            <h2>Create a new anecdote</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    content:
                    <input {...content} />
                </div>
                <div>
                    author:
                    <input {...author} />
                </div>
                <div>
                    url for more info
                    <input {...info} />
                </div>
                <button type="submit">Create</button>
                <button onClick={handleReset}>Reset</button>
            </form>
        </div>
    );
};

export default CreateNew;
