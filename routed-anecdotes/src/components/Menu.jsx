import { Link } from 'react-router-dom';

// 7.1: routed anecdotes, step1
// Add React Router to the application so that by clicking links in the Menu component the view can be changed.
const Menu = () => {
    const padding = {
        paddingRight: 5,
    };
    return (
        <div>
            <Link to="/anecdotes" style={padding}>
                Anecdotes
            </Link>
            <span>| </span>
            <Link to="/create-new" style={padding}>
                Create New
            </Link>
            <span>| </span>
            <Link to="/about" style={padding}>
                About
            </Link>
        </div>
    );
};

export default Menu;
