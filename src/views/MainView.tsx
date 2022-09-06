import React from "react";
import Search from "../components/Search/Search";
import ResultList from "../components/SearchResultList/SearchResultList";
import {useAppSelector} from "../app/hooks";
import {RootState} from "../app/store";
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';
import {useAuth0} from "@auth0/auth0-react";
import Typography from '@mui/material/Typography';
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const MainView: React.FunctionComponent = () => {
    const searchResult = useAppSelector((state: RootState) => state.search.list);
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <>
            <Container maxWidth='xl'>
                {isAuthenticated
                    ? <Button sx={{mt: 1}} onClick={() => logout({ returnTo: window.location.origin })}>Log out</Button>
                    : <Button sx={{mt: 1}} onClick={() => loginWithRedirect({defaultScope: 'public write_likes'})}>Log in</Button>
                }
            </Container>
            <Container maxWidth='xl'>
                <Typography component='h2' align='center' sx={{pb: 3, fontSize: mobile ? 44 : 30}}>
                    What you want to see?
                </Typography>
                <Search />
                {searchResult.length !== 0 &&
                    <ResultList result={searchResult} />
                }
            </Container>
        </>
    );
}

MainView.displayName = 'MainView';

export default MainView;