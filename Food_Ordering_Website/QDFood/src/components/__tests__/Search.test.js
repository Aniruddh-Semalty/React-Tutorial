import {fireEvent, render, screen} from "@testing-library/react";
import Body from "../Body.js"
import MOCK_DATA from "../mocks/RestaurantListMock.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

describe("Should render restaurant list in body",()=>{
    it("should render restaurant list before search button clicked",async()=>{
       
        await act(async()=>{
           
            render( <BrowserRouter><Body/> </BrowserRouter>)
           
        })
        const allRestaurants=screen.getAllByTestId("resCard")
        
        expect(allRestaurants.length).toBe(20);
       
     
    })

    it("should render searched restaurants after search button clicked",async()=>{
        await act(async()=>{
            render(<BrowserRouter><Body/></BrowserRouter>)
        });
        const searchButton=screen.getByRole("button",{name:"Search"})
        const searchInputBox=screen.getByTestId("searchInputBox");
        fireEvent.change(searchInputBox,{target:{value:"punjab"}}) //for all the restaurants whose name contains punjab(i.e punjabi restaurants)
        fireEvent.click(searchButton);
        const searchedRestaurants=screen.getAllByTestId("resCard");
        expect(searchedRestaurants.length).toBe(2);

    })

    it("Should render top rated restaurants when top rated button is clicked",async()=>{
        await act(async()=>{
            render(<BrowserRouter><Body/></BrowserRouter>)
        });
        const topRatedBtn=screen.getByRole("button",{name:"Top Rated Restaurants"});
        fireEvent.click(topRatedBtn);
        const topRatedRestaurants=screen.getAllByTestId("resCard");
        expect(topRatedRestaurants.length).toBe(7);
    })

    it("Should render all restaurants when all restaurants button is clicked",async()=>{
        await act(async()=>{
            render(<BrowserRouter><Body/></BrowserRouter>)
        });

        const allRestaurantsbtn=screen.getByRole("button",{name:"All Restaurants"});
        fireEvent.click(allRestaurantsbtn);
        const allRestaurantsList=screen.getAllByTestId("resCard");
        expect(allRestaurantsList.length).toBe(20);

    })
});
