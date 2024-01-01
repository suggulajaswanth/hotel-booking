import { Star } from "@mui/icons-material";
import { AppBar, Box, Container, Drawer, Grid, IconButton, Slider, TextField, ThemeProvider, ToggleButton, ToggleButtonGroup, Toolbar, Typography, createTheme } from "@mui/material";
import { ReactElement, useContext, useState } from "react";
import { Actions, Context } from "./reducer";
import { SortyBy } from "./SortBy";

const backgroundImageUrl = '/images/arrow.svg';
const theme = createTheme({
    components: {
        MuiSlider: {
            styleOverrides: {
                thumb: {
                    width: '30px',
                    height: '30px',
                    borderRadius: "0px",
                    border: "1px solid #8C684D",
                    backgroundClip: "transparent",
                    backgroundColor: "white",
                    backgroundImage: `url(${backgroundImageUrl})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "5px",
                    backgroundPositionY: "8.5px"
                },
            },
        },
    },
});

const RangeSlider: React.FC = () => {
    const [range, setRange] = useState<[number, number]>([0, 100000]);

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setRange(newValue as [number, number]);
    };

    const handleMinInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const minValue = event.target.value === '' ? 0 : Number(event.target.value);
        setRange([minValue, range[1]]);
    };

    const handleMaxInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const maxValue = event.target.value === '' ? 0 : Number(event.target.value);
        setRange([range[0], maxValue]);
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={2} sx={{ width: "80%", justifyContent: "center", alignItems: "center", margin: "auto" }}>
                <Grid item xs={12} style={{ marginBottom: "20px" }}>
                    <h5 style={{ marginBottom: "20px" }}>Price Range</h5>
                    <Slider
                        sx={{ color: "#8C684D", marginBottom: "30px", marginLeft: "5px" }}
                        value={range}
                        onChange={handleSliderChange}
                        valueLabelDisplay="auto"
                        min={0}
                        max={10000}
                        valueLabelFormat={(value) => value.toString()}
                    />
                </Grid>
                <div style={{ display: "flex", width: "100%" }}>
                    <Grid item xs={6}>
                        <TextField
                            label="Minimum"
                            variant="outlined"
                            type="number"
                            value={range[0]}
                            onChange={handleMinInputChange}
                            fullWidth
                        />
                    </Grid>
                    <div style={{ justifyContent: "center", color: "grey", fontSize: "25px", marginLeft: "10px", marginRight: "10px" }}> - </div>
                    <Grid item xs={6}>
                        <TextField
                            label="Maximum"
                            variant="outlined"
                            type="number"
                            value={range[1]}
                            onChange={handleMaxInputChange}
                            fullWidth
                        />
                    </Grid>
                </div>
            </Grid>
        </ThemeProvider>
    );
};

const Rating = (): ReactElement => {
    const [selectedRating, setSelectedRatingr] = useState<string | null>(null);

    const handleRatingChange = (event: React.MouseEvent<HTMLElement>, newColor: string | null) => {
        setSelectedRatingr(newColor);
    }
    return (
        <Grid container spacing={2} sx={{ width: "80%", justifyContent: "center", alignItems: "center", margin: "auto" }}>
            <Grid item xs={12}>
                <h5 style={{ marginBottom: "20px" }}>Rating</h5>
                <ToggleButtonGroup
                    value={selectedRating}
                    exclusive
                    onChange={handleRatingChange}
                    aria-label="rating"
                    sx={{ background: 'none', display: 'flex' }}
                >
                    <ToggleButton value="3" style={{ backgroundColor: selectedRating === '3' ? '#8C684D' : '#F8F8F8', color: selectedRating === '3' ? "#fff" : '#000', border: "none", marginRight: '50px', width: '70px', borderRadius: "9px", height: "35px" }}>
                        3 <Star sx={{ color: "#F2C94C" }} ></Star>
                    </ToggleButton>
                    <ToggleButton value="3.5" style={{ backgroundColor: selectedRating === '3.5' ? '#8C684D' : '#F8F8F8', color: selectedRating === '3.5' ? "#fff" : '#000', border: "none", marginRight: '50px', width: '70px', borderRadius: "9px", height: "35px" }}>
                        3.5<Star sx={{ color: "#F2C94C" }} ></Star>
                    </ToggleButton>
                    <ToggleButton value="4" style={{ backgroundColor: selectedRating === '4' ? '#8C684D' : '#F8F8F8', color: selectedRating === '4' ? "#fff" : '#000', border: "none", marginRight: '50px', width: '70px', borderRadius: "9px", height: "35px" }}>
                        4<Star sx={{ color: "#F2C94C" }} ></Star>
                    </ToggleButton>
                    <ToggleButton value="4.5" style={{ backgroundColor: selectedRating === '4.5' ? '#8C684D' : '#F8F8F8', color: selectedRating === '4.5' ? "#fff" : '#000', border: "none", width: '70px', borderRadius: "9px", height: "35px" }}>
                        4.5<Star sx={{ color: "#F2C94C" }} ></Star>
                    </ToggleButton>
                </ToggleButtonGroup>
            </Grid>
        </Grid>
    )
};


const FilterPage = (): ReactElement => {
    const { dispatch } = useContext(Context);

    return (
        <>
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
                            <img src="/images/close.svg" alt="close" onClick={() => {
                                dispatch({
                                    type: Actions.SHOW_HIDE_FILTER_PAGE,
                                    data: false
                                })
                            }} ></img>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: "20px", textAlign: "center", marginRight: "60px", color: "#101010", fontStyle: "Plus Jakarta Sans", fontWeight: 300 }}>
                            Filters
                        </Typography>

                    </Toolbar>
                </AppBar>
                <Container sx={{ marginTop: "100px" }}>
                    <RangeSlider></RangeSlider>
                </Container>

                <Container sx={{ marginTop: "20px" }}>
                    <Rating></Rating>
                </Container>

                <Container sx={{ marginTop: "20px" }}>
                    <SortyBy></SortyBy>
                </Container>
            </Box>
        </>
    )
}

export const FilterDrawer = (): ReactElement => {
    const { state, dispatch } = useContext(Context);
    const { showFilterPage } = state;
    return (
        <Drawer
            variant="temporary"
            open={showFilterPage}
            onClose={() => dispatch({
                type: Actions.SHOW_HIDE_FILTER_PAGE,
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
            <FilterPage></FilterPage>
        </Drawer>
    )
}