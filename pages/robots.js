import fetch from 'isomorphic-unfetch';
import { useState } from 'react';

import LinkBtn from '../components/link-btn';
import Link from '../components/link';
import SearchBox from '../components/search-box';

const RobotsPage = (props) => {
    // let robots = [...props.robots];
    const [state, setState] = useState({
        robots: props.robots,
    });
    console.log('state:', state);
    const searchChange = function(event) {
        console.log('searchChange:', event.target.value);
        if(event.target.value) {
            setState({
                ...state,
                robots: props.robots.filter(robot => robot.name.toLowerCase().includes(event.target.value.toLowerCase())),
            });
        } else {
            setState({
                ...state,
                robots: props.robots,
            });
        }
    };

    return (<div>
        <h1>Robots Page</h1>
        <LinkBtn src='/' name='Back' />
        <div>Robot data</div>
        <hr />
        <SearchBox searchChange={searchChange}/>
        <hr />
        <div>
            {
                state.robots.map(robot => (<li key={robot.id}>
                    <Link src={`robot/${robot.id}`} name={robot.name} />
                </li>))
            }
        </div>
    </div>);
};

RobotsPage.getInitialProps = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log('data', data);
    return {
        robots: data,
    }
}

export default RobotsPage