import { render, screen } from "@testing-library/react";
import CryptoDetails from "./CryptoDetails";

describe("Testing CryptoDetails component", () => {
  it("Should has a text as a heading for the date", () => {
    render(<CryptoDetails />);
    const text = screen.getByRole("heading");
    expect(text).toBeInTheDocument();
  });
});
