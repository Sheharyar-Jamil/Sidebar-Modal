import React from "react";

const Links = (props) => {
    return(
        <li>
            <a href={props.url}>{props.icon}{props.text}</a>
        </li>
    );
};

export default Links;