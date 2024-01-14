import MenuIcon from '@mui/icons-material/Menu';
import { Box, Container, IconButton } from "@mui/material";
import { ReactElement, useContext } from 'react';
import { BottomNavBar } from '../BottomNavBar';
import { LoggedIn } from '../LoggedIn';
import { LogIn } from '../Login';
import { Actions, Context } from "../reducer";
import './Menu.css';

export const MenuPage = (): ReactElement => {
    const { dispatch, state } = useContext(Context);
    const { userLoggedIn } = state;

    return (
        <>
            <Box sx={{ height: "100%" }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="default"
                    aria-label="menu"
                    onClick={() => dispatch({
                        type: Actions.SHOW_HIDE_MENU_PAGE,
                        data: false
                    })}
                    sx={{ position: 'absolute', top: '5px', left: '10px', zIndex: 2000 }}
                >
                    <MenuIcon />
                </IconButton>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                    <img style={{ width: "30%", marginBottom: "50px", marginTop: "50px" }} src="/images/instafarmlogo.svg" alt=""></img>
                    {userLoggedIn &&
                        <LoggedIn></LoggedIn>}
                    {!userLoggedIn && <LogIn></LogIn>}
                </Box>
            </Box>
            <Container>
                <BottomNavBar></BottomNavBar>
            </Container>
        </>
    );
};
