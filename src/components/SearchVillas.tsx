import { Box, Button, Container, Rating, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useContext } from 'react';
import { SearchFarm } from './SearchFarm';
import { Actions, Context } from './reducer';

const data = [
    {
        src: '/images/villa2.webp',
        title: 'ABC Farm House',
        description: 'Hyderabad',
        price: '₹35,590',
        rating: 2.5,
        reviews: 84
    },
    {
        src: '/images/villa1.webp',
        title: 'The Villa Theme Farm2',
        description: 'Hyderabad',
        price: '₹3,599',
        rating: 4.5,
        reviews: 84
    },
    {
        src: '/images/villa2.webp',
        title: 'The Villa Theme Farm3',
        description: 'Hyderabad',
        price: '₹3,599',
        rating: 5,
        reviews: 84
    },
];

export const SearchVillas = () => {
    const{dispatch} = useContext(Context);
    return (
        <Box sx={{ flexGrow: 1, marginTop: '80px' }}>
            <Container>
                <SearchFarm />
            </Container>
            <Container>
                {data.map((villa, index) => (
                    <Card onClick={()=>{
                        dispatch({
                            type:Actions.SHOW_HIDE_DETAILS_PAGE,
                            data:true
                        })
                    }} key={index} sx={{ position: 'relative', width: '100%', marginBottom: '16px', marginTop: "20px" }} >
                        <CardMedia
                            sx={{ height: 240 }}
                            image={villa.src}
                            title={villa.title}
                        />
                        <CardContent sx={{ flex: '1' }}>
                            <Typography gutterBottom variant="h5" component="div" sx={{ display: "flex", fontFamily: "Montserrat Alternates" }}>
                                {villa.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ display: "flex", fontFamily: "Montserrat", fontSize: "18px" }}>
                                {villa.description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ marginTop: '8px', display: "flex", fontSize: "18px", fontFamily: "Montserrat" }}>
                                {villa.price}/ night
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ marginTop: '8px', display: "flex" }}>
                                <Rating name="half-rating" sx={{ color: "#8C684D" }} defaultValue={villa.rating} precision={0.5} readOnly={true} />
                                <div style={{ marginLeft: "7px", marginTop: "3px" }}>({villa.reviews}) reviews</div>
                            </Typography>
                        </CardContent>

                        <Button
                            sx={{
                                color: 'white',
                                background: "#8C684D",
                                width: "25%",
                                position: "absolute",
                                top: 300,
                                right: 20,
                                borderRadius: "15px",
                                textAlign: 'right',
                                '&:hover': {
                                    background: "#8C684D",
                                    opacity:"80%"
                                },
                            }}
                            size="small"
                        >
                            <div>
                                <Typography variant="body2" sx={{ fontSize: '22px', fontWeight:"bolder", fontStyle:"Montserrat",left: 0 }}>{villa.price}</Typography>
                                <Typography variant="body2" sx={{ fontSize: '12px' }}>for 10 days</Typography>
                            </div>
                        </Button>

                    </Card>
                ))}
            </Container>
        </Box>
    );
};
