import { useEffect, useState } from "react";
import logoNoText from "../assets/logo_no_text.svg";
import logoText from "../assets/logo_with_text.svg";
import { randomId, useTimeout } from '@mantine/hooks';
import { useNavigate } from "react-router-dom";
import { Stack } from "@mantine/core";


export default function Enter() {
    const navigate = useNavigate();
    const [withText, setWithText] = useState(false);
    const start1 = useTimeout(() => { setWithText(true); start2() }, 1500).start;
    const start2 = useTimeout(() => navigate("/login"), 1500).start;


    //useeffect to do something once
    useEffect(() => {
        start1();
    }, []);
    return (
        <Stack align={"center"} justify="center" style={{ width: "100%", height: "100vh" }}>
            <img alt="logonotext" src={withText ? logoText : logoNoText} />
        </Stack>
    );
}