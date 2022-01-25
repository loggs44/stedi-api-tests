import fetch from 'node-fetch';

const login = async ({userName, password}) => {

    const options = {
        method: 'POST',
        body: JSON.stringify({userName, password}),
        header: {'Content-Type':'applacation/json'}
    };

    const apiResponse = await fetch('https://dev.stedi.me/login', options)
    const loginResponse = await apiResponse.text();

    return loginResponse;

}

export default login;