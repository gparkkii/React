import React from 'react';
import ReviewForm from './ReviewForm.jsx'


const review = [{
    'id': '1',
    'image': 'https://placeimg.com/100/100/1',
    'user': 'gparkkii',
    'rating': '4.5',
    'title': '최고의 식사',
    'content': '레스토랑 분위기가 너무 좋았어요. 그리고 소믈리에의 와인 페어링이 환상적이었습니다. 물론 요리가 훌륭하기도 했지만, 와인과 조화되어 더욱 더 완벽해진 환상적이 경험이었어요. 담당 서버들의 태도와 센스도 좋았습니다. 제가 왼손잡이인 것을 캐취하고 바로 왼손으로 세팅해주는 센스...모든 것이 완벽했습니다.',
    'posted': '2019년 12월 21일'
}]

class Review extends React.Component {
    render() {
        return(
            <>
                <ReviewForm
                    image = {review.image}
                    user = {review.user}
                    rating = {review.rating}
                    title = {review.title}
                    content = {review.content}
                    posted = {review.posted}
                />
            </>
        ) 
    }
}

export default Review;