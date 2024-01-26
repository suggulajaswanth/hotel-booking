import { AppBar, BottomNavigation, BottomNavigationAction, Box, Button, Card, CardContent, CardMedia, Container, Divider, Drawer, Grid, IconButton, Paper, Rating, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography, useTheme } from "@mui/material";
import { ReactElement, useContext } from "react";
import { Actions, Context } from "./reducer";
import { LogIn } from "./Login";

const BottomNavButtons = (): ReactElement => {
    return (
        <Box sx={{ pb: 7 }}>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }} elevation={3}>
                <div style={{ display: "flex", justifyContent: 'space-between' }}>
                    <div style={{ marginLeft: "25px", marginTop: "10px", textTransform: "none" }}>Pre-Book your meals</div>
                    <Switch sx={{ marginRight: "12px", marginTop: "10px" }} /></div>
                <BottomNavigation
                    showLabels
                >
                    <BottomNavigationAction icon={<Button style={{ color: 'white', fontStyle: "Plus Jakarta Sans", fontWeight: "700", background: "#8C684D", textTransform: "none", width: "320%" }}>Book now</Button>} />
                </BottomNavigation>
            </Paper>
        </Box>
    );
};

export const BookingsPage = () => {
    const { state, dispatch } = useContext(Context);
    const { showBookingsPage, userLoggedIn } = state;
    return (
        <Drawer
            variant="temporary"
            open={showBookingsPage}
            onClose={() => dispatch({
                type: Actions.SHOW_HIDE_BOOKINGS_PAGE,
                data: false
            })}
            ModalProps={{
                keepMounted: true,
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "100%" },
            }}
        >
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" style={{ background: "white", boxShadow: "none" }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="default"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <img src="/images/back.svg" onClick={() => {
                                dispatch({
                                    type: Actions.SHOW_HIDE_BOOKINGS_PAGE,
                                    data: false
                                })
                            }}></img>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Container>
                    <Card sx={{ display: 'flex', marginTop: "100px", height: "150px", boxShadow: "none" }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 131, height: 130, marginLeft: "10px", borderRadius: "15px" }}
                            image="/images/villa2.webp"
                            alt="Live from space album cover"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <div style={{ display: "flex" }}>
                                    <Typography component="div" variant="h5">
                                        ABC Farm
                                    </Typography>
                                    <div style={{ fontSize: "15px", textTransform: "none", color: "#8C684D", fontWeight: "bold", marginLeft: "80px" }}>₹3,599 /night</div>
                                </div>
                                <Typography sx={{ marginTop: "10px" }} variant="subtitle1" color="text.secondary" component="div">
                                    Hyderabad, India
                                </Typography>
                                <div style={{ display: "flex", marginTop: "10px" }}>
                                    <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                                    <div style={{ fontSize: "13px", marginTop: "3px", marginLeft: "5px", fontWeight: "bold" }}>5.0 (243)</div></div>
                            </CardContent>
                        </Box>
                    </Card>
                </Container>

                <Divider sx={{ borderBottom: "5px solid #EBEBEB", width: "90%", margin: "auto" }}></Divider>

                <Container>
                    <Grid container spacing={2} sx={{ width: "100%", justifyContent: "center", alignItems: "center", margin: "auto" }}>
                        <Grid item xs={12} sx={{ width: "100%", marginLeft: "0px" }}>
                            <h5 style={{ marginBottom: "20px" }}>Your Trip</h5>
                            <div style={{ display: "flex", justifyContent: 'space-between' }}>
                                <div style={{ fontSize: "16px", fontWeight: "bold" }}>Dates</div>
                                <div style={{ fontWeight: "bold", marginRight: "50px", textDecoration: 'underline', color: "#8C684D" }}>Edit</div>
                            </div>
                            <p style={{ fontSize: "14px", color: "grey" }}>15-20 oct</p>

                            <div style={{ display: "flex", justifyContent: 'space-between' }}>
                                <div style={{ fontSize: "16px", fontWeight: "bold" }}>Guests</div>
                                <div style={{ fontWeight: "bold", marginRight: "50px", textDecoration: 'underline', color: "#8C684D" }}>Edit</div>
                            </div>
                            <p style={{ fontSize: "14px", color: "grey" }}>2 guests</p>
                        </Grid>
                    </Grid>
                </Container>

                <Divider sx={{ borderBottom: "5px solid #EBEBEB", width: "90%", margin: "auto" }}></Divider>

                <Container>
                    <Grid container spacing={2} sx={{ width: "100%", justifyContent: "center", alignItems: "center", margin: "auto" }}>
                        <Grid item xs={12} sx={{ width: "100%", marginLeft: "0px" }}>
                            <h5 style={{ marginBottom: "20px" }}>Price Details</h5>
                            <TableContainer component={Paper} sx={{ borderBottom: "0px", boxShadow: "none" }}>
                                <Table aria-label="spanning table">
                                    <TableRow>
                                        <TableCell sx={{ padding: "0px", borderBottom: "0px", borderTop: "none", boxShadow: "none" }}>₹5,000 x 5 nights</TableCell>
                                        <TableCell align="right" sx={{ borderBottom: "0px", borderTop: "none", boxShadow: "none" }}>₹25,000</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={{ padding: "0px", borderBottom: "none", borderTop: "none", boxShadow: "none" }}>Meals</TableCell>
                                        <TableCell align="right" sx={{ borderBottom: "none", borderTop: "none", boxShadow: "none" }}>₹10,529.42</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={{ padding: "0px", borderBottom: "none", borderTop: "none", boxShadow: "none" }}>Discounts</TableCell>
                                        <TableCell align="right" sx={{ borderBottom: "none", borderTop: "none", boxShadow: "none" }}>-₹3,529.42</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell sx={{ padding: "0px" }}>Taxes</TableCell>
                                        <TableCell align="right">₹3,000</TableCell>
                                    </TableRow>
                                    <TableRow sx={{ borderBottom: "none", borderTop: "none", boxShadow: "none" }}>
                                        <TableCell sx={{ padding: "0px", borderBottom: "none", borderTop: "none", boxShadow: "none", fontWeight: "bold" }}>Total (INR)</TableCell>
                                        <TableCell align="right" sx={{ borderBottom: "none", borderTop: "none", boxShadow: "none", fontWeight: "bold" }}>
                                            ₹34,529.42
                                            <div style={{ textDecoration: "underline", color: "#8C684D" }}>More Info</div>
                                        </TableCell>
                                    </TableRow>

                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </Container>

                <Divider sx={{ borderBottom: "5px solid #EBEBEB", width: "90%", margin: "auto" }}></Divider>
                <Container sx={{ marginBottom: "120px" }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                        {!userLoggedIn && <LogIn isBookingPage={true}></LogIn>}
                    </Box>
                </Container>
            </Box>
            <Container>
                <BottomNavButtons></BottomNavButtons>
            </Container>
        </Drawer>
    )
};
