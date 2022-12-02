import logoSquare from "../assets/logo_square.svg";
import { Button, PasswordInput, Stack, TextInput } from "@mantine/core"
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

            <Button
                radius="md"
                size="lg"
                sx={{ width: "90%" }}>
                CREATE AN ACCOUNT
            </Button>
            <p>You don’t have an account?
                <a href="/register">{" Sign Up"}</a>
            </p>
        </Stack>
    );
}