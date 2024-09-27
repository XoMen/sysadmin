import React, { useContext } from "react";
import { DirectionContext } from "@/utils/direction-context";

const DirectionSwitcher = () => {
    const directionContext = useContext(DirectionContext);

    if (!directionContext) {
        return <div>Error: DirectionContext not available!</div>; // Safeguard if context is not available
    }

    const { direction, setDirection } = directionContext;

    const toggleDirection = () => {
        setDirection(direction === "ltr" ? "rtl" : "ltr");
    };

    return (
        <div>
            <p>Current Page Direction: {direction}</p>
            <button onClick={toggleDirection}>
                Toggle to {direction === "ltr" ? "RTL" : "LTR"}
            </button>
        </div>
    );
};

export default DirectionSwitcher;
