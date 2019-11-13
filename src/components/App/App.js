import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js'

const business ={
imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
name: 'Luca Pizzeria',
address: '1010 Paddington Way',
city: 'Flavortown',
state: 'NY',
zipCode: '10101',
category: 'Italian',
rating: 4.5,
reviewCount: 90
}

const businesses = [ business, business, business, business, business, business ];


class App extends React.Component{
  searchYelp(term,location,sortBy){
    console.log(`Searching Yelp with Pizza, Brooklyn, best_match`)
  }
  render(){
    return(
      <div className="App">
      <h1>ravenous</h1>
        <SearchBar searchYelp ={this.searchYelp}/> 
        <BusinessList businesses = {businesses}/>
      </div>
    );
  }

}


export default App;