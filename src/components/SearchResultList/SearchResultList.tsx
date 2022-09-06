import React  from 'react';
import {SearchResultListProps} from "../../types";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const SearchResultList: React.FunctionComponent<SearchResultListProps> = ({result}) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    const photos = [...result]
        .map((photo) => (
            <ImageListItem key={photo.id}>
                <img
                    src={photo.urls.small}
                    srcSet={`${photo.urls.small}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={photo.user.name}
                />
            </ImageListItem>
        )
    );
    return (
        <ImageList cols={matches ? 4 : 1 } gap={8} sx={{ width: '90%', margin: '20px auto' }}>
            {photos}
        </ImageList>
    );
};

SearchResultList.displayName = 'SearchResultList';

export default SearchResultList;
