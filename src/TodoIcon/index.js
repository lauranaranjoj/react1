import React from "react";
import './TodoIcon.css';
import { ReactComponent as CheckSVG } from "./check.svg";
import { ReactComponent as DeleteSVG } from "./delete.svg";

function TodoIcon({ type, color, onClick })
{
    return(
        <span
          className={`Icon-container Icon-container--${type}`}
          onClick={onClick}
        >
            {type === "check" && <CheckSVG className={`Icon-svg--${type}`} fill={color} />}
            {type === "delete" && <DeleteSVG className={`Icon-svg--${type}`} fill={color} />}       

        </span>
    );
}

export { TodoIcon };