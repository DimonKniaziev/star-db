import React, { useState } from "react";
import ErrorIndicator from "../error-indicator/error-idicator";
const ErrorBoundry = (props) => {
    const [hasError, setHasError] = useState(false);

    try {
        return props.children;
    }
    catch(error) {
        setHasError(true);
    }

    if(hasError) {
        return <ErrorIndicator/>
    }
}

export default ErrorBoundry;