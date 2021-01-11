import React, { useEffect }from 'react';
import axios from 'axios';

function LandingPage() {

    //axios로 server에 request 보내기
    useEffect(() =>{
        axios.get('/api/landing')
        .then(response => console.log(response.data))
    },[])


    return (
        <div>
            LandingPage
        </div>
    )
}

export default LandingPage
