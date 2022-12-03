import { Center, Stack, Title } from "@mantine/core";
import { Canvas } from "@react-three/fiber";
import Prototype1 from "../3Dprototypes/Protoype1";
export default function FirstSection() {
    return (
        <>
            <Center>
                <Stack align="center" style={{ width: "100%" }}>
                    <Title order={1}>PI-V1.1</Title><br />
                    <Canvas camera={{ position: [0, -0, -2.3], fov: 75 }} style={{ height: "400px", width: "100%" }}>
                        <ambientLight intensity={0.1} />
                        <pointLight position={[0, 5, 5]} />
                        <Prototype1 />
                    </Canvas>
                </Stack>
            </Center>
        </>
    );
} 