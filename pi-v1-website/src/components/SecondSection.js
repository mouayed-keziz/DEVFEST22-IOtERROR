import { createStyles, Grid } from "@mantine/core";
import { Canvas } from '@react-three/fiber'

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
            <p className={classes.bigText}><b className={classes.outlinedText}>How does it </b><b className={classes.linearGradientText}>Work?</b></p>
            <br/>
            <Grid>
                <Grid.Col span={12} sm={7}>
                <p className={classes.paragraph}>
                    develop innovative solutions for Smart Waste Management & Environment. Aco Recycling started it’s journey by couple different product lines within Smart Waste Management industry including: Smart Reverse Vending Machines, Smart Waste Management Solutions, Underground Waste Containers & Environmental Gadgets.
                </p>
                </Grid.Col>
                <Grid.Col span={12} sm={5}>
                <Canvas style={{backgroundColor:"green", height:"300px"}}>
                    <ambientLight intensity={0.1} />
                    <directionalLight color="red" position={[0, 0, 5]} />
                    <mesh>
                        <boxGeometry />
                        <meshStandardMaterial />
                    </mesh>
                </Canvas>
                </Grid.Col>
            </Grid>
        </>
    );
}