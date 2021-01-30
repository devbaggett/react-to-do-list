import React, {useState} from "react";

function InputForm(props) {
    const [inputText, setInputText] = useState("");

    function handleInputChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    return (
        <div className="form">
            <input onChange={handleInputChange}
                   type="text"
                   value={inputText} />
            <button onClick={() => {
                props.onAdd(inputText);
                setInputText("");
            }}>
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputForm;
