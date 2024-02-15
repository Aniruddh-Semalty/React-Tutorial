import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("Contact us page test cases",()=>{
    test("Should Contact page heading is loaded", () => {
        render(<Contact />);
        //querying
        const heading = screen.getByRole("heading");
        //assertion
        expect(heading).toBeInTheDocument();
      });
      
      
      test("Should button rendered on the component", () => {
        render(<Contact />);
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
      });
      
      //can use it instead of test
      it("should input box rendered on the component", () => {
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes[0]).toBeInTheDocument();
      });
      
      
      it("should two input boxes rendered on the component", () => {
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2);
      });
      
})


