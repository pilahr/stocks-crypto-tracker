import { render, screen } from "@testing-library/react";
import TopNav from "./TopNav";

describe("Testing top navigation bar functionality", () => {
    it("Should has an application name as a heading", () => {
      render(<TopNav />);
      const topNav = screen.getByRole("heading");
      expect(topNav).toBeInTheDocument();
    });

    it("Should has application name as tickr", () => {
        render(<TopNav/>)
        const topNav = screen.getByText(/tickr/i);
        expect(topNav).toBeInTheDocument();
    })

    it("Should render the link", () => {
        render(<TopNav />);
        const topNav = screen.getByRole("link");
        expect(topNav).toBeInTheDocument();
    })

    it("Should has a text stocks on it", () => {
        render(<TopNav />);
        const topNav = screen.getByText(/stocks/i);
        expect(topNav).toBeInTheDocument();
    })

    it("Should has a text crypto on it", () => {
        render(<TopNav />);
        const topNav = screen.getByText(/crypto/i);
        expect(topNav).toBeInTheDocument();
    })
  
  });