import React from 'react'
import AboutClass from './AboutClass'

class About extends React.Component {
  constructor(props)
  {
    super(props);
    console.log("Parent constructor called");
  }
  componentDidMount(){
    console.log("parent componenet did mount function called");
  }
  render() {
    console.log("Parent render method called");
    return(
    <AboutClass name={"Aniruddh semalty"} location={"Dehradun"}/>)
  }
}

export default About