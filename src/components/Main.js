import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { BreedButton } from "./BreedButton";
import ImageList from "./ImageList";
import { AutoSuggest } from "./AutoSuggest";
import axios from "axios";

class Main extends Component {
  state = {
    // list: [],
    // selectBreed: "",
    buttonValue: "",
    searchResult: [],
    autoList: [],
  };

  componentDidMount = () => {
    axios
      .get(`https://dog.ceo/api/breeds/list/all`)
      .then((res) => {
        const list = res.data.message;
        const autoList = Object.keys(list);
        this.setState({ autoList });
      })
      .catch((err) => {
        console.log("error fetching List");
      });
    axios
      .get(`https://dog.ceo/api/breed/beagle/images`)
      .then((res) => {
        const searchResult = res.data.message.slice(0, 12);
        this.setState({ searchResult });
      })
      .catch((err) => {
        console.log("error fetching image");
      });
  };

  handleButtonClick = async (event) => {
    event.preventDefault();
    const buttonBreed = event.target.value;
    console.log(buttonBreed);
    await axios
      .get(`https://dog.ceo/api/breed/${buttonBreed}/images`)
      .then((res) => {
        const searchResult = res.data.message.slice(0, 12);
        this.setState({ searchResult });
      })
      .catch((err) => {
        console.log("error fetching image");
      });
  };

  handleSelectList = async (event) => {
    event.preventDefault();
    const listBreed = event.target.value;
    await axios
      .get(`https://dog.ceo/api/breed/${listBreed}/images`)
      .then((res) => {
        const searchResult = res.data.message.slice(0, 12);
        this.setState({ searchResult });
      })
      .catch((err) => {
        console.log("error fetching image");
      });
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <BreedButton handleButtonClick={this.handleButtonClick} />
          <br />
          <AutoSuggest
            autoList={this.state.autoList}
            // handleDropDownListChange={this.handleDropDownListChange}
            handleSelectList={this.handleSelectList}
          />{" "}
          <br />
          <ImageList searchResult={this.state.searchResult} />
        </Container>
      </React.Fragment>
    );
  }
}

export default Main;

// handleSelectList = (event) => {
//   event.preventDefault();
//   axios
//     .get(`https://dog.ceo/api/breed/${event.target.innerHTML}/images`)
//     .then((res) => {
//       const searchResult = res.data.message.slice(0, 6);
//       this.setState({ searchResult });
//     })
//     .catch((err) => {
//       console.log("error fetching image");
//     });
// };
