// 7.2: routed anecdotes, step2
// Implement a view for showing a single anecdote.
const Anecdote = ({ anecdote }) => {
    return (
        <div>
            <h3>
                {anecdote.content} by {anecdote.author}
            </h3>
            <p>Has {anecdote.votes} votes</p>
            <p>
                For more information see: <a href={anecdote.info}>{anecdote.info}</a>
            </p>
        </div>
    );
};

export default Anecdote;
