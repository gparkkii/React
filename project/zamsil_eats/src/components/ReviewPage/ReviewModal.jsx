import React from 'react';
// import ModalInput from './ModalInput.jsx'
import ModalInput from './ModalInput';

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
                        <ModalInput close={close}/>
                    </div>
                </>
            : null
            }
        </>
    ) 
}


export default ReviewModal;