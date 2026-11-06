import "./ToggleSwitch.css"



export default function ToggleSwitch() {
    return (
        <label className="switch ToggleSwitch">
            <input type="checkbox" />
            <span className="slider round"></span>
        </label>
    );
}