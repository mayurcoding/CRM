import React, { useState, useEffect } from 'react';
import './EmployeesTable.css';

const EmployeesTable = ({ employees = [], showStatus, onSelectionChange }) => {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (onSelectionChange) {
      onSelectionChange(selected);
    }
  }, [selected, onSelectionChange]);

  const isAllSelected = employees.length > 0 && selected.length === employees.length;

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(employees.map(emp => emp._id));
    } else {
      setSelected([]);
    }
  };

  const handleSelect = (id) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(sid => sid !== id) : [...prev, id]
    );
  };

  if (!employees || employees.length === 0) {
    return (
      <div className="employees-table-container">
        <h3>Recent Employees</h3>
        <p className="no-employees">No employees found</p>
      </div>
    );
  }

  return (
    <div className="employees-table-container">
      <h3>Recent Employees</h3>
      <div className="employees-table">
        <table>
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={handleSelectAll}
                  aria-label="Select all employees"
                />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Language</th>
              <th>Assigned Leads</th>
              <th>Closed Leads</th>
              {showStatus && <th>Status</th>}
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr key={employee._id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selected.includes(employee._id)}
                    onChange={() => handleSelect(employee._id)}
                    aria-label={`Select employee ${employee.name}`}
                  />
                </td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.location}</td>
                <td>{employee.preferredLanguage}</td>
                <td>{employee.assignedLeads}</td>
                <td>{employee.closedLeads}</td>
                {showStatus && (
                  <td>
                    <span className="employee-status-dot" />
                    <span className="employee-status-text">{employee.status}</span>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeesTable;