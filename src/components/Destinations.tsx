import { Box } from "@mui/material"
import './Destinations.css'

const destinations: string[] = ["Hyderabad", "Banglore", "Vijayawada", "Tenali", "Guntur"]
export const Destinations = () => {
    return (
        <Box
            sx={{ width: "100%" }}
        >
            <hr style={{
                marginLeft: "20px", marginBottom: '-5px',
                height: '3px', marginRight: '20px', color: "#8c684d", position:"relative", zIndex:"-120"
            }}></hr>

            <div className="scroll" style={{ display: 'flex', flexDirection: 'row', overflow: 'scroll' }}>
                {destinations.map((place, index) => (<div key={index} style={{ height: "100px", width: "100%" }}>
                    <img src='./images/Frame.svg' alt='frame' style={{ marginLeft: "20px" }}></img>
                    <div style={{ marginLeft: "20px", zIndex: 100, marginTop: '-45px', fontWeight: '500'}}>{place}</div>
                </div>))}
            </div>
        </Box>
    )
}