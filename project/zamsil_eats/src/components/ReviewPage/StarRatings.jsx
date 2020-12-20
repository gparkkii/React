import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
class StarRatings extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating: 0
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
 
  render() {
    const { rating } = this.state;
    
    return (                
      <div style={{fontSize: 24}}>
        <StarRatingComponent 
          name="starRatings" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
          emptyStarColor={"#ccc"}
        />
        <span className="rating-number">{rating}</span>
      </div>
    );
  }
}

export default StarRatings;