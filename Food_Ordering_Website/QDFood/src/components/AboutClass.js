import React from "react";
class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, //same as defining const [count]=useState(0);
    };
    console.log("child componenet constructor called");
  }
  componentDidMount(){
    console.log("child componenet did mount function called");
  }
  render() {
    console.log("child componenet render method called")
    const { name, location } = this.props;
    return (
      <>
        <div>
          <h2>{this.state.count}</h2>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Increase
          </button>
          <h2>{name}</h2>
          <h3>Location : {location}</h3>
          <h4>Linkedin : Aniruddh Semalty</h4>
        </div>
      </>
    );
  }
}

export default AboutClass;
