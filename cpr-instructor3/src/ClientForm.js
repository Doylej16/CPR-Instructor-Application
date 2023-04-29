import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const ClientForm = () => {
  // Declare state variables for the form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [trainingSession, setTrainingSession] = useState('');

  // Initialize the Redux dispatch function
  const dispatch = useDispatch();

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Dispatch an action to update the Redux store with the form data
    dispatch({ type: 'ADD_CLIENT', payload: { firstName, lastName, email, phone, trainingSession } });
    // Reset form data
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setTrainingSession('');
  };

  // Render the form
  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <label>
        Training Session:
        <select value={trainingSession} onChange={(e) => setTrainingSession(e.target.value)}>
          <option value="session1">Session 1</option>
          <option value="session2">Session 2</option>
          <option value="session3">Session 3</option>
        </select>
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default ClientForm;
