import React from 'react';
import './ReviewForm.css';

class ReviewForm extends React.Component {
    render() {
        return(
            <>
                <div className="review-form clearfix">
                    <div className="form-profile clearfix">
                        <span className="form-img">
                            <img src={this.props.image} alt="profile" />
                        </span>
                        <span className="form-userbox">
                            <h2 className="form-user">{this.props.user}</h2>
                            <p className="form-rating">{this.props.rating}</p>
                        </span>
                    </div>
                    <div className="form-review">
                        <p className="form-content">{this.props.content}</p>
                        <p className="form-posted"><span>작성일:</span>{this.props.posted}</p>
                    </div>
                </div>
            </>
        ) 
    }
}

export default ReviewForm;