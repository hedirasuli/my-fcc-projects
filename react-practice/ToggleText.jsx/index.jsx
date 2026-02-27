// Destructure useState from the React object
const { useState } = React;

/**
 * ToggleApp Component
 * A functional component that toggles text visibility and button labels.
 */
export const ToggleApp = () => {
  // 1. Define 'isVisible' state with an initial value of 'false' (hidden by default)
  const [isVisible, setIsVisible] = useState(false);

  /**
   * 2. Event Handler: Changes the state to its opposite value
   * If true, it becomes false. If false, it becomes true.
   */
  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div id="toggle-container">
      {/* 3. Button with dynamic text
          The Ternary Operator (?) checks 'isVisible' to decide which word to show.
          It also triggers 'handleToggleVisibility' on click. */}
      <button id="toggle-button" onClick={handleToggleVisibility}>
        {isVisible ? "Hide" : "Show"} Message
      </button>

      {/* 4. Conditional Rendering
          The paragraph only appears if 'isVisible' is true. */}
      {isVisible && <p id="message">I love freeCodeCamp!</p>}
    </div>
  );
};