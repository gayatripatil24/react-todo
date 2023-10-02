import React, { useEffect, useState } from 'react';
import style from './TodoDetailsPage.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoDetailsPage = () => {
    const [data, setData] = useState({});
    const [userdata, setUserData] = useState({});
    const url = window.location.href.split("/");

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        axios.get('https://jsonplaceholder.typicode.com/todos/'+url[4]).then(async (response) => {
            await setData(response.data)

            axios.get('https://jsonplaceholder.typicode.com/users/'+url[5]).then(async (response) => {
                await setUserData(response.data)
            });
        });  
    };

    return (
        <>
            <div className='outerDiv1'>
               <div className='cardStyle1'>
                    <span>User name: {userdata.username}</span> <br />
                    <span>Item number: {data.id}</span> <br />
                    <span>Item title: {data.title}</span>
                </div>
            </div>
        </>
    )
};

export default TodoDetailsPage;