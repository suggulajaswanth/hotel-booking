import MenuIcon from '@mui/icons-material/Menu';
import { Box, Card, CardHeader, Container, IconButton, Stack } from "@mui/material";
import { ReactElement, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { BottomNavBar } from '../BottomNavBar';
import { Actions, Context } from "../reducer";
import './Menu.css';

export const MenuPage = (): ReactElement => {
    const { dispatch } = useContext(Context);

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
                    <Card sx={{ width: "80%", textAlign: "center", border: "none", boxShadow: "none" }}>
                        <CardHeader
                            avatar={<img style={{ borderRadius: "50%", height: "70px" }} src="/images/avatar.svg" alt=""></img>}
                            title="Jaswanth"
                            subheader="jaswanth@gmail.com" />
                    </Card>
                    <Stack spacing={3} sx={{ background: "#8C684D1A", width: "80%", borderRadius: "20px", mx: 'auto' }}>
                        <div className="menu-items" style={{ marginTop: "10px" }}>
                            <div className="menu-icon"><img src="/images/account.svg" alt="location" style={{ width: "30px" }}></img></div>
                            <div className="menu-btn">My Account</div>
                        </div>
                        <hr style={{ background: "#0000001A", marginTop: "5px", marginLeft: "40px", width: "85%", marginBottom: "0px" }}></hr>
                        <div className="menu-items">
                            <div className="menu-icon"><img src="/images/info.svg" alt="villa" style={{ width: "30px" }}></img></div>
                            <div className="menu-btn">About Us</div>
                        </div>
                        <hr style={{ background: "#0000001A", marginTop: "5px", marginLeft: "40px", width: "85%" }}></hr>
                        <div className="menu-items">
                            <img src='/images/events.svg' alt="" style={{ width: "90%" }}></img>
                        </div>
                        <div className="menu-items">
                            <div className="menu-icon"><img src="/images/villa2.svg" alt="house" style={{ width: "30px" }}></img></div>
                            <div className="menu-btn">List your villa</div>
                        </div>
                        <hr style={{ background: "#0000001A", marginTop: "5px", marginLeft: "40px", width: "85%" }}></hr>
                        <div className="menu-items" style={{ marginBottom: "5px" }}>
                            <div className="menu-icon"><img src="/images/help.svg" alt="support" style={{ width: "30px" }}></img></div>
                            <div className="menu-btn">Help</div>
                        </div>
                    </Stack>
                    <Button style={{ color: 'white', fontStyle: "Plus Jakarta Sans", fontWeight: "700", background: "#8C684D", width: "40%", border: "none", marginTop: "50px", marginBottom: "30px" }}>Log out</Button>
                </Box>
            </Box>
            <Container>
                <BottomNavBar></BottomNavBar>
            </Container>
        </>
    );
};
