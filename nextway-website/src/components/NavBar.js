import { createStyles, Header, Container, Group, Burger, Paper, Transition, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logo from '../assets/logo.svg';
const HEADER_HEIGHT = 60;

const links = [
    {
        link: "/about",
        label: "Home"
    },
    {
        link: "/pricing",
        label: "About us"
    },
    {
        link: "/learn",
        label: "Products"
    },
    {
        link: "/community",
        label: "Contact us"
    }
]

const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 1,
    },

    dropdown: {
        position: 'absolute',
        top: HEADER_HEIGHT,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },

        [theme.fn.smallerThan('sm')]: {
            borderRadius: 0,
            padding: theme.spacing.md,
        },
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
            color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
    },
}));


export default function NavBar() {
    const [opened, { toggle, close }] = useDisclosure(false);
    const { classes, cx } = useStyles();

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={cx(classes.link)}
            onClick={(event) => {
                event.preventDefault();
                close();
            }}
        >
            {link.label}
        </a>
    ));

    return (
        <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
            <Container size={"xl"} className={classes.header}>
                <img alt="logo" src={logo} />
                <Group spacing={5} className={classes.links}>
                    {items}
                    <Button radius={"md"} variant="gradient" gradient={{ from: '#24B4D5', to: '#31F6A9', deg: 45 }}>Let's Talk</Button>
                </Group>

                <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

                <Transition transition="pop-top-right" duration={200} mounted={opened}>
                    {(styles) => (
                        <Paper className={classes.dropdown} withBorder style={styles}>
                            {items}
                        </Paper>
                    )}
                </Transition>
            </Container>
        </Header>
    );
}