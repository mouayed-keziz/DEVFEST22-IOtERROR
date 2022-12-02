import { createStyles, Grid } from "@mantine/core";
import orbit from "../assets/orbit.png";

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
    paragraph: {
        lineHeight: "2",
    },

}))

export default function WhoAreWeSection() {
    const { classes } = useStyles();
    return (
        <>
            <Grid>
                <Grid.Col span={12} sm={7} style={{
                }}>
                    <img width={"100%"} src={orbit} alt="orbit" />
                </Grid.Col>
                <Grid.Col span={12} sm={5}>
                    <br />
                    <p className={classes.bigText}>Who are  <b className={classes.outlinedText}>we? </b></p>
                    <br />
                    <p className={classes.paragraph}>
                        develop innovative solutions for Smart Waste Management & Environment. Aco Recycling started it’s journey by couple different product lines within Smart Waste Management industry including: Smart Reverse Vending Machines, Smart Waste Management Solutions, Underground Waste Containers & Environmental Gadgets.
                    </p>
                </Grid.Col>
            </Grid>
        </>
    );
}