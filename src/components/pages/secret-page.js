import React from "react";
import { redirect } from "react-router-dom";

const SecretPage = ({isLoggedIn}) => {
    if(isLoggedIn) {
        return (
            <div>
                <h3>This Page is Full of Secrets!</h3>
            </div>
        );
    }
}
export default SecretPage;