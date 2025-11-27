import NavBarComponent from "../components/NavBarComponent";
import FooterComponent from "../components/FooterComponent";

const ActionsPage: React.FC = () => {
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
            
            


            {/* Footer siempre abajo */}
            <NavBarComponent />
            <FooterComponent />
        </div>
    );
};

export default ActionsPage;