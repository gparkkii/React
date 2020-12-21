import React from 'react';

class ReviewForm extends React.Component {
    render() {
        return(
            <div className="review-container">
                <div className="review-form">
                    <div className="review-userbox">
                        <div className="user-img">
                            <img src={this.props.image} alt="profile" />
                        </div>
                        <div className="review-user-wrapper">
                            <div className="review-user-top">
                                <h2 className="review-user">{this.props.user}</h2>
                                <p className="review-posted">{this.props.posted}</p>
                            </div>
                            <div className="review-user-bottom">
                                <p className="review-rating">{this.props.rating}<span>/5</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="review-contentbox">
                        <p className="review-content">{this.props.content}</p>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default ReviewForm;