import { Button, Center, Group, Space, Stack, Text } from "@mantine/core";
import ringnotification from "../assets/ring_notification.svg"
import graph from "../assets/graph.png"
import { IconQrcode } from "@tabler/icons";

export default function SmartBin() {
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
                <Space h={"xl"} />
                <b style={{
                    color: "##696969"
                }}>Total points : <b style={{ color: "#31F6A9" }}>59</b></b>
                <Space h={"xl"} /><Space h={"xl"} />
                <Text style={{ fontSize: "1.5rem", fontWeight: "bold ", textAlign: "center" }} color={"#24B4D5"} >Throwed garbage history</Text>
                <Space h={"xl"} /><Space h={"xl"} />
                <Center>
                    <Stack align="center">
                        <img style={{ zoom: "1.2" }} alt="graph" src={graph} />
                        <Button
                            radius="xl" size="md" uppercase variant="gradient" gradient={{ from: '#24B4D5', to: '#31F6A9' }}
                            rightIcon={<IconQrcode size={14} />}
                        >Indigo cyan</Button>
                    </Stack>
                </Center>

            </div>

        </div>
    );
} 