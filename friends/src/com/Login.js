import React, {useState} from 'react';
import { withFormik, Form, Field} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';


const Login = ({touched, errors, props}) => {
    const [credentials, setCredentials] = useState({username: '', password: ''});

    const login = event => {
        // console.log('login event');
        event.preventDefault();
        // console.log('posting the following credentials: ', {credentials});
        // 
        axios
        .post('http://localhost:5000/api/login', credentials)
        .then(response => {
            // console.log('response value: ', response);
            localStorage.setItem('token', response.data.payload);
            // console.log('props line 22: ', props);

            // to redirect to list of friends
            props.history.push('/friendslist');
        })
        .catch(error => {
            console.log('error: ', error);
        }
        )
      
      
    }
      
    const handleChange = event => {
        // console.log('handlechange event');
        setCredentials({...credentials, [event.target.name]: event.target.value}
            );
        console.log('target value: ', event.target.value);
    }


    return (
        <Form className="form" onSubmit={login} >
            <div className="form-group">
                <label className="label">Username</label>
                <Field 
                    className="input" 
                    name="username" 
                    type="text" 
                    value={credentials.username} 
                    onChange={handleChange} 
                    autoComplete="off"  />
            </div>
           {/* <p> {touched.username && errors.username}</p> */}
            <div className="form-group">
                <label className="label">Password</label>
                <Field 
                    className="input" 
                    name="password" 
                    type="password" 
                    value={credentials.password} 
                    onChange={handleChange}   
                    autoComplete="off" />
            </div>
            {/* <p> {touched.password && errors.password}</p> */}
            <button className="btn" type="submit">Login &rarr;</button>
        </Form>
    )
}

export default withFormik({
    mapPropToValues() {
        return {
            username: '',
            password: '',
        }
    },
    
    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().min(6).required()
    }),
  


})(Login);