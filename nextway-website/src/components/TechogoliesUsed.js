import { createStyles, Grid, Card, Text, Image, Center } from "@mantine/core";
import tech1 from "../assets/tech1.svg"
import tech2 from "../assets/tech2.svg"
import tech3 from "../assets/tech3.svg"

const useStyles = createStyles((theme) => ({
    gradiendText: {
        background: "linear-gradient(90deg, #5277F7 25%, #35D5A5 75%)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
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

export default function TechnologiesUsed() {
    const { classes } = useStyles();
    return (
        <>
            <br /><br />
            <p className={classes.bigText}>Technologies <b className={classes.gradiendText}>we have used </b></p>
            <br />
            <Grid>
                <Grid.Col span={12} sm={4}><TechnologyCard imgSrc={tech1} /></Grid.Col>
                <Grid.Col span={12} sm={4}><TechnologyCard imgSrc={tech2} /></Grid.Col>
                <Grid.Col span={12} sm={4}><TechnologyCard imgSrc={tech3} /></Grid.Col>
            </Grid>
        </>
    );
}







function TechnologyCard({ imgSrc }) {
    return (
        <Card
            shadow="sm"
            p="xl"
            component="a"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
        >
            <Card.Section>
                <Image
                    src={imgSrc}
                    height={300}
                    alt="No way!"
                />
            </Card.Section>
            <Center>
                <Text style={{ color: "#376BDF" }} weight={500} size="lg" mt="md">
                    Arduino
                </Text>
            </Center>

            <Text style={{ textAlign: "center" }} mt="xs" color="dimmed" size="sm">
                We have implemented arduino circuits alongside sensors in our different products
                to detect different actions like movements, objects recognition and localisation of products themselves
            </Text>
        </Card>
    );
}