import React from 'react';
import { post } from 'axios';

class CustomerAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            userName: '',
            age: '',
            birthday: '',
            job: '',
            fileName: '', 
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            file: null,
            userName: '',
            age: '',
            birthday: '',
            job: '',
            fileName: '',
        })
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0], //files에서 1개만 전송할 수 있게
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    
    addCustomer = () => {
        const url = '/api/customers',
              formData = new FormData();
        
        formData.append('image', this.state.file);
        formData.append('name', this.state.userName);
        formData.append('age', this.state.age);
        formData.append('birthday', this.state.birthday);
        formData.append('job', this.state.job);
        
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
                //서버에 전달하고자 하는 내용에 파일이 있을시 웹 표준에 맞는 헤더를 추가해줘야한다.
            }
        }
        return post(url, formData, config);
    }
    
    render() {
        return(
            <form onSubmit= {this.handleFormSubmit}>
                <h2>고객추가</h2>
                <div>프로필 이미지: 
                    <input 
                        type="file" 
                        name="file" 
                        file = {this.state.file} 
                        value= {this.state.fileName} 
                        onChange= {this.handleFileChange} 
                    />
                </div>
                <div>이름: 
                    <input 
                        type="text" 
                        name="userName" 
                        value= {this.state.userName} 
                        onChange= {this.handleValueChange} 
                    />
                </div>
                <div>나이: 
                    <input 
                        type="text" 
                        name="age" 
                        value= {this.state.age} 
                        onChange= {this.handleValueChange} 
                    />
                </div>
                <div>생년월일: 
                    <input 
                        type="text" 
                        name="birthday" 
                        value= {this.state.birthday} 
                        onChange= {this.handleValueChange} 
                    />
                </div>
                <div>직업: 
                    <input 
                        type="text" 
                        name="job" 
                        value= {this.state.job} 
                        onChange= {this.handleValueChange} 
                    />
                </div>
                <button type="submit">추가하기</button>
            </form>
        )
    }
}

export default CustomerAdd;