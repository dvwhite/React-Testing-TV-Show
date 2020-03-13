import React from "react";

// Mock the react-dropdown library
// This was necessary because naive solutions using even async jest weren't working
const mockDropdown = (value, onChange) => {
  const options = [
    { value: "season-1", label: "Season 1" },
    { value: "season-2", label: "Season 2" },
    { value: "season-3", label: "Season 3" }
  ];
  
  // Helper functions
  const handleChange = event => {
    const option = options.find(
      option => option.value === event.currentTarget.value
    );
    onChange(option);
  };

  // The mock dropdown
  return (
    <select data-testid="dropdown" value={value} onChange={handleChange}>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default mockDropdown;
