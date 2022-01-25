import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Episode from "./../Episode";

const testEpisode = {
  id: 1,
  image: "https://i.ibb.co/2FsfXqM/stranger-things.png",
  name: "",
  season: 1,
  number: 1,
  summary: "summary",
  runtime: 1,
};
const testEpisodeImage = {
  id: 1,
  image: null,
  name: "",
  season: 1,
  number: 1,
  summary: "summary",
  runtime: 1,
};

test("renders without error", () => {
  render(<Episode episode={testEpisode} />);
});

test("renders the summary test passed as prop", () => {
  render(<Episode episode={testEpisode} />);

  const summary = screen.queryByText(/summary/i);
  expect(summary).toBeInTheDocument();
  expect(summary).toBeVisible();
  expect(summary).toHaveTextContent("summary");
});

test("renders default image when image is not defined", () => {
  render(<Episode episode={testEpisodeImage} />);

  const image = screen.queryByAltText(
    "https://i.ibb.co/2FsfXqM/stranger-things.png"
  );
  expect(image).toBeVisible();
});
