import React from "react";
import { Navigate } from "react-router-dom";

const SecretPage = ({isLoggedIn}) => {
    if(!isLoggedIn) {
        return <Navigate to="/login"/>
    }
    return (
        <div>
            <h3>This Page is Full of Secrets!</h3>
        </div>
    );
}
export default SecretPage;