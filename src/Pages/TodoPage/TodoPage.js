import React, { useEffect, useState } from 'react';
import style from './TodoPage.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
var fullData={}
const TodoPage = () => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();
    

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(async (response) => {
            fullData = response.data
            console.log("fullData-- ",fullData);
            await setData(response.data)
        });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSearchText(value);

        
        // let updatedList = [...data];
        // console.log("updatedList",updatedList);
        // console.log("fullData--After ",fullData);
        let updatedList = fullData;
        updatedList = updatedList.filter((item) => {
          return item.title.toLowerCase().indexOf(value.toLowerCase()) !== -1;
        });

        setData(updatedList);
    };

    const onSelectCard = (id, userId) => {
        navigate(`/tododetails`)
        navigate(`/tododetails/${id}/${userId}`)
    }

    return (
        <>
            <div style={{display: 'flex', marginTop: '3rem', marginLeft: '20px'}}>
                  <h5>Search: </h5>  
                  <input name="search" required value={searchText} onChange={handleInputChange} style={{width: '40%', marginLeft: '10px'}}/>
            </div>

            <div className='outerDiv'>
                {data && data.map((obj, i) => {
                    return (
                        <div className='cardStyle' style={obj.completed === true ? {background: 'green'} : {background: 'red'}} onClick={() => onSelectCard(obj.id, obj.userId)}>
                            <div className='internalDiv'>#{obj.id}</div>
                            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {obj.title.length > 20 ? obj.title.substring(0, 20) + "..." : obj.title}
                            </span>
                        </div>
                    )
                })}
            </div>

        </>
    )
};

export default TodoPage;