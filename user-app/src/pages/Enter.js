import { useEffect, useState } from "react";
import logoNoText from "../assets/logo_no_text.svg";
import logoText from "../assets/logo_with_text.svg";
import { randomId, useTimeout } from '@mantine/hooks';
import { useNavigate } from "react-router-dom";


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
        <img alt="logonotext" src={withText ? logoText : logoNoText} />
    );
}