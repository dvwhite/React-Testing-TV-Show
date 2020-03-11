//import libraries
import React from "react";

// Jest and RTL imports
import { render, cleanup, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Component imports
import App from "./App";

// Mock fetchShow
import { fetchShow as mockFetchShow } from "./api/fetchShow";
jest.mock("./api/fetchShow.js");

// Testing the component
describe("When the App component initially mounts", () => {
  test("renders images from the API", async () => {
    // Rerender the component with an array of episodes from the simulated API call
    const res = {
      data: {
        name: "Stranger Things Mock",
        image : {
          original: "http://www.tvmaze.com/shows/2993/stranger-things"
        },
        summary: "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
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
              summary: "<p>Mock Summary</p>",
              runtime: 60,
            }
          ]
        }
      }
    };
    mockFetchShow.mockResolvedValueOnce(res);

    // Test that the mock function ran at least once
    
    // Test that the mock API call caused the app to render with fake data
    const { queryAllByTestId } = render(<App />);
    await wait(() => expect(mockFetchShow).toHaveBeenCalledTimes(1));
    await wait(() => expect(mockFetchShow).not.toHaveBeenCalledTimes(0));
  });
  cleanup();
});
