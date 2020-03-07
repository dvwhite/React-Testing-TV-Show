//import libraries
import React from "react";

// Jest and RTL imports
import { fireEvent, render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

// Component imports
import Episodes from './Episodes';

// Testing the component
describe('When the Episodes component initially mounts', () => {
  it('renders without crashing', () => {
    render(<Episodes />)
  })
  cleanup();
})