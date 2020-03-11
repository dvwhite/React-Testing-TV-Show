//import libraries
import React from "react";

// Jest and RTL imports
import { render, cleanup, wait, getByTestId } from "@testing-library/react";
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
    const { getByText, getByTestId, queryAllByTestId } = render(<App />);
    getByText(/Fetching data.../i);
    await wait(() => expect(mockFetchShow).toHaveBeenCalledTimes(1));
    await wait(() => expect(mockFetchShow).not.toHaveBeenCalledTimes(0));
    expect(mockFetchShow()).resolves.toBe(res);
    // getByTestId(/episode/i);
    // await wait(() => expect(queryAllByTestId(/episode/i)).toHaveLength(1));
  });
  cleanup();
});
