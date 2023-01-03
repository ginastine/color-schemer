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

export const ExampleTwo = () => {
    const [colors, setColors] = useState();
    const [isLoading, setIsLoading] = useState();
    const [hex, setHex] = useState("0047ab");

    const handleChangeColor = (e) => {
        if (e.target.value.length === 6) {
            setHex(e.target.value);
        }
    };

    const getScheme = async () => {
        const url = `https://www.thecolorapi.com/scheme?hex=${hex}&format=json`;
        const res = await fetch(url);
        const resJson = await res.json();
        setColors(resJson.colors);
        setIsLoading(false);
    };

    useEffect(() => {
        getScheme();
    }, []);

    if (isLoading) {
        return <h2>...Loading</h2>;
    }

    return (
        <div>
            <div className="colorRectangleWrapper">
                {colors &&
                    colors.map((color, i) => (
                        <ColorRectangle key={i} color={color} />
                    ))}
            </div>
            <div className="content">
                <h1 className="addSpacing title">🦝 Color Schemer 🦝</h1>
                <input
                    className="addSpacing addBorderRadius"
                    type="text"
                    name="color"
                    placeholder="Hex color code"
                    onChange={(e) => handleChangeColor(e)}
                ></input>
                <button
                    className="addSpacing addBorderRadius"
                    onClick={() => getScheme()}
                >
                    Scheme Away
                </button>
            </div>
        </div>
    );
};

export default ExampleTwo;
