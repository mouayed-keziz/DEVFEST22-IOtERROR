import { Grid, Group, Image, Space } from "@mantine/core";
import ringnotification from "../assets/ring_notification.svg"
import img1 from "../assets/image1.png"
import img2 from "../assets/image2.png"
import img3 from "../assets/image3.png"
import img4 from "../assets/image4.png"
import img5 from "../assets/image5.png"

export default function Home() {
    const arr = [
        {
            text1: "New Smart Bin",
            text2: "installed in your city",
            photo: img1,
        },
        {
            text1: "Use the smart",
            text2: "parking option",
            photo: img2,
        },
        {
            text1: "No more transpot",
            text2: "problems with",
            photo: img3,
        },
        {
            text1: "New Smart Bin",
            text2: "installed in your city",
            photo: img1,
        },
        {
            text1: "New Smart Bin",
            text2: "installed in your city",
            photo: img2,
        },

    ]

    const arr2 = [
        {
            text1: "Bab Ezzouar city is the more active city in the application",
            text2: "More than 1000 users are daily active with the smart bin, you can make it in your city too by sharing this",
            text3: "Referal link",
            text4: "and win rewards",
            photo: img4,
        }, {
            text1: "New technology",
            text2: "More than 1000 users are daily active with the smart bin, you can still win points by inviting your friends and family with this ",
            text3: "Referal link",
            text4: "aze",
            photo: img5,
        }, {
            text1: "Bab Ezzouar city is the more active city in the application",
            text2: "More than 1000 users are daily active with the smart bin, you can make it in your city too by sharing this",
            text3: "Referal link",
            text4: "aze",
            photo: img4,
        }
    ]
    return (
        <div style={{ width: "100%" }}>
            <Space h={"lg"} />
            <Group mt={"lg"} sx={{ width: "100%" }} position="apart" spacing="xl" px="lg">
                <h1 style={{
                    color: "#696969"
                }}>Home</h1>
                <img alt="notifications" src={ringnotification} />
            </Group>
            <br />
            <div class="scrollmenu">
                {arr.map((item, index) => {
                    return (
                        <div key={index} style={{ position: "relative" }}>
                            <img
                                src={item.photo} alt="img1"
                                style={{
                                    width: "170px", height: "170px", borderRadius: "20px",
                                    objectFit: "fill",
                                    zIndex: "-1"
                                }}
                            />
                            <b style={{ position: "absolute", left: 10, bottom: 30, color: "white" }}>
                                {item.text1}
                            </b>
                            <b style={{ position: "absolute", left: 10, bottom: 10, color: "white" }}>
                                {item.text2}
                            </b>
                        </div>
                    )
                })}
            </div >
            <Space h={"xl"} />
            {arr2.map((item, index) => {
                return (
                    <Grid mb={"lg"}>
                        <Grid.Col span={6}>
                            <Image src={item.photo} alt="img4" />
                        </Grid.Col>
                        <Grid.Col pt={"lg"} span={6}>
                            <b>{item.text1}</b><br />
                            <p>{item.text2} <b style={{ color: "#31F6A9" }}>{item.text3} </b> {item.text4}</p>
                        </Grid.Col>
                    </Grid>
                )
            })}
            <Space h={"xl"} /><Space h={"xl"} />
            <Space h={"xl"} /><Space h={"xl"} />
            <Space h={"xl"} /><Space h={"xl"} />
        </div >
    );
}