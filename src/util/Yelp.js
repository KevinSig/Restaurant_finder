const apiKey = 'JkjikI4PhHWYvegJAeWUL8m37TICslV8jXoOf9VAk9sFIyPnC9pJfPD7ik_rRPknrsxoRJ19vxNBZ8ixZaN4R0lAFeP1FyOirYF7ONGlFjv5a7ljm_WGheIgiEHMXXYx'

const Yelp ={
    searchYelp(term, location, sortby){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortby}`,{
        headers:{
            Authorization: `Bearer ${apiKey}`,
        },
   
        }).then((response) =>{
            return response.json();
        }).then((jsonResponse) =>{
            if (jsonResponse.businesses){
                return jsonResponse.businesses.map(((business) =>{
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                }))
            }
        })
    }
};

export default Yelp;