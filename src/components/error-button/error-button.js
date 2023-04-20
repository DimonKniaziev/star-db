import React, { useState } from "react";

const ErrorButton = () => {
    const [renderError, setRenderError] = useState(false);
    
    if(renderError) {
        this.foo.bar = 0;
    }

    return (
        <button onClick={() => setRenderError(true)}>
            Throw Error
        </button>
    );
}

export default ErrorButton;