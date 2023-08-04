import { render, screen } from "@testing-library/react";
import Graph from "./Graph";

describe("Testing Graph component", () => {
  it("Should has a built in menu", () => {
    render(<Graph />);
    const menu = screen.getByTitle(/menu/i);
    expect(menu).toBeInTheDocument();
  });

  it("Should has a built in reset zoom menu", () => {
    render(<Graph />);
    const menu = screen.getByTitle(/reset zoom/i);
    expect(menu).toBeInTheDocument();
  });

  it("Should has a built in panning menu", () => {
    render(<Graph />);
    const menu = screen.getByTitle(/panning/i);
    expect(menu).toBeInTheDocument();
  });

  it("Should has a built in selection zoom menu", () => {
    render(<Graph />);
    const menu = screen.getByTitle(/selection zoom/i);
    expect(menu).toBeInTheDocument();
  });

  it("Should has a built in zoom out menu", () => {
    render(<Graph />);
    const menu = screen.getByTitle(/zoom out/i);
    expect(menu).toBeInTheDocument();
  });

  it("Should has a built in zoom in menu", () => {
    render(<Graph />);
    const menu = screen.getByTitle(/zoom in/i);
    expect(menu).toBeInTheDocument();
  });
});
