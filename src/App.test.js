//import libraries
import React from "react";

// Jest and RTL imports
import { fireEvent, render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

// Component imports
import App from './App';

// Testing the component
describe('When the App component initially mounts', () => {
  it('renders without crashing', () => {
    render(<App />)
  })
  cleanup();
})