import { Navigate } from "react-router-dom";

interface Props {
    children: JSX.Element;
    message?: string;
}

const AuthRedirect = ({ children, message }: Props) => {
    const token = localStorage.getItem("token");

    if (token) {
        return <Navigate to="/" replace state={{ message }} />;
    }

    return children;
};

export default AuthRedirect;
