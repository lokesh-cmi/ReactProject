import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const About = () =>  {

	const initialState = {
		userName: 'lokesh-cmi',
		age: 21,
		data: {}
	};

	const [userData, setUserData] = useState(initialState);

	const fetchData = (username) => {

		fetch(`https://api.github.com/users/${username}`)
			.then(res => res.json())
			.then(resData => setUserData( { ...userData, data: resData } ) );
	};

	useEffect(() => {
		fetchData( userData.userName );
	}, [userData.userName]);

	const { data } = userData;
	console.warn( data );

	return (
		<>
            <div className="main">
                <div className="navbar">   
                    <div className="icon">
                        <h2 className="logo">Lokesh</h2>
                    </div>
                    <div className="menu">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/About">About</Link>
                            </li>
                            <li>
                                <Link to="/TicTacToe">TicTacToe</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='details'>
                    <h1>Github data</h1>
                    { Object.keys( data ).length ? 
                        (
                            <>
                                <h3>UserName = { data.name }</h3>
                                <p>Bio = { data.bio }</p>
                                <h3>Age = { userData.age }</h3>
                                <img src={ data.avatar_url } alt="Image"/>
                            </>
                        ) : 
                        ("")
                    }
                </div>

            </div>
            
		</>
	);
};

export default About;