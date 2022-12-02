import map from "../assets/map.svg";
export default function Parking() {
    return (
        <div style={{
            width: "100%", height: "100vh",
            backgroundImage: `url(${map})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}>

        </div>
    );
}