import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js'
//import App from  '../App/App.js'


class BusinessList extends React.Component{
    render(){
        return( /* Iterate through array and return Business components */
            <div className="BusinessList">
                
                { this.props.businesses.map(business => {
                        return <Business key={business.id} business={business} />
                    })
                }
          </div>

        )// dynamically loads the businesses from the businesness array
    };
}

export default BusinessList;