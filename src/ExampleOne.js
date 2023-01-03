import React, { useEffect, useState } from "react";
import "./Example.css";

const ColorRectangle = ({ color }) => {
    return (
        <div
            className="colorRectangle"
            style={{
                backgroundColor: color.hex.value,
            }}
        ></div>
    );
};

export const ExampleOne = () => {
    const [colors, setColors] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const max = parseInt("ffffff", 16);

        let hex = Math.floor(Math.random() * max).toString(16);
        let padLength = 6 - hex.length;
        hex = hex.padStart(padLength, "0");

        const getData = async () => {
            const url = `https://www.thecolorapi.com/scheme?hex=${hex}&format=json`;
            const res = await fetch(url);
            const resJson = await res.json();
            setColors(resJson.colors);
            setIsLoading(false);
        };

        getData();
    }, []);

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <div className="colorRectangleWrapper">
                {colors &&
                    colors.map((color) => <ColorRectangle color={color} />)}
            </div>
            <div className="content">
                <h1 className="title">🦝 Color Schemer 🦝</h1>
            </div>
        </div>
    );
};

export default ExampleOne;
