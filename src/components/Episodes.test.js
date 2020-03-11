//import libraries
import React from "react";

// Jest and RTL imports
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

// Component imports
import Episodes from './Episodes';

// Testing the component
describe('When the Episodes component initially mounts', () => {
  it('renders without crashing', () => {
    render(<Episodes />)
  })

  it('renders no images with an empty episodes prop', () => {
    // Test if the component's array map doesn't occur (as expected)
    const { queryAllByTestId, rerender } = render(<Episodes episodes={[]} />);
    expect(queryAllByTestId(/episode/i)).toHaveLength(0);
    expect(queryAllByTestId(/episode/i)).not.toHaveLength(1);

    // Rerender the component with an array of episodes containing a single episode
    const testSeason = [{
      id: 553946,
      image: {medium: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg"},
      season: 1,
      number: 1,
      name: "Chapter One: The Vanishing of Will Byers",
      summary: "<p>Summary</p>",
      runtime: 60
    }];
    rerender(< Episodes episodes={testSeason} />);
    expect(queryAllByTestId(/episode/i)).toHaveLength(1);
    expect(queryAllByTestId(/episode/i)).not.toHaveLength(0);
  })

  cleanup();
});

