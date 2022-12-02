import { Card, Grid, Group, Image, Space, Text } from "@mantine/core";
import ringnotification from "../assets/ring_notification.svg"

import ooredoo from "../assets/ooredoo.svg"
import mobilis from "../assets/mobilis.svg"
import djezzy from "../assets/djezzy.svg"
export default function Offers() {
    return (
        <div style={{ width: "100%" }}>
            <Group style={{ width: "100%" }} position="right">
                <img alt="notification" src={ringnotification} />
            </Group>
            <Space h={"lg"} />
            <br />
            <div style={{ width: "100%" }}>
                <Text style={{ fontSize: "2rem", fontWeight: "bold " }} c="dimmed">Hello,</Text>
                <Text style={{ fontSize: "2rem", fontWeight: "bold " }} color={"#24B4D5"} >KEZIZ MOUAYED</Text>
                <Space h={"lg"} />
                <Text c="dimmed">Here you can see how many garbage you’ve thrown through the week and points you’ve earned</Text>
                <Space h={"xl"} /><Space h={"xl"} />
                <Space h={"xl"} /><Space h={"xl"} />
                <Grid>
                    <Grid.Col span={6}>
                        <Card p="lg" radius="md" >
                            <Card.Section>
                                <Image
                                    src={ooredoo}
                                    height={160}
                                    alt="Norway"
                                />
                            </Card.Section>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Card p="lg" radius="md" >
                            <Card.Section>
                                <Image
                                    src={mobilis}
                                    height={160}
                                    alt="Norway"
                                />
                            </Card.Section>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Card p="lg" radius="md" >
                            <Card.Section>
                                <Image
                                    src={djezzy}
                                    height={160}
                                    alt="Norway"
                                />
                            </Card.Section>
                        </Card>
                    </Grid.Col>
                </Grid>




            </div>

        </div>
    );
}