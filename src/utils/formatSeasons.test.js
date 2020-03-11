//import libraries
import React from "react";

// Jest and RTL imports
import { render, cleanup, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const mockFormatSeasons = require('./formatSeasons');

test("test output of formatSeasons", () => {
  // Assemble
  // Test stub of formatSeasons
  const spy = jest.spyOn(mockFormatSeasons, 'formatSeasons');

  // Mock data
  const testSeason = [
    {
      id: 553946,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg"
      },
      season: 1,
      number: 1,
      name: "Mock Chapter One",
      summary: "<p>Summary</p>",
      runtime: 60
    },
    {
      id: 553947,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg"
      },
      season: 1,
      number: 2,
      name: "Mock Chapter Two",
      summary: "<p>Summary</p>",
      runtime: 60
    }
  ];

  const testSeason2 = [
    {
      id: 553946,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg"
      },
      season: 1,
      number: 1,
      name: "Mock Chapter Season One: Chapter One",
      summary: "<p>Summary</p>",
      runtime: 60
    },
    {
      id: 553947,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg"
      },
      season: 2,
      number: 1,
      name: "Mock Chapter Season Two: Chapter One",
      summary: "<p>Summary</p>",
      runtime: 60
    }
  ];

  // Act
  const testObj = spy(testSeason);
  const testObj2 = spy(testSeason2);

  // Assert
  expect(testObj).toEqual({
    "Season 1": [
      {
        id: 553946,
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg"
        },
        season: 1,
        number: 1,
        name: "Mock Chapter One",
        summary: "<p>Summary</p>",
        runtime: 60
      },
      {
        id: 553947,
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg"
        },
        season: 1,
        number: 2,
        name: "Mock Chapter Two",
        summary: "<p>Summary</p>",
        runtime: 60
      }
    ]
  });
  expect(testObj2).toEqual({
    "Season 1": [
      {
        id: 553946,
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg"
        },
        season: 1,
        number: 1,
        name: "Mock Chapter Season One: Chapter One",
        summary: "<p>Summary</p>",
        runtime: 60
      },
    ],
    "Season 2": [
      {
        id: 553947,
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg"
        },
        season: 2,
        number: 1,
        name: "Mock Chapter Season Two: Chapter One",
        summary: "<p>Summary</p>",
        runtime: 60
      }
    ]
  });
});
