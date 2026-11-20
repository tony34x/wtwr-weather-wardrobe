import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

export default function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="toggleSwitch">
      <input
        className="toggleSwitch__checkbox"
        type="checkbox"
        checked={currentTemperatureUnit === "C"}
        onChange={handleToggleSwitchChange}
      />
      <span className="toggleSwitch__circle"></span>
      <span className="toggleSwitch__text toggle-switch__text_F">F</span>
      <span className="toggleSwitch__text toggle-switch__text_C">C</span>
    </label>
  );
}

 
   
