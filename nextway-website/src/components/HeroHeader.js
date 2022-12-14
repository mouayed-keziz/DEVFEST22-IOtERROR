import { createStyles, Grid } from "@mantine/core";
import city from "../assets/city.png";
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
    outlinedText: {
        color: "white",
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
    linearGradientText: {
        //3 colors linear gradient
        background: "linear-gradient(90deg, #31F6A9 25%, #24B4D5 75%)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
    },
}))

export default function HeroHeader() {
    const { classes } = useStyles();
    const matches = useMediaQuery('(min-width: 768px)');
    return (
        <>
            <Grid>
                <Grid.Col span={12} sm={5}>
                    {matches && <><br /><br /></>}<p className={classes.bigText}><b className={classes.outlinedText}>Helpful </b>For <b className={classes.linearGradientText}>everyone</b></p>
                    <br />
                    <b>GAME CHANGER <b style={{ color: "#35D5A5" }}>SOLUTIONS</b> FOR RECYCLING & WASTE MANAGEMENT</b>
                    <br /><br />
                    <b>Experience meets with the High Tech Solutions to bring new generation</b>
                </Grid.Col>
                <Grid.Col span={12} sm={6}>
                    {matches && <img width="100%" alt="city" src={city} />}
                </Grid.Col>
            </Grid>
        </>
    );
}