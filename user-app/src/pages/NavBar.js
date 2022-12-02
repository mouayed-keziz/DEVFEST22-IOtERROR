import { Box, Center, Group } from "@mantine/core";
import { Link, Outlet } from "react-router-dom";
import { IconBus, IconGridDots, IconHome, IconTrash, IconUser } from "@tabler/icons"
import { useState } from "react";
export default function NavBar() {
    const [active, setActive] = useState("home");
    return (
        <Center>
            <Box
                sx={(theme) => ({
                    //sticky
                    position: "fixed",
                    zIndex: "10",
                    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
                    bottom: "0",
                    textAlign: 'center',
                    padding: theme.spacing.xl,
                    borderRadius: theme.radius.md,
                })}
            >
                <Group style={{ width: "450px" }} spacing="xl" position="apart">
                    <Link to="/app/smartbin" style={{ textDecoration: "none" }}
                        onClick={() => setActive("smart bin")}
                    >
                        <IconTrash
                            size={35}
                            strokeWidth={2}
                            color={active === "smart bin" ? "#31F6A9" : "#A3A3A3"}
                        />
                    </Link>
                    <Link to="/app/parking" style={{ textDecoration: "none" }}
                        onClick={() => setActive("parking")}
                    >
                        <IconBus
                            size={35}
                            strokeWidth={2}
                            color={active === "parking" ? "#31F6A9" : "#A3A3A3"}
                        />

                    </Link>
                    <Link to="/app/home" style={{ textDecoration: "none" }}
                        onClick={() => setActive("home")}
                    >
                        <IconHome
                            color={active === "home" ? "#31F6A9" : "#A3A3A3"}
                            size={35}
                            strokeWidth={2}
                        />
                    </Link>
                    <Link to="/app/offers" style={{ textDecoration: "none" }}
                        onClick={() => setActive("offers")}
                    >
                        <IconGridDots
                            color={active === "offers" ? "#31F6A9" : "#A3A3A3"}
                            size={35}
                            strokeWidth={2}
                        />
                    </Link>
                    <Link to="/app/account" style={{ textDecoration: "none" }}
                        onClick={() => setActive("account")}
                    >
                        <IconUser
                            color={active === "account" ? "#31F6A9" : "#A3A3A3"}
                            size={35}
                            strokeWidth={2}
                        />
                    </Link>
                </Group>
            </Box>
            <Outlet />
        </Center>
    );
}
