import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Testing Home page component", () => {
    it("Should has an image", () => {
      render(<Home />);
      const image = screen.getByRole("img");
      expect(image).toBeInTheDocument();
    });

    it("Should has a text with word track your stocks", () => {
        render(<Home />)
        const text = screen.getByText(/track your stocks/i);
        expect(text).toBeInTheDocument();
    })

    it("Should has a text with word cryptocurrencies", () => {
        render(<Home />)
        const text = screen.getByText(/and cryptocurrencies/i);
        expect(text).toBeInTheDocument();
    })
  });