/*import React from 'react';
import './SearchBar.css';


//documentation https://www.yelp.com/developers/documentation/v3/business_search

  
class SearchBar extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      term : '' ,
      location : '',
      sortBy : 'best_match',
    };

  this.handleLocationChange =this.handleLocationChange.bind(this);
  this.handleTermChange = this.handleSortByChange.bind(this);
  this.handleSearch = this.handleSearch.bind(this);

     this.sortByOptions = {
      'Best Matched' : 'best_match',
      'Highest Rated' : 'rating',
      'Most Reviewed' : 'review_count'
  };

}


getSortByClass(sortByOption) {
  if (this.state.sortBy === sortByOption) {
    return 'active';
  }
  return '';
}



handleSortByChange(sortByOption) {
  this.setState({sortBy: sortByOption});
}

handleTermChange(event) {
  this.setState({term: event.target.value});
}

handleLocationChange(event) {
  this.setState({location: event.target.value});
}

handleSearch(event) {
  this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);

  event.preventDefault();
}

renderSortByOptions() {
  return Object.keys(this.sortByOptions).map(sortByOption => {
    let sortByOptionValue = this.sortByOptions[sortByOption];
    
    return (<li onClick = {this.handleSortByChange.bind(this,sortByOptionValue)} 
    className={this.getSortByClass(sortByOptionValue)} 
  key = {sortByOptionValue}> {sortByOption} </li>)

  }); 
  //This will allow us to both bind to the current value of this (as we usually do in the constructor()) 
  //but also bind the current sortByOptionValue as the first argument to the method call, 
  //ensuring the method is called with the appropriate value when clicked
}

render() {
  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {this.renderSortByOptions()}
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" onChange={this.handleTermChange} />
        <input placeholder="Where?" onChange={this.handleLocationChange}/>
      </div>
      <div className="SearchBar-submit">
        <a onClick={this.handleSearch}>Let's Go</a>
      </div>
    </div>
  );
}
}


export default SearchBar;

*/

import React from "react";
import "./SearchBar.css";


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match"

    };
    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count"
    };
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return "active";
    } 
    return "";
    //this.state.sortBy === sortByOption ? "active" : ""; -> raises ESLint error, can be fixed w/ if/else statement or disabling no-unused-expressions
  }

  handleSortByChange = (sortByOption) => {
    this.props.searchYelp(this.state.term, this.state.location, sortByOption);
    this.setState({sortBy: sortByOption});
  }

  handleTermChange = (e) => {
    this.setState({term: e.target.value});
  }

  handleLocationChange = (e) => {
    this.setState({location: e.target.value});
  }

  handleSearchClick = (e) => {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    e.preventDefault(); //to prevent the default action of clicking a link from triggering at the end of the method
  }

  handleSearchEnter = (e) => {
    if (e.key === "Enter") {
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
      e.preventDefault();
    }
  }

  renderSortByOptions = () => {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return <li key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)}>{sortByOption}</li>
    });
  }

  render() {
    return (
      <div className="SearchBar" onKeyPress={this.handleSearchEnter}>
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearchClick} href="foo" >Let's Go</a>
        </div>
      </div>
    )
  }
}

export default SearchBar;