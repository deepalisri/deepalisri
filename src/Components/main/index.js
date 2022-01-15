import React from "react";
import { Component } from "react/cjs/react.production.min";
import Header from "../header";

import "./style.css"

class Main extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            items: [],
        }
    }
    componentDidMount() {
        fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bb0239714d864619a779e5bb2b89a02d").then((response) => response.json())
            .then(response => {
                this.setState({
                    data: response.articles,
                    items: response.articles
                })
            })
            .catch(err => console.error(err));
    }
    handleChange = (e) => {
        var updatedList = this.state.data;
        updatedList = updatedList.filter(function (item) {
            return item.title.toLowerCase().search(
                e.target.value.toLowerCase()) !== -1;
        });
        this.setState({ items: updatedList });
    }
    handleDropdown = (e) => {
        var updatedList = this.state.data;

        if (e.target.classList.contains("source-filter")) {
            updatedList = updatedList.filter((item) => {
                return item.source.name === e.target.value
            })
        } else {
            updatedList = updatedList.filter((item) => {
                return item.author === e.target.value
            })
        }

        this.setState({ items: updatedList })
    }
    handleCardClick = (link) => {
        window.open(link, "_blank")
    }
    render() {
        return (
            <React.Fragment>
                {this.state.data.length > 0 ? (
                    <>
                        <Header data={this.state.items} handleChange={this.handleChange} />
                        <div className="body-container">
                            <div className="outer-container">
                                <div className="inner-container">
                                    <div className="filter-options">
                                        <div className="filter-1">
                                            <span>Sources: </span> <select className="source-filter" onChange={(e) => this.handleDropdown(e)}>
                                                {this.state.data.map((value, id) => {
                                                    return <option key={id} value={value.source.name}>{value.source.name}</option>
                                                })}
                                            </select>
                                        </div>
                                        <div className="filter-2">
                                            <span>Authors: </span> <select onChange={(e) => this.handleDropdown(e)} className="author-filter">
                                                {this.state.data.map((value, id) => {
                                                    return (
                                                        value && value.author ? <option key={id} value={value.author}>{value.author}</option>
                                                            : null)
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="cards">
                                        {this.state.items.length > 0 &&
                                            this.state.items.map((value, id) => {
                                                return (
                                                    <div className="card" key={id} onClick={() => this.handleCardClick(value.url)}>
                                                        <img className="card-image" alt="card" src={value.urlToImage} />
                                                        <h3 className="card-title">{value.title}</h3>
                                                        {value.author && <p className="card-autor">{`by ${value.author}`}</p>}
                                                        <p className="card-description">{value.description}</p>
                                                        {value.publishedAt && <h6 className="card-date">{`Published at -- ${value.publishedAt}`}</h6>}
                                                    </div>
                                                )
                                            })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}
            </React.Fragment>
        )
    }
}

export default Main;