import "./ToggleSwitch.css"



export default function ToggleSwitch() {
    return (
        <label className="toggleSwitch">
            <input className="toggleSwitch__checkbox" type="checkbox" />
             <span className="toggleSwitch__circle"></span>
            <span className="toggleSwitch__text toggle-switch__text_F">F</span>
            <span className="toggleSwitch__text toggle-switch__text_C">C</span>
        </label>
    );
}