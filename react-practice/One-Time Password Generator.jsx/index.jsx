const { useState, useEffect, useRef } = React;

/**
 * OTPGenerator Component
 * Generates a 6-digit random code that expires after 5 seconds.
 */
export function OTPGenerator() {
  // State to store the generated 6-digit OTP
  const [otp, setOtp] = useState(null);
  
  // State to track the remaining seconds for the countdown
  const [timer, setTimer] = useState(0);
  
  // State to track if the timer is currently active
  const [isActive, setIsActive] = useState(false);

  /**
   * Generates a random 6-digit number and starts the countdown.
   */
  const generateOTP = () => {
    // Generate a number between 100000 and 999999
    const newOtp = Math.floor(100000 + Math.random() * 900000);
    setOtp(newOtp);
    setTimer(5); // Start with 5 seconds
    setIsActive(true);
  };

  /**
   * useEffect to handle the countdown logic.
   * Runs whenever 'isActive' or 'timer' changes.
   */
  useEffect(() => {
    let interval = null;

    if (isActive && timer > 0) {
      // Create a timer that runs every 1 second
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      // Once timer reaches 0, stop the interval and set status to inactive
      setIsActive(false);
      clearInterval(interval);
    }

    // Cleanup function to clear interval when component updates or unmounts
    return () => clearInterval(interval);
  }, [isActive, timer]);

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      
      {/* Display OTP or prompt message */}
      <h2 id="otp-display">
        {otp && timer > 0 ? otp : "Click 'Generate OTP' to get a code"}
      </h2>

      {/* Timer message with accessibility support */}
      <p id="otp-timer" aria-live="polite">
        {isActive && timer > 0 && `Expires in: ${timer} seconds`}
        {!isActive && otp && timer === 0 && "OTP expired. Click the button to generate a new OTP."}
      </p>

      {/* Button is disabled while countdown is active */}
      <button 
        id="generate-otp-button" 
        onClick={generateOTP} 
        disabled={isActive}
      >
        Generate OTP
      </button>
    </div>
  );
}