import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { render, wait } from "@testing-library/react";
import App from "./App";

// A test without mocking the API or using fake data
test("it works with the API", async () => {
  const { getByText, getByTestId } = render(<App />);
  // Test the unrendered API data before it is pulled
  expect(getByText(/Fetching data/i)).toBeVisible();
  // Test the rendered API data after it is pulled
  await wait(() => {
    expect(getByTestId("show-name")).toBeInTheDocument();
    expect(getByTestId("show-name")).toBeVisible();
    expect(getByText(/Season 1/i)).toBeInTheDocument();
    expect(getByText(/Season 2/i)).toBeInTheDocument();
    expect(getByText(/Season 3/i)).toBeInTheDocument();
  });
});
