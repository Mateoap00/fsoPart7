import axios from 'axios';
import { useEffect, useState } from 'react';

// 7.8: ultimate hooks
// Extract the code for communicating with the backend into its own useResource hook.
// The useResource custom hook returns an array of two items just like the state hooks.
// The first item of the array contains all of the individual resources and the second
// item of the array is an object that can be used for manipulating the resource
// collection, like creating new ones.
export const useResource = (url) => {
    const [resourceState, setResourceState] = useState(null);

    useEffect(() => {
        const get = async () => {
            try {
                const response = await axios.get(url);
                console.log(response.data);
                setResourceState(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        get();
    }, [url]);

    const getAll = async () => {
        try {
            const response = await axios.get(url);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    const getOne = async (id) => {
        try {
            const response = await axios.get(`${url}/${id}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    const create = async (newObject) => {
        try {
            const response = await axios.post(url, newObject);
            setResourceState([...resourceState, response.data]);
        } catch (error) {
            console.error(error);
        }
    };

    // const update = async (id, newObject) => {
    //     const response = await axios.put(`${url}/${id}`, newObject);
    //     console.log(response.data);
    // };

    // const delete = async (id) => {
    //     const response = await axios.delete(`${url}/${id}`);
    //     console.log(response.data);
    // };

    const resourceService = {
        getAll,
        getOne,
        create,
    };

    return [resourceState, resourceService];
};
