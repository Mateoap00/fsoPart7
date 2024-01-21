import './App.css';

import { useState, useEffect } from 'react';
import axios from 'axios';

const useField = (type) => {
    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    };

    return {
        type,
        value,
        onChange,
    };
};

// 7.7: country hook.
// Implement a custom hook useCountry, which can be used to search for the details of the country given
// to the hook as a parameter.
const useCountry = (name) => {
    const [country, setCountry] = useState(null);

    useEffect(() => {
        const fetchCountryInfo = async () => {
            try {
                const countryInfo = await axios.get(
                    `https://studies.cs.helsinki.fi/restcountries/api/name/${name}`
                );

                setCountry({ ...countryInfo, found: true });
            } catch (error) {
                console.error(error);
                setCountry({ found: false });
            }
        };

        fetchCountryInfo();
    }, [name]);

    return country;
};

const Country = ({ country }) => {
    if (!country) {
        return null;
    }

    if (!country.found) {
        return <div>not found...</div>;
    }

    return (
        <div>
            <h3>Name: {country.data.name.common} </h3>
            <div>Capital: {country.data.capital} </div>
            <div>Population: {country.data.population}</div>
            <img src={country.data.flags.png} height="100" alt={country.data.flags.alt} />
        </div>
    );
};

const App = () => {
    const nameInput = useField('text');
    const [name, setName] = useState('');
    const country = useCountry(name);

    const fetch = (e) => {
        e.preventDefault();
        setName(nameInput.value);
    };

    return (
        <div>
            <form onSubmit={fetch}>
                <input {...nameInput} />
                <button type="submit">find</button>
            </form>

            <Country country={country} />
        </div>
    );
};

export default App;
