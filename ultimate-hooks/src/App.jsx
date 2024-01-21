import { useField } from './hooks/useField';
import { useResource } from './hooks/useResource';

// 7.8: ultimate hooks
// Extract the code for communicating with the backend into its own useResource hook.
// The useResource custom hook returns an array of two items just like the state hooks.
// The first item of the array contains all of the individual resources and the second
// item of the array is an object that can be used for manipulating the resource
// collection, like creating new ones.
const App = () => {
    const content = useField('text');
    const name = useField('text');
    const number = useField('text');

    const [notes, noteService] = useResource('http://localhost:3005/notes');
    const [persons, personService] = useResource('http://localhost:3005/persons');

    const handleNoteSubmit = (event) => {
        event.preventDefault();
        noteService.create({ content: content.value });
        content.reset();
    };

    const handlePersonSubmit = (event) => {
        event.preventDefault();
        personService.create({ name: name.value, number: number.value });
        name.reset();
        number.reset();
    };

    const contentField = { ...content, reset: undefined };
    const nameField = { ...name, reset: undefined };
    const numberField = { ...number, reset: undefined };

    return (
        <div>
            <h2>Notes</h2>
            <form onSubmit={handleNoteSubmit}>
                <input {...contentField} />
                <button>create</button>
            </form>
            {notes ? notes.map((n) => <p key={n.id}>{n.content}</p>) : <></>}

            <h2>Persons</h2>
            <form onSubmit={handlePersonSubmit}>
                name <input {...nameField} /> <br />
                number <input {...numberField} />
                <button>create</button>
            </form>
            {persons ? (
                persons.map((n) => (
                    <p key={n.id}>
                        {n.name} {n.number}
                    </p>
                ))
            ) : (
                <></>
            )}
        </div>
    );
};

export default App;
