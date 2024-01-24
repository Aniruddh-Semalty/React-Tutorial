import react from "react"
import reactDOM from "react-dom/client"
const HeaderComponent=()=>{
    return(
        <div className="header">
            <div className="logo">
                <img id="logo" src="https://logo.com/image-cdn/images/kts928pd/production/7ab5def0ab1dad26a90bc35cb7eed9e628f7f201-430x430.png?w=1080&q=72"/>
            </div>
            <div className="navbar">
                <div className="navbar-items">
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Name</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>






        </div>


    )

}
const AppComponent=()=>{
    return (<div>
            <HeaderComponent/>

    </div>)
}

const root=reactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent/>)