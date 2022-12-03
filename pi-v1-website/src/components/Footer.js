import { Box, Center, Container, Divider, Grid, Group, List } from "@mantine/core";
import logo from "../assets/logo.svg"
import { IconBrandBehance, IconBrandLinkedin, IconBrandFacebook, IconBrandInstagram } from "@tabler/icons"

export default function Footer() {
    return (
        <>
            <Box sx={theme => {
                return {
                    backgroundColor: "#1C345E",
                    color: "black",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    marginTop:"12rem"
                }
            }}>
                <Container size={"xl"}>
                    <Grid>
                        <Grid.Col span={12} sm={6}>
                            <br />
                            <img alt="logo" src={logo} />
                            <p style={{ fontSize: "1rem", color: "white", fontWeight: "lighter" }}>We’re Likely Story, an award-winning design studio. We deliver spell-binding work for international clients. Ask us about digital, branding and storytelling.</p>
                            <br />
                            <Group ml={"lg"}>
                                <IconBrandBehance size={22} strokeWidth={1.5} />
                                <IconBrandLinkedin size={22} strokeWidth={1.5} />
                                <IconBrandFacebook size={22} strokeWidth={1.5} />
                                <IconBrandInstagram size={22} strokeWidth={1.5} />
                            </Group>
                        </Grid.Col>
                        <Grid.Col span={12} sm={6}>
                            <h3 style={{ color: "white", marginBottom: "20px", marginTop: "30px" }}>Services Provided</h3>

                            <List ml={"xl"}>
                                <List.Item sx={{ color: "white", fontWeight: "lighter" }}>Home</List.Item>
                                <List.Item sx={{ color: "white", fontWeight: "lighter" }}>About us</List.Item>
                                <List.Item sx={{ color: "white", fontWeight: "lighter" }}>Products</List.Item>
                                <List.Item sx={{ color: "white", fontWeight: "lighter" }}>Contact us</List.Item>
                            </List>
                        </Grid.Col>
                    </Grid>
                </Container>
                <Divider size="xs" my={"xs"} color={"gray"} />
                <Center><p style={{ color: "white", fontWeight: "lighter", fontSize: "1rem" }}>Copyright © 2022 <b style={{ color: "#31F6A9" }}>Nextway</b> All Rights Reserved</p>.</Center>
            </Box>
        </>
    );
}