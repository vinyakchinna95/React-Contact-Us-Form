import React, { useState } from "react";
import InputFeild from "./Inputfeild";
import Button from "./Button";
import './FormPage.css';

const FormPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = () => {
        if (!name || !email || !text) {
            alert("You have empty fields. Please fill them out.");
        } else {
            alert("Form submitted successfully!");
        }
        console.log("name:", name);
        console.log("email:", email);
        console.log("text:", text);
    };

    return (
        <div className="from-container">
            <div className="two-btns">
                <Button 
                    name="VIA SUPPORT CHART" 
                    style={{ width: "192px", height: "44px" }} 
                    onClick={() => alert("Sorry. We didn't provide this service yet")}
                />
                <Button 
                    name="VIA CALL" 
                    style={{ width: "192px", height: "44px" }} 
                    onClick={() => alert("Calling feature is not available yet.")}
                />
            </div>
            <Button 
                name="VIA EMAIL FORM" 
                style={{ width: "399px", height: "44px" }} 
                onClick={() => alert("Email form service is coming soon!")}
            />
            <div className="input-container">
                <InputFeild 
                    name="NAME" 
                    style={{ width: "350px", height: "40px" }} 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <InputFeild 
                    name="E-Mail" 
                    style={{ width: "350px", height: "40px" }} 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <InputFeild 
                    name="Text" 
                    style={{ width: "350px", height: "100px", lineHeight: "1.2", textAlign: "start", verticalAlign: "top" }} 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                />
            </div>
            <div>
                <Button 
                    name="SUBMIT" 
                    style={{ width: "192px", height: "44px" }} 
                    onClick={handleSubmit} 
                />
            </div>
        </div>
    );
};

export default FormPage;
