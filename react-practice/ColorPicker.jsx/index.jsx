const { useState } = React;

/**
 * ColorPicker Component
 * A modern, interactive color selection tool.
 * Features:
 * - Dynamic background updates.
 * - Controlled input handling.
 * - Glassmorphism UI styling.
 */
export const ColorPicker = () => {
  // State to store the hex color value. Default is white (#ffffff).
  const [color, setColor] = useState("#ffffff");

  /**
   * Updates the state with the user's selected color from the input.
   * @param {Object} event - The standard DOM event object.
   */
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    /* Main container: Its background color is directly bound to the 'color' state. */
    <div id="color-picker-container" style={{ backgroundColor: color }}>
      
      {/* Glassmorphism card for a polished UI look */}
      <div className="color-card">
        <h1>Color Picker</h1>

        {/* Controlled Input:
            - type="color" provides the native color palette.
            - value={color} ensures the input shows the current state.
            - onChange triggers whenever the user picks a new color.
        */}
        <input
          type="color"
          id="color-input"
          value={color}
          onChange={handleColorChange}
        />

        {/* Displaying the Hex code in uppercase for better readability */}
        <p style={{ marginTop: '15px', fontWeight: 'bold', color: '#444' }}>
          Hex Code: {color.toUpperCase()}
        </p>
      </div>
    </div>
  );
};