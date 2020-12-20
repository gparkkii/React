import React from 'react';
import './FavoritePage.css'

class FavoritePage extends React.Component{
    render() {
        return(
            <>
                <div className="container">
                    <div className="fav-header clearfix">
                        <div className="fav-title">
                            <h2>내가 찜한 가게</h2>
                            <p>(1,207)</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default FavoritePage;