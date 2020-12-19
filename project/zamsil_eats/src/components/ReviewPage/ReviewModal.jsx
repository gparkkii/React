import React from 'react';
// import ModalInput from './ModalInput.jsx'
import './ReviewModal.css';

const ReviewModal = ({isOpen, close}) => {
    return(
        <>
            { isOpen ?
                <>
                    <div className="modal-overlay" onClick={close} />
                    <div className="modal">
                        <div className="modal-header">
                            <p className="modal-title">리뷰 작성</p>
                            <button className="modal-close" onClick={close}>닫기</button>
                        </div>
                        <div className="modal-content">
                            <h2>이 음식점에 대한 전반적인 평가</h2>
                            <input type="text" placeholder="리뷰 제목"/>
                            <br/>
                            <input type="text" placeholder="리뷰 내용"/>
                        </div>
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