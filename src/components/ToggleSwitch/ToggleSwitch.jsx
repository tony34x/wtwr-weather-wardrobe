import "./ToggleSwitch.css"



export default function ToggleSwitch() {
    return (
        <label className="switch ToggleSwitch">
            <input className="ToggleSwitch_checkbox" type="checkbox" />
            <span className="ToggleSwitch_circle toggle-switch__text_F">F</span>
            <span className="toggle-switch__text toggle-switch__text_C">C</span>
        </label>
    );
}