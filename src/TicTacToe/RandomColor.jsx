import { useState } from "react";

function RandomColor() {
    const colors = JSON.parse(localStorage.getItem("color"));
    const [R, setR] = useState(colors && colors.R ? colors.R : 0 );
    const [G, setG] = useState(colors && colors.G ? colors.G : 0);
    const [B, setB] = useState(colors && colors.B ? colors.B : 0);

    const savecolor =()=>{
console.log("saved")
localStorage.setItem("color", JSON.stringify({R,G,B}));
    }

    return (
        <div style={{ textAlign: "center", margin: "40px auto" }}>
            <h2 style={{ fontWeight: "800" }}>Random Color Generator</h2>
            <div className="Color-box" style={{background: 'rgb(' +R +', '+G +','+ B+')'}}></div>
            <label style={{ color: "red", marginRight: '20px' }}>R (Red) : </label><input type="range" min={0} max={255} onChange={(event)=> setR(event.target.value)} value={R} /><br /><br />
            <label style={{ color: "green", marginRight: '20px' }}>G (Green): </label><input min={0} max={255} type="range" onChange={(event)=> setG(event.target.value)} value={G} /><br /><br />
            <label style={{ color: "blue", marginRight: '20px' }}>B (Blue): </label><input min={0} max={255} type="range" onChange={(event)=> setB(event.target.value)} value={B} /><br /><br />

            <button className="savecolor" onClick={savecolor}>Save Color</button>
        </div>


    )
}

export default RandomColor;