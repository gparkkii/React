import React from 'react';
import './ReviewPage.css'

class ReviewPage extends React.Component {
    render() {
        return(
            <>
                <div className="container">
                    <div className="review-header clearfix">
                        <div className="review-title">
                            <h2 className="review">리뷰</h2>
                            <p className="review-number">(1,207)</p>
                        </div>
                        <button className="review-btn">리뷰작성</button>
                    </div>
                </div>
            </>
        ) 
    }
}

export default ReviewPage;