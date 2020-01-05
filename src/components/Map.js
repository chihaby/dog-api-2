import React from "react";
import { Link } from "react-router-dom";

function Map() {
    return (
        <div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/search">Search</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Map;