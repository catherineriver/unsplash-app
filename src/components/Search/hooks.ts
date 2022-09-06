import {useEffect, useState} from 'react';
import {saveData} from "./searchSlice";
import {useAppDispatch} from "../../app/hooks";
import {createApi} from "unsplash-js";

const useInput = () => {
    const [value, setValue] = useState<string>();
    const [savedQueries, setSavedQueries] = useState<string[]>([]);

    const dispatch = useAppDispatch()
    const key: string = (process.env.REACT_APP_UNSPLASH_API_KEY as string);

    const api = createApi({
        accessKey: key
    });

    const addToLocalStorage = (value: string) => {
        if(savedQueries.indexOf(value as string) === -1) {
            savedQueries.unshift(value as string);
            if(savedQueries.length > 5) {
                savedQueries.pop();
            }
            localStorage.setItem('search queries', JSON.stringify(savedQueries));
        }

    }

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('search queries') as string);
        if (items) {
            setSavedQueries(items);
        }
    }, []);

    const handleChange = (value: string) => {
        if (value !== undefined) {
            setValue(value);
        }
    };

    const handleSubmit = (value: string) => {
        api.search
            .getPhotos({ query: `${value}`, orientation: "landscape", page: 1,
                perPage: 10 })
            .then(result => {
                dispatch(saveData(result.response?.results));
                value !== undefined && addToLocalStorage(value);
            })
    }
    return {
        handleChange,
        handleSubmit,
        savedQueries,
    };
};

export default useInput;
