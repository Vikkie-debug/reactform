import React, { useState } from 'react';

const FormValidation = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // State for form errors
  const [formErrors, setFormErrors] = useState({});

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    setFormErrors(errors);

    // Submit the form if no errors exist
    if (Object.keys(errors).length === 0) {
      alert('Form submitted successfully!');
      // Add logic for form submission (API call, etc.)
    }
  };

  // Function to validate the form fields
  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    // Name validation
    if (!values.name) {
      errors.name = 'Name is required';
    }

    // Email validation
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(values.email)) {
      errors.email = 'Invalid email format';
    }

    // Password validation
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    return errors;
  };

  return (
    <div className="form-container">
      <h2>React Form Validation</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {formErrors.name && <p className="error">{formErrors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <p className="error">{formErrors.email}</p>}
        </div>

        {/* Password Field */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {formErrors.password && <p className="error">{formErrors.password}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;