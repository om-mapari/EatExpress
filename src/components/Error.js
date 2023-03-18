import React from "react";
import { useRouteError } from "react-router-dom";
// useRouteError --> hook that gives more information about error

function Error() {
    const err = useRouteError();
    console.log('My Error :- ', err);
    const { status, statusText } = err;
    return (
        <div>
            <h1>Oops!!</h1>
            <h2>something went's wrong</h2>
            <h2>{status + " : " + statusText}</h2>
        </div>
    );
}

export default Error;
