import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("Testing SearchBar component", () => {
  it("Should render on the screen", () => {
    render(<SearchBar />);
    const searchBar = screen.getByRole('textbox');
    expect(searchBar).toBeInTheDocument();
  });
});
