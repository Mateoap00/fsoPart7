import { Routes, Route, useNavigate, useMatch } from 'react-router-dom';
import { useState } from 'react';
import Menu from './components/Menu';
import Notification from './components/Notification';
import AnecdoteList from './components/AnecdoteList';
import Anecdote from './components/Anecdote';
import CreateNew from './components/CreateNew';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
    const [anecdotes, setAnecdotes] = useState([
        {
            content: 'If it hurts, do it more often',
            author: 'Jez Humble',
            info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
            votes: 0,
            id: 1,
        },
        {
            content: 'Premature optimization is the root of all evil',
            author: 'Donald Knuth',
            info: 'http://wiki.c2.com/?PrematureOptimization',
            votes: 0,
            id: 2,
        },
    ]);

    // 7.2: routed anecdotes, step2
    // Implement a view for showing a single anecdote.
    const match = useMatch('/anecdotes/:id');
    const anecdote = match
        ? anecdotes.find((anecdote) => anecdote.id === Number(match.params.id))
        : null;

    // 7.3: routed anecdotes, step3
    // After creating a new anecdote the application transitions automatically to showing the view for all anecdotes
    // and the user is shown a notification informing them of this successful creation for the next five seconds.
    const navigate = useNavigate();
    const [notification, setNotification] = useState('');

    const addNew = (anecdote) => {
        anecdote.id = Math.round(Math.random() * 10000);
        setAnecdotes(anecdotes.concat(anecdote));
        showNotification(`A new anecdote "${anecdote.content}" created!`);
        navigate('/');
    };

    const showNotification = (msg) => {
        setNotification(msg);
        setTimeout(() => {
            setNotification('');
        }, 5000);
    };

    // const anecdoteById = (id) => anecdotes.find((a) => a.id === id);

    // const vote = (id) => {
    //     const anecdote = anecdoteById(id);

    //     const voted = {
    //         ...anecdote,
    //         votes: anecdote.votes + 1,
    //     };

    //     setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
    // };

    // 7.1: routed anecdotes, step1
    // Add React Router to the application so that by clicking links in the Menu component the view can be changed.
    return (
        <div>
            <h1>Software anecdotes</h1>
            <Menu />
            <Notification msg={notification} />
            <Routes>
                <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />}></Route>
                <Route
                    path="/anecdotes"
                    element={<AnecdoteList anecdotes={anecdotes} />}
                ></Route>
                <Route
                    path="/anecdotes/:id"
                    element={<Anecdote anecdote={anecdote} />}
                ></Route>
                <Route path="/create-new" element={<CreateNew addNew={addNew} />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
