import React from 'react';
// import ModalInput from './ModalInput.jsx'
import './ReviewModal.css';
import StarRatings from './StarRatings';

const ReviewModal = ({isOpen, close}) => {
    return(
        <>
            { isOpen ?
                <>
                    <div className="modal-overlay" onClick={close} />
                    <div className="modal">
                        <div className="modal-header">
                            <div className="modal-info">
                                <img className="info-img" src="https://placeimg.com/60/60/1" alt="profile"/>
                                <div className="info-title">
                                    <h2>큰집 닭강정</h2>
                                    <p>평균 별점 : 4.7</p>
                                </div>
                            </div>
                            <button className="modal-close" onClick={close}>닫기</button>
                        </div>
                        <form className="modal-content">
                            <h2> 나의 별점은?</h2>
                            <div className="star-rating">
                                <StarRatings/>
                            </div>
                            <p>리뷰 내용</p>
                            <textarea className="modal-textarea" placeholder="평가는 익명으로 등록됩니다. 솔직한 후기를 남겨주세요."/>
                        </form>
                        <div className="modal-button">
                            <button onClick={close}>리뷰 등록하기</button>
                        </div>
                    </div>
                </>
            : null
            }
        </>
    ) 
}


export default ReviewModal;