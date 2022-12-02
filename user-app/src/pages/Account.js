import { Avatar, Center, Divider, Group, Space, Stack, Text, UnstyledButton } from "@mantine/core";
import { IconArrowLeft, IconChevronLeft, IconChevronRight, IconEdit, IconInfoCircle, IconLogout, IconPencil, IconUserPlus } from "@tabler/icons";
import { useNavigate } from "react-router-dom";
import bcg from "../assets/accountBackground.svg"
export default function Account() {
    const navigate = useNavigate();
    return (
        <div style={{
            width: "100%",
            backgroundImage: `url(${bcg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}>
            <UnstyledButton style={{
                backgroundColor: "#FFFFFF",
                opacity: 0.3,
                borderRadius: "10px",
            }}
                onClick={() => {
                    navigate("/app/home");
                }}>
                <IconChevronLeft
                    size={48}
                    strokeWidth={2}
                    color={'black'} />
            </UnstyledButton>
            <Space h={"xl"} />
            <Space h={"xl"} />
            <Space h={"xl"} />
            <Center>
                <Avatar color={"#24B4D5"} size={150} radius="100%" />
            </Center>
            <Space h={"xl"} />
            <Space h={"xl"} />
            <Space h={"xl"} />
            <Space h={"xl"} />
            <Space h={"xl"} />
            <Space h={"xl"} />

            <Stack>
                <Group position="apart" mb={"md"}>
                    <Group position="left">
                        <IconPencil
                            style={{
                                backgroundColor: "#31F6A9",
                                padding: "6px",
                                borderRadius: "10px",
                            }}
                            size={52}
                        />
                        <Text style={{ fontSize: "1.5rem", fontWeight: "bold " }} >Edit profile</Text>
                    </Group>
                    <IconChevronRight size={30} />
                </Group>
                <Group position="apart" mb={"md"}>
                    <Group position="left">
                        <IconInfoCircle
                            style={{
                                backgroundColor: "#FFC806",
                                padding: "6px",
                                borderRadius: "10px",
                            }}
                            size={52}
                        />
                        <Text style={{ fontSize: "1.5rem", fontWeight: "bold " }} >Edit profile</Text>
                    </Group>
                    <IconChevronRight size={30} />
                </Group>
                <Divider my="sm" color={'#31F6A9'} />
                <Group position="apart" mb={"md"}>
                    <Group position="left">
                        <IconUserPlus
                            style={{
                                backgroundColor: "#EFEFEF",
                                padding: "6px",
                                borderRadius: "10px",
                            }}
                            size={52}
                        />
                        <Text style={{ fontSize: "1.5rem", fontWeight: "bold " }} >Invite a friend</Text>
                    </Group>
                    <IconChevronRight size={30} />
                </Group>
                <Group position="apart" mb={"md"}>
                    <Group position="left">
                        <IconLogout
                            style={{
                                backgroundColor: "#EFEFEF",
                                padding: "6px",
                                borderRadius: "10px",
                            }}
                            size={52}
                        />
                        <Text style={{ fontSize: "1.5rem", fontWeight: "bold " }} >Log out</Text>
                    </Group>
                    <IconChevronRight size={30} />
                </Group>
            </Stack>
        </div>
    );
}