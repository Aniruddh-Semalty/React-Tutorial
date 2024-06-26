import React from "react";
import userContext from "../utils/userContext";
class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Aniruddh-Semalty");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    const { name, company, location, url, email } = this.state.userInfo;

    return (
      <>
        <div>
          <h1>
            Logged in user:
            <userContext.Consumer>
              {(data) => {
                return data.loggedInUser;
              }}
            </userContext.Consumer>
          </h1>

          <h2>{name}</h2>
          <h3>Location : {location}</h3>
          <h4>Github url:{url}</h4>
          <h5>Email-id:{email}</h5>
        </div>
      </>
    );
  }
}

export default AboutClass;
