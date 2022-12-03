import { createStyles, Grid } from "@mantine/core";
import { Canvas } from '@react-three/fiber'
import Prototype3 from "../3Dprototypes/prototype3";

const useStyles = createStyles((theme) => ({
    outlinedText: {
        color: "black",
        "-webkit-text-stroke-width": "1px",
        "-webkit-text-stroke-color": "white",
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
    paragraph: {
        lineHeight: "2",
    },
}))

export default function SecondSection() {
    const { classes } = useStyles();
    return (
        <>
            <Grid>
                <Grid.Col span={12} sm={7}>
                    <br /><br />
                    <p className={classes.bigText}><b className={classes.outlinedText}>How does it </b><b className={classes.linearGradientText}>Work?</b></p>
                    <br />
                    <p className={classes.paragraph}>
                        develop innovative solutions for Smart Waste Management & Environment. Aco Recycling started it’s journey by couple different product lines within Smart Waste Management industry including: Smart Reverse Vending Machines, Smart Waste Management Solutions, Underground Waste Containers & Environmental Gadgets.
                    </p>
                </Grid.Col>
                <Grid.Col span={12} sm={5}>
                    <Canvas camera={{ position: [0, 0, -2.3], fov: 75 }} style={{ height: "300px" }}>
                        <ambientLight intensity={0.1} />
                        <pointLight position={[0, 0, -5]} />
                        <Prototype3 />
                    </Canvas>
                </Grid.Col>
            </Grid>
        </>
    );
}