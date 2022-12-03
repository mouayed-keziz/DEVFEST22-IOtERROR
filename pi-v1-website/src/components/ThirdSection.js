import { Space } from "@mantine/core";
import { createStyles, Grid } from "@mantine/core";
import { Canvas } from "@react-three/fiber";
import Prototype2 from "../3Dprototypes/Protorype2";

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

export default function ThirdSection() {
    const { classes } = useStyles();
    return (
        <>
            <Space h="xl" /><Space h="xl" />
            <Space h="xl" /><Space h="xl" />

            <p className={classes.bigText}><b className={classes.outlinedText}>WHY </b>PI-V1.1?</p>
            <br />
            <Grid>
                <Grid.Col span={12} sm={5}>
                    <Canvas camera={{ position: [0, 0.4, -2.3], fov: 75 }} style={{ height: "400px" }}>
                        <ambientLight intensity={0.1} />
                        <pointLight position={[0, 10, 0]} />
                        <Prototype2 />
                    </Canvas>
                </Grid.Col>
                <Grid.Col span={12} sm={7}>
                    <p className={classes.paragraph}>
                        develop innovative solutions for Smart Waste Management & Environment. Aco Recycling started it’s journey by couple different product lines within Smart Waste Management industry including: Smart Reverse Vending Machines, Smart Waste Management Solutions, Underground Waste Containers & Environmental Gadgets.
                    </p>
                </Grid.Col>
            </Grid>
        </>
    );
}