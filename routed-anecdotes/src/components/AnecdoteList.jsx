import { Link } from 'react-router-dom';

// 7.2: routed anecdotes, step2
// Implement a view for showing a single anecdote.
const AnecdoteList = ({ anecdotes }) => {
    return (
        <div>
            <h2>Anecdotes</h2>
            <ul>
                {anecdotes.map((anecdote) => (
                    <Link key={anecdote.id} to={`/anecdotes/${anecdote.id}`}>
                        <li>{anecdote.content}</li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default AnecdoteList;
