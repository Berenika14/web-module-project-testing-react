import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Display from "./../Display";

const testShow = {
  name: "Game Of Thrones",
  summary: "Best show ever",
  seasons: [
    {
      id: 0,
      name: "Season 1",
      episodes: [],
    },
    {
      id: 1,
      name: "Season 2",
      episodes: [],
    },
    {
      id: 2,
      name: "Season 3",
      episodes: [],
    },
  ],
};

test("renders without errors with no props", () => {
  render(<Display />);
});

test("renders Show component when the button is clicked ", () => {
  render(<Display />);
  const button = screen.getByRole("button");
  userEvent.click(button);
});

test("renders show season options matching your data when the button is clicked", () => {});
