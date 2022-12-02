import { Box, Container, createStyles, Grid } from "@mantine/core";
import garbagecan from "../assets/garbage.png";
const useStyles = createStyles((theme) => ({
    outlinedText: {
        color: "transparent",
        "-webkit-text-stroke-width": "1px",
        "-webkit-text-stroke-color": "black",
        fontSize: "3rem",
        margin: "0",
        fontWeight: "bold",
    },
    bigText: {
        fontSize: "3rem",
        margin: "0",
        fontWeight: "bold",
    },
    whiteText: {
        color: "white"
    },
    paragraph: {
        fontWeight: "500",
        fontSize: "1rem",
        color: "white",
        lineHeight: "2",
    },
}))

export default function OutLatestProductSection() {
    const { classes } = useStyles();
    return (
        <Box sx={theme => {
            return {
                backgroundColor: "#00C7C5",
                padding: "20px",
                color: "black",
                fontSize: "2rem",
                fontWeight: "bold",
            }
        }}>
            <Container>
                <Grid>
                    <Grid.Col span={12} sm={7}>
                        <p className={classes.bigText}><b className={classes.whiteText}>Our </b><b className={classes.outlinedText}>Latest </b>Product </p>
                        <br />
                        <p className={classes.paragraph}>
                            develop innovative solutions for Smart Waste Management & Environment. Aco Recycling started it’s journey by couple different product lines within Smart Waste Management industry including: Smart Reverse Vending Machines, Smart Waste Management Solutions, Underground Waste Containers & Environmental Gadgets.
                        </p>
                    </Grid.Col>
                    <Grid.Col span={12} sm={5}>

                        <img width="100%" alt="garbagecan" src={garbagecan} />
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    );
}