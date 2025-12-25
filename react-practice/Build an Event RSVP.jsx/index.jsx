const { useState } = React;

export function EventRSVPForm() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendees: 1,
    dietary: '',
    isBringingGuests: false
  });

  // State to store and display data after submission
  const [submittedData, setSubmittedData] = useState(null);

  // Handle changes for all input types
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // For checkboxes, use 'checked' property; otherwise use 'value'
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    // Prevent page reload (User Story 7 / Test 13)
    e.preventDefault();
    // Save current form state to display confirmation
    setSubmittedData(formData);
  };

  return (
    <div className="form-container">
      <h2>Event RSVP Form</h2>
      
      {/* Test 1: One form element to hold all content */}
      <form onSubmit={handleSubmit}>
        
        {/* Test 2 & 6: Required text input for Name */}
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input 
            id="name"
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>

        {/* Test 3 & 7: Required email input */}
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input 
            id="email"
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>

        {/* Test 4 & 8: Required number input (min 1) */}
        <div className="input-group">
          <label htmlFor="attendees">Number of Attendees:</label>
          <input 
            id="attendees"
            type="number" 
            name="attendees" 
            min="1" 
            value={formData.attendees} 
            onChange={handleChange} 
            required 
          />
        </div>

        {/* Test 2: Second text input for Dietary Preferences (Optional) */}
        <div className="input-group">
          <label htmlFor="dietary">Dietary Preferences:</label>
          <input 
            id="dietary"
            type="text" 
            name="dietary" 
            value={formData.dietary} 
            onChange={handleChange} 
          />
        </div>

        {/* Test 5 & 12: Checkbox for additional guests */}
        <div className="checkbox-group">
          <label htmlFor="isBringingGuests">
            <input 
              id="isBringingGuests"
              type="checkbox" 
              name="isBringingGuests" 
              checked={formData.isBringingGuests} 
              onChange={handleChange} 
            />
            Bringing additional guests?
          </label>
        </div>

        {/* Form Submission Button */}
        <button type="submit">Submit RSVP</button>
      </form>

      {/* Confirmation Section (Tests 14-18) */}
      {submittedData && (
        <div id="confirmation" className="confirmation-box">
          <h3>RSVP Submitted!</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Attendees:</strong> {submittedData.attendees}</p>
          <p><strong>Dietary:</strong> {submittedData.dietary || 'None'}</p>
          <p><strong>Additional Guests:</strong> {submittedData.isBringingGuests ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
}