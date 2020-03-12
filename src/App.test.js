//import libraries
import React from "react";

// Jest and RTL imports
import { render, cleanup, wait, fireEvent, waitForElement, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Component imports
import App from "./App";

// Mock fetchShow
import { fetchShow as mockFetchShow } from "./api/fetchShow";
jest.mock("./api/fetchShow.js");

// Testing the component
describe("When the App component initially mounts", () => {
  test("it works with the API", async () => {
    // Rerender the component with an array of episodes from the simulated API call
    const res = {
      data: {
        name: "Stranger Things Mock",
        image: {
          original: "http://www.tvmaze.com/shows/2993/stranger-things"
        },
        summary: "<p>Mock Summary</p>",
        _embedded: {
          episodes: [
            {
              id: 1,
              image: {
                medium:
                  "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg"
              },
              season: 1,
              number: 1,
              name: "Chapter One: The Mock Episode",
              summary: "<p>Mock Episode Summary</p>",
              runtime: 60
            }
          ]
        }
      }
    };
    // mockFetchShow.mockResolvedValueOnce(res);
    mockFetchShow.mockImplementation(() => Promise.resolve(res))

    // Test that the mock function ran at least once
    // Test that the mock API call caused the app to render with fake data
    const { getByText } = render(<App />);
    getByText(/Fetching data.../i);
    await wait(() => expect(mockFetchShow).toHaveBeenCalledTimes(1));
    await wait(() => expect(mockFetchShow).not.toHaveBeenCalledTimes(0));
    expect(mockFetchShow()).resolves.toBe(res);
  });
  cleanup();
});

// Experimental tests - not quite working yet - "extra credit" for after hours
// test('clicking the dropdown will render episodes', async () => {
//   // Assemble
//   const { getByText, getItemByText } = render(<App />);
//   await waitForElement(() => getByText('Select a season')); 
  
//   // Helper functions
//   const sleep = function(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   };

//   const getSelectedItem = (getByText) => async (selectLabel, itemText) => {
//     const DOWN_ARROW = { keyCode: 40 }
//     fireEvent.keyDown(getByText(selectLabel), DOWN_ARROW); // Click to open the dropdown
//     await sleep(500);
//     await waitForElement(() => getByText(itemText));
//     fireEvent.click(getByText(itemText));
//   }

//   // Act
//   // fireEvent.change(getByText('Select a season'), { target: { value: 0 } })
//   // const selectedItem = getSelectedItem(getByText);
//   // await selectedItem('Select a season', 'Season 1');
  
//   // // Assert
//   // await waitForElement(() => getByTestId('episode')); 

//   // Click the "Select a season" dropdown
//   // fireEvent.click(getByText('Season 1')); // Click to select 'Season 1'
//   // const dropdown = getByText('Select a season');
//   // fireEvent.change(dropdown, { target: { value: 'Season 1' } })
    
//   // await waitForElement(() => getByTestId('episode'));      
//   // Parking lot
//   // await wait(() => getByTestId(/episode/i));
//   // await wait(() => expect(queryAllByTestId(/episode/i)).toHaveLength(1));

// }, 10000)