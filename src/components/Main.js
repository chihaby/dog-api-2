import React, { Component } from "react";
import { ButtonList } from "./ButtonList";
import { RandomButtons } from "./RandomButtons";
import { ImageDiv } from "./ImageDiv";
import { AutoSuggest } from "./AutoSuggest";
import axios from "axios";

class Main extends Component {
    state = {
        randomImage: '',
        dropDownListValue: "",
        dropDownListResult: "",
        buttonValue: "",
        rdmButtonvalues: [],
        searchResult: [],
        list: [],
        autoList: []
    };

    componentDidMount = () => {
        axios
            .get(`https://dog.ceo/api/breeds/image/random`).then(res => {
                this.setState({randomImage: res.data.message})
                console.log(this.state.randomImage)
            });
            return axios.get(`https://dog.ceo/api/breeds/list/all`)
            .then(res => {
                const list = res.data.message;
                const autoList = Object.keys(list);
                this.setState({ autoList });
                this.randomizeButtonValues();
            })
            .catch(err => {
                console.log("error fetching List");
            });
    };

    handleDropDownListChange = event => {
        event.preventDefault();
        this.setState({
            dropDownList: event.target.innerHTML
        });
    };

    handleDropDownListSelect = () => {
        axios
            .get(`https://dog.ceo/api/breed/${this.state.dropDownList}/images`)
            .then(res => {
                const searchResult = res.data.message.slice(0, 9);
                this.setState({ searchResult });
            })
            .catch(err => {
                console.log("error fetching image");
            });
    };

    handleSubmit = event => {
        event.preventDefault();
        const buttonValue = event.target.innerHTML;
        if (buttonValue) {
            axios
                .get(`https://dog.ceo/api/breed/${buttonValue}/images`)
                .then(res => {
                    const searchResult = res.data.message.slice(0, 9);
                    this.setState({ searchResult });
                })
                .catch(err => {
                    console.log("error fetching image");
                });
        }
    };

    randomizeButtonValues = () => {
        let rdmButtonvalues = [];
        for (var i = 1; i < 9; i++) {
            const rdmNumber = this.state.autoList[
                Math.floor(
                    Math.random() * Object.keys(this.state.autoList).length
                )
            ];
            rdmButtonvalues.push(rdmNumber);
        }
        this.setState({ rdmButtonvalues });
    };

    render() {
        const { randomImage } = this.state;
        return (
            <div>
                <img    
                    src={randomImage}
                    alt={""}
                    style={{
                        height: "200px",
                        width: "200px",
                        borderRadius: "20%"
                    }} /> 

                <AutoSuggest
                    autoList={this.state.autoList}
                    handleDropDownListChange={this.handleDropDownListChange}
                    handleDropDownListSelect={this.handleDropDownListSelect}
                />
                <ButtonList
                    autoList={this.state.autoList}
                    handleSubmit={this.handleSubmit}
                />
                <RandomButtons
                    handleSubmit={this.handleSubmit}
                    rdmButtonvalues={this.state.rdmButtonvalues}
                    randomizeButtonValues={this.randomizeButtonValues}
                />
                <ImageDiv searchResult={this.state.searchResult} />
            </div>
        );
    }
}

export default Main;
