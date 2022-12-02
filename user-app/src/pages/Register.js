import { Button, Checkbox, PasswordInput, Stack, TextInput } from "@mantine/core";
import { Link } from "react-router-dom";
import logo_text_linear from "../assets/logo_text_linear.svg"
export default function Register() {
    return (
        <Stack style={{ height: "100vh" }} align="center" justify="space-around">
            <img alt="logo" src={logo_text_linear} />
            <Stack align="center" justify="center">
                <p>Join our community and get benefit
                    from services and technologies we provide
                </p>
                <TextInput sx={{ width: "90%" }}
                    label="First Name"
                    variant="filled"
                    radius="md"
                    size="lg"
                />
                <TextInput sx={{ width: "90%" }}
                    label="Last Name"
                    variant="filled"
                    radius="md"
                    size="lg"
                />
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
                <br />
                <Checkbox
                    label="I agree to the Terms & Conditions"
                    color="gray"
                    radius="md"
                    size="lg"
                />
            </Stack>

            <Link to="/login" style={{
                textDecoration: "none",
            }}>
                <Button
                    radius="md"
                    size="lg">
                    CREATE AN ACCOUNT
                </Button>
            </Link>
        </Stack>

    );
}