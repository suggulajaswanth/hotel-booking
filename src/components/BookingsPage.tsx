import { AppBar, Box, Drawer, IconButton, Toolbar } from "@mui/material";
import { useContext } from "react";
import { Actions, Context } from "./reducer";

export const BookingsPage = () => {
    const { state, dispatch } = useContext(Context);
    const { showBookingsPage } = state;
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
            </Box>
        </Drawer>
    )
};

