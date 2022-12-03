import { Center, createStyles, Space } from "@mantine/core";


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
}))

export default function FourthSection() {
    const {classes} = useStyles();
    return (
        <>
            <Space h="xl"/><Space h="xl"/><Space h="xl"/>
            <Space h="xl"/><Space h="xl"/><Space h="xl"/>
            <Center>
                <b style={{textAlign:"center"}} className={`${classes.bigText}, ${classes.outlinedText}`}>STAY TUNED FOR THE<br/> NEXT SURPRISE</b>
            </Center>
        </>
    );
}