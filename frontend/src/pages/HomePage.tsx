import NavBarComponent from "../components/NavBarComponent";
import FooterComponent from "../components/FooterComponent";

const HomePage: React.FC = () => {
    return (
        <div
            style={{
                minHeight: "100vh",
                minWidth: "100vw",
                display: "flex",
                flexDirection: "column",
                background: "#a9e9a4",
            }}
        >
            {/* Navbar siempre arriba */}
            <NavBarComponent />

            {/* Aquí puedes añadir el contenido principal de la Home */}
            <main style={{ flex: 1 }}></main>

            {/* Footer siempre abajo */}
            <FooterComponent />
        </div>
    );
};

export default HomePage;
