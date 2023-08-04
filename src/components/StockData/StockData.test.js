import { render, screen } from "@testing-library/react";
import StockData from "./StockData";

describe("Testing StockData component", () => {
  it("Should contains the word 'open' ", () => {
    render(<StockData />);
    const text = screen.getByText(/open/i)
    expect(text).toBeInTheDocument();
  });

  it("Should contains the word 'high' ", () => {
    render(<StockData />);
    const text = screen.getByText(/high/i)
    expect(text).toBeInTheDocument();
  });

  it("Should contains the word 'low' ", () => {
    render(<StockData />);
    const text = screen.getByText(/low/i)
    expect(text).toBeInTheDocument();
  });

  it("Should contains the word 'close' ", () => {
    render(<StockData />);
    const text = screen.getByText(/close/i)
    expect(text).toBeInTheDocument();
  });

  it("Should contains the word 'volume' ", () => {
    render(<StockData />);
    const text = screen.getByText(/volume/i)
    expect(text).toBeInTheDocument();
  });
});
