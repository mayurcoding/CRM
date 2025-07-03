import React, { useState } from 'react';
import './AddEmployeeForm.css';

const AddEmployeeForm = ({ onCancel, onSave }) => {
    const [firstName, setFirstName] = useState('Mayur');
    const [lastName, setLastName] = useState('Rastogi');
    const [email, setEmail] = useState('mayurrastogi46@gmail.com');
    const [location, setLocation] = useState('Bareilly');
    const [language, setLanguage] = useState('English');

    const handleSave = (e) => {
        e.preventDefault();
        const newEmployee = {
            name: `${firstName} ${lastName}`,
            email,
            location,
            preferredLanguage: language,
            assignedLeads: 0,
            closedLeads: 0,
            status: 'Active',
        };
        if (onSave) onSave(newEmployee);
        onCancel();
    };

    return (
        <div className="add-employee-form">
            <div className="modal-header">
                <h3>Add New Employee</h3>
                <button onClick={onCancel} className="close-btn">&times;</button>
            </div>
            <form onSubmit={handleSave}>
                <div className="form-group">
                    <label htmlFor="first-name">First name</label>
                    <input type="text" id="first-name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="last-name">Last name</label>
                    <input type="text" id="last-name" value={lastName} onChange={e => setLastName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-group-row">
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <select id="location" value={location} onChange={e => setLocation(e.target.value)}>
                            <option>Bareilly</option>
                            <option>Karnataka</option>
                            <option>California</option>
                        </select>
                    </div>
                     <span className="tooltip">Lead will be assigned on biases on location</span>
                </div>
                <div className="form-group-row">
                    <div className="form-group">
                        <label htmlFor="language">Preferred Language</label>
                        <select id="language" value={language} onChange={e => setLanguage(e.target.value)}>
                            <option>English</option>
                            <option>Tamil</option>
                        </select>
                    </div>
                    <span className="tooltip">Lead will be assigned on biases on language</span>
                </div>
                <div className="form-actions">
                    <button type="submit" className="save-btn">Save</button>
                </div>
            </form>
        </div>
    );
};

export default AddEmployeeForm; 