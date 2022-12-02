import logoSquare from "../assets/logo_square.svg";
import { Button, PasswordInput, Stack, TextInput } from "@mantine/core"
import { Link } from "react-router-dom";
export default function Login() {
    return (
        <Stack style={{ height: "100vh" }} align="center" justify="center">
            <img alt="logonotext" src={logoSquare} />
            <h2>Help saving the planet and win rewards</h2>
            <TextInput sx={{ width: "90%" }}
                label="Email"
                variant="filled"
                radius="md"
                size="lg"
            />
            <PasswordInput
                sx={{ width: "90%" }}
                label="Password"
                variant="filled"
                radius="md"
                size="lg"
            />
            <Link to="/app/home" style={{
                textDecoration: "none",
            }}>
                <Button
                    radius="md"
                    size="lg"
                    sx={{ width: "90%" }}>
                    Log In
                </Button>
            </Link>
            <p>You don’t have an account?
                <Link to="/register">{" Sign Up"}</Link>
            </p>
        </Stack>
    );
}