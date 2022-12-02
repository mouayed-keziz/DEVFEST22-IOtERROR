import { Box, createStyles, Grid, Textarea, TextInput } from "@mantine/core";
import contactPhoto from "../assets/contact.png"
const useStyles = createStyles((theme) => ({
    morphism: {
        marginTop: "2rem",
        marginBottom: "2rem",
        width: "100%",
        padding: "15px",
        "background": "rgba(249, 229, 229, 0)",
        "border-radius": "16px",
        "box-shadow": "0 4px 30px rgba(0, 0, 0, 0.1)",
        "backdrop-filter": "blur(8.8px)",
        "-webkit-backdrop-filter": "blur(8.8px)",
        "border": "1px solid rgba(249, 229, 229, 0.6)",
    },
    outlinedText: {
        color: "transparent",
        "-webkit-text-stroke-width": "1px",
        "-webkit-text-stroke-color": "#5277F7",
        fontSize: "3rem",
        margin: "0",
        fontWeight: "bold",
    },
    bigText: {
        color: "#5277F7",
        fontSize: "3rem",
        margin: "0",
        fontWeight: "bold",
    },

}))

export default function GetInTouch() {
    const { classes } = useStyles();
    return (
        <>
            <Box className={classes.morphism}>
                <p className={classes.bigText}>Get in <b className={classes.outlinedText}>touch </b></p>
                <br />
                <Grid>
                    <Grid.Col span={12} sm={6}>
                        <img width={"100%"} alt="contact-photo" src={contactPhoto} />
                    </Grid.Col>
                    <Grid.Col span={12} sm={6}>
                        <Box>
                            <TextInput
                                mb={"lg"}
                                sx={{
                                    backgroundColor: "white"
                                }}
                                placeholder="Enter your name"
                                variant="filled"
                                radius="md"
                            />
                            <TextInput
                                mb={"lg"}
                                sx={{
                                    backgroundColor: "white"
                                }}
                                placeholder="Email Object"
                                variant="filled"
                                radius="md"
                            />
                            <TextInput
                                mb={"lg"}
                                sx={{
                                    backgroundColor: "white"
                                }}
                                placeholder="Eample@mail.com"
                                variant="filled"
                                radius="md"
                            />
                            <Textarea
                                mb={"lg"}
                                sx={{
                                    backgroundColor: "white",
                                }}
                                variant="filled"
                                placeholder="Your message"
                                radius="md"
                                autosize
                                minRows={4}
                            />
                        </Box>
                    </Grid.Col>
                </Grid>
            </Box>
        </>
    );
}