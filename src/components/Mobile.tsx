import { AccountCircleRounded, LocationOn, SearchOutlined } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, BottomNavigation, BottomNavigationAction, Box, Button, Container, Divider, Drawer, IconButton, InputBase, List, ListItem, ListItemButton, ListItemText, Paper, Toolbar, Typography, alpha, styled } from "@mui/material";
import React, { ReactElement, useContext } from "react";
import { BookMarkNavBtn } from "./BottomNavButtons/BookMarkNav";
import { HomeNavBtn } from "./BottomNavButtons/HomeNav";
import { ProfileNavBtn } from "./BottomNavButtons/ProfileNav";
import { SearchNavBtn } from "./BottomNavButtons/SearchNav";
import { CarouselImg, Display } from "./Carousel";
import { ChooseLocation } from "./ChooseLocation";
import { FilterSvg } from "./FilterSvg";
import { InstFarmIcon } from "./instaFramIcon";
import { Actions, BottamNav, Context } from "./reducer";
import { CardsComponent } from "./CardsComponent";
import { Destinations } from "./Destinations";
import { Headings } from "./Headings";
import { FooterMobile } from "./MobileFooter";

const StyledDiv = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export const MobileApp = (): ReactElement => {
    const [value, setValue] = React.useState(0);
    const { dispatch } = useContext(Context);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navItems = ['Explore', 'List You Property', 'Why Choose Us', 'Help', 'About us'];

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <div style={{ display: "flex", justifyContent: "center" }}><AccountCircleRounded></AccountCircleRounded><div style={{ fontSize: "17px" }}>My Account</div></div>
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" style={{ background: "white", borderRadius: "10px" }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="default"
                            aria-label="menu"
                            onClick={() => setMobileOpen(true)}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon sx={{ zIndex: 2000 }}></MenuIcon>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black", fontSize: "16px" }}>
                            <LocationOn style={{ color: "#8C684D" }}></LocationOn>
                            Location
                        </Typography>
                        <InstFarmIcon></InstFarmIcon>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "100%" },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
            </Box>

            <Container>
                <ChooseLocation />
            </Container>

            <Container>
                <CarouselImg display={Display.BODY}></CarouselImg>
            </Container>

            <Container>
                <Box style={{ marginTop: "10px" }}>
                    <Button style={{ border: "0.5px solid #878787", width: "90%", padding: "13px 14.583px 14.583px 14.583px", borderRadius: "10px" }}>
                        <StyledDiv style={{ color: "#878787" }}>
                            <SearchIconWrapper>
                                <SearchOutlined></SearchOutlined>
                            </SearchIconWrapper>
                            <div style={{ textTransform: "none", fontSize: "17px", marginRight: "150px" }}>Search Farm</div>
                        </StyledDiv>
                        <FilterSvg></FilterSvg></Button>
                </Box>
            </Container>

            <Headings
                title="Pick Your Destination"
            ></Headings>

            <Container>
                <Destinations></Destinations>
            </Container>

            <Headings
                title="Nearby your location"
            ></Headings>

            <Container>
                <CardsComponent></CardsComponent>
            </Container>

            <Headings
                title="Nearby your location"
            ></Headings>

            <Container>
                <CardsComponent></CardsComponent>
            </Container>

            <Headings
                title="Nearby your location"
            ></Headings>

            <Container>
                <CardsComponent></CardsComponent>
            </Container>

            <Headings
                title="Looking for Events"
            ></Headings>

            <Container>
                <CarouselImg display={Display.FOOTER}></CarouselImg>
            </Container>

            <Container>
                <Box style={{ marginTop: "20px" }}>
                    <div style={{ textTransform: "none", fontWeight: "bolder", fontSize: "20px", marginBottom: "10px" }}>List Your Villa Farm with Us</div>
                </Box>
            </Container>


            <div style={{ display: "flex" }}>
                <div style={{ background: "#5DC5CD", width: "50%", height: "150px", borderTopRightRadius: "50px", borderBottomRightRadius: "50px" }}>
                    <p style={{ color: "#fff", width: "90%", marginLeft: "20px", marginTop: "25px", fontStyle: "Plus Jakarta Sans", fontWeight: "700", textAlign: "left", left: 20 }}>Join our network of happy owners and turn your farm into a high-revenue holiday destination!</p>
                    <Button style={{ color: 'white', fontStyle: "Plus Jakarta Sans", fontWeight: "700", background: "#8C684D", width: "40%" }}>List Now</Button>
                </div>
                <img src="/images/listgif.gif" alt="gif" style={{ width: "50%", height: "150px" }} ></img>
            </div>

            <div style={{ position: 'relative', width: '100%', textAlign: 'center' }}>
                <img src="/images/footer.png" alt="footer" style={{ width: "100%", height: "700px" }}></img>
                <div style={{ position: 'absolute', top: '55%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '80%' }}>
                    <FooterMobile></FooterMobile>
                </div>
            </div>

            <Container>
                <Box sx={{ pb: 7 }}>
                    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }} elevation={3}>
                        <BottomNavigation
                            showLabels
                            value={value}
                            onChange={(event, newValue) => {
                                switch (newValue) {
                                    case 0:
                                        dispatch({
                                            type: Actions.SET_ACTIVE_PAGE,
                                            data: BottamNav.HOME
                                        })
                                        break
                                    case 1:
                                        dispatch({
                                            type: Actions.SET_ACTIVE_PAGE,
                                            data: BottamNav.SEARCH
                                        })
                                        break
                                    case 2:
                                        dispatch({
                                            type: Actions.SET_ACTIVE_PAGE,
                                            data: BottamNav.BOOKMARK
                                        })
                                        break
                                    case 3:
                                        dispatch({
                                            type: Actions.SET_ACTIVE_PAGE,
                                            data: BottamNav.PROFILE
                                        })
                                        break
                                    default:
                                        dispatch({
                                            type: Actions.SET_ACTIVE_PAGE,
                                            data: BottamNav.HOME
                                        })
                                }
                                setValue(newValue);
                            }}
                        >
                            <BottomNavigationAction icon={<HomeNavBtn></HomeNavBtn>} />
                            <BottomNavigationAction icon={<SearchNavBtn></SearchNavBtn>} />
                            <BottomNavigationAction icon={<BookMarkNavBtn></BookMarkNavBtn>} />
                            <BottomNavigationAction icon={<ProfileNavBtn></ProfileNavBtn>} />
                        </BottomNavigation>
                    </Paper>
                </Box>
            </Container>
        </div>
    );
};