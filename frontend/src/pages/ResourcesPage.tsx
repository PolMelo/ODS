import FooterComponent from "../components/FooterComponent";
import NavBarComponent from "../components/NavBarComponent";

const ResourcesPage: React.FC = () => {
    return (
        <div
            style={{
                minHeight: "100vh",
                minWidth: "100vw",
                display: "flex",
                flexDirection: "column",
                background: "white",
            }}
        >
             {/* Navbar siempre arriba */}
            <NavBarComponent />
            <FooterComponent />
        </div>
    );
};

export default ResourcesPage;
