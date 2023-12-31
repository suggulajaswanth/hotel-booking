import { LocationOnRounded, SearchOutlined, TuneRounded } from "@mui/icons-material"
import { Box, Button, ButtonGroup } from "@mui/material"
import { ReactElement } from "react"

export const SearchFarm=():ReactElement=>{
    return(
        <Box sx={{ flexGrow: 1 }}>
            <Button>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <ButtonGroup variant="text" style={{ marginTop: "10px" }} aria-label="split button">
                <div style={{ display: "inline" }}>
                <SearchOutlined sx={{ marginRight: "40px" }}></SearchOutlined>
                    <Button style={{ border: "none", color: "black", textTransform: "none" }}>Search Farm</Button>
                </div>

            </ButtonGroup>
            <Box
                style={{
                    marginLeft: 'auto',
                    marginTop: "15px",
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    padding: '10px',
                    borderRadius: "10px"
                }}
            >
                <TuneRounded sx={{ background: "#8C684D", color: "white", borderRadius: "3px", justifyItems:"right" }}></TuneRounded>
            </Box>
        </div>
        </Button>
    </Box >


    )
}