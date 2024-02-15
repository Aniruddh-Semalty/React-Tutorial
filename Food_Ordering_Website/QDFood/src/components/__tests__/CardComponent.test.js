import {render,screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import CardComponent from "../CardComponent"
import MOCK_DATA from "../mocks/CardComponentMock.json"
import { PopularCardComponent } from "../CardComponent"


describe("Should render Restaurant cards",()=>{
    it("should render Restaurant card component with props data ",()=>{
        render(<CardComponent restaurantObj={MOCK_DATA}/>)
       
       const resName=screen.getByText("Walk In Woods (Sahastradhara Road)");
       expect(resName).toBeInTheDocument();
       })
       
       it("Should render Restaurant card with promoted label",()=>{
         const restaurantObj=MOCK_DATA;
         const WrappedComponent=PopularCardComponent(CardComponent);
       
         const { getByText } = render(
           <WrappedComponent restaurantObj={restaurantObj} />
         )
       
         const labelElement = getByText('Most Popular');
         expect(labelElement).toBeInTheDocument();
       })
})
