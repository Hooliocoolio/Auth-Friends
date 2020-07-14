import axios from 'axios';

export const axiosAuth = () => {
    const token = localStorage.getItem('token');
    console.log('token recieved', token);

    return axios.create(
        {
            headers: {
                Authorization: token
            }
        }
    )
    
}

 