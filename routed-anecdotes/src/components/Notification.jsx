// 7.3: routed anecdotes, step3
// After creating a new anecdote the application transitions automatically to showing the view for all anecdotes
// and the user is shown a notification informing them of this successful creation for the next five seconds.
const Notification = ({ msg }) => {
    const message = msg === '' ? '' : msg;
    return <p>{message}</p>;
};

export default Notification;
