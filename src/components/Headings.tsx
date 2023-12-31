import { Box, Button, Container } from "@mui/material";

export interface heading {
    title: string,
    onclick?: () => void;
}
export const Headings = (props: heading) => {
    return (
        <Container>
            <Box style={{ marginTop: "20px", display: "flex", }}>
                <div style={{ textTransform: "none", fontWeight: "bolder", fontSize: "20px" }}>{props.title}</div>
                <Box
                    style={{
                        marginLeft: 'auto',
                        marginTop: "2px",
                    }}>
                    <Button style={{ borderRadius: "7px", border: "1px solid #5DC5CD", textTransform: "none", color: "#8C684D", height: "30px", background: "rgba(93, 197, 205, 0.10)" }}>See all</Button>
                </Box>
            </Box>
        </Container>
    )

}