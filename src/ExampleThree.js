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

export const ExampleThree = () => {
    const [colors, setColors] = useState();
    const [isLoading, setIsLoading] = useState();
    const [hex, setHex] = useState("0047ab");
    const [mode, setMode] = useState("analogic");
    const [count, setCount] = useState(5);

    const handleChangeColor = (e) => {
        if (e.target.value.length === 6) {
            setHex(e.target.value);
        }
    };

    const handleChangeMode = (e) => {
        setMode(e.target.value);
    };

    const handleChangeCount = (e) => {
        setCount(e.target.value);
    };

    const getScheme = async () => {
        const url = `https://www.thecolorapi.com/scheme?hex=${hex}&format=json&mode=${mode}&count=${count}`;
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
                <select
                    className="addSpacing addBorderRadius"
                    value={mode}
                    onChange={handleChangeMode}
                >
                    <option value="analogic">Analogic</option>
                    <option value="monochrome">Monochrome</option>
                    <option value="complement">Complement</option>
                </select>
                <input
                    className="addSpacing addBorderRadius"
                    type="text"
                    name="count"
                    placeholder="Color count"
                    onChange={handleChangeCount}
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

export default ExampleThree;
