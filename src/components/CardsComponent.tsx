import { FavoriteBorderOutlined, FavoriteRounded, Star } from '@mui/icons-material';
import { AspectRatio, Typography } from '@mui/joy';
import Card from '@mui/joy/Card';
import { Box, Button } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';

const data = [
    {
        src: '/images/villa2.webp',
        title: 'The Villa Theme Farm1',
        description: 'Hyderabad, Telnagana, India',
        price: "₹3,599 /night",
        liked: false,
    },
    {
        src: '/images/villa1.webp',
        title: 'The Villa Theme Farm2',
        description: '4.74M views',
        price: "₹3,599 /night",
        liked: true,
    },
    {
        src: '/images/villa2.webp',
        title: 'The Villa Theme Farm3',
        description: '3.98M views',
        price: "₹3,599 /night",
        liked: true,
    },
];

export const CardsComponent = () => {
    const [dataApi, setData] = useState(data);

    const handleLike = (index: number) => {
        const updatedData = [...dataApi];
        updatedData[index].liked = !updatedData[index].liked;
        setData(updatedData);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                gap: 1,
                py: 1,
                overflow: 'auto',
                width: "100%",
                scrollSnapType: 'x mandatory',
                '& > *': {
                    scrollSnapAlign: 'center',
                },
                '::-webkit-scrollbar': { display: 'none' },
            }}
        >
            {dataApi.map((item, index) => (
                <Card size="sm" key={item.title} variant='plain' sx={{ minWidth: 260, background: "none", position: "relative", boxShadow: 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px' }}>
                    <AspectRatio ratio="1" sx={{ minHeight: 160, position: "relative" }}>
                        <img
                            srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.src}?h=120&fit=crop&auto=format`}
                            alt={item.title}
                            style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
                        />
                        <div
                            onClick={() => handleLike(index)}
                            style={{
                                position: "absolute",
                                top: 10,
                                right: 10,
                                zIndex: 2,
                                backgroundColor: "white",
                                borderRadius: "50%",
                                padding: "5px",
                                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                            }}
                        >
                            {item.liked && (<FavoriteRounded style={{ color: "red" }} />)}
                            {!item.liked && (<FavoriteBorderOutlined />)}
                        </div>
                    </AspectRatio>
                    <Box sx={{ whiteSpace: 'nowrap', mx: 1, marginTop: 'auto' }}>
                        <div style={{ display: "flex", left: 0 }}>
                            <Typography level="title-md" sx={{ fontSize: "15px" }}>{item.title}</Typography>
                            <Star style={{ color: "#ffd33b", marginLeft: "5px" }}></Star>
                            <div>5.0<div></div></div>
                        </div>
                        <Typography level="body-sm" style={{ marginRight: "200px" }}>{item.description}</Typography>
                        <Typography level="body-sm" style={{ marginRight: "220px", fontWeight: "bold", color: "#8C684D" }}>{item.price}</Typography>
                    </Box>
                </Card>
            ))}
        </Box>
    );
};
