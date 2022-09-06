import React, {useState} from 'react';
import useInput from "./hooks";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

const Search: React.FunctionComponent = () => {
    const { handleSubmit, savedQueries } = useInput();
    const [value, setValue] = useState('');

    const handleSetValue = (inputValue: string) => {
        if (inputValue !== value) {
            setValue(inputValue);
        }
    }

    const keyDownHandler = (e: { key?: any; preventDefault?: () => void; }, inputValue: string) => {
        if (e.key === 'Enter') {
            setValue(inputValue);
            handleSubmit(inputValue);
        }
    }

    return (
        <Stack direction="row" spacing={1} sx={{ width: '80%', margin: '0 auto' }}>
            <Autocomplete
                sx={{
                    width: '100%'
                }}
                freeSolo
                disableClearable
                options={savedQueries.map((option) => option)}
                autoHighlight={false}
                onChange={(e, inputValue) => handleSetValue(inputValue)}
                onKeyDown={(e) => keyDownHandler(e, value)}
                onInputChange={(e, inputValue) => handleSetValue(inputValue)}
                renderInput={(params) =>
                    <TextField {...params}  />
                }
            />
            <Button
                onClick={(e) => handleSubmit(value)}
                variant="outlined"
                type="submit">
                    Search
            </Button>
        </Stack>
    );
}

Search.displayName = 'Search';

export default Search;