import React, {useEffect, useState} from 'react';
import {Users} from './Components/UserComponents/Users/Users';
import getUsers from "./Components/UserComponents/Users/user.service";


function App()  {


    const chooseUser= ({userId}) => {
        const [getPost, setGetPost]= useState([]);
        useEffect(()=>{getUsers().then(value =>  setGetPost(value.data))
        }, [])
    };

let [users, setUsers]=useState([]);

useEffect(()=> {getUsers().then(value => setUsers(value.data))},[])

    return (
        <div>
            {
                users.map(value => <Users key={value.id} item={value} chooseUser={chooseUser}/>)
            }



        </div>
    );
}

export default App;
//
// property drill
//
// Структура:
//     Головна компонента App. App робить запит на https://jsonplaceholder.typicode.com/users
//     В середині Апп лежить компонента Users яка відображає всіх отриманих в апп юзерів з плейсхолдеру
// Кожен юзер - це компонента User, в якій є інші комоненти, а саме
// UserDetails - яка відображає інформацію id,name,username,email,phone,website,
// UserAddress - яка відображає інформацію street suite city,
// Company - яка відображає name,catchPhrase,bs
//
// state lifting
// Є компонента Арр. В середині неї є UsersComponent, який отримує наданні з https://jsonplaceholder.typicode.com/users
//     Кожен юзер - окрема компонента UserComponent,в якій є кнопка show posts, при натисканні на яку робиться state lifting, а саме - в компоненті App відображаються пости того юзера, на кнопку якого клікнули.
//
//     context
// Зробити структуру компонентів -
// App
// Child1                              Child2
// SubChild1_1    SubChild1_2          SubChild2_1    SubChild2_2
//
// Тепер завдання:
//     З SubChild2_2 передати данні (будь-які) в SubChild1_1
//
//
//
// ***
// Я б для себе рекомендував зробити наступну штуку з завданням з subchild:
//     Зробити його спочатку без використання контексту, а потім переробити з ним. Так краще дійде суть