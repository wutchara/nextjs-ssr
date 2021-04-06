import fetch from 'isomorphic-unfetch';
import LinkBtn from '../components/link-btn';
import Link from '../components/link';

const RobotsPage = (props) => (<div>
    <h1>Robots Page</h1>
    <LinkBtn src='/' name='Back' />
    <div>Robot data</div>
    <hr />
    <div>
        {
            props.robots.map(robot => (<li key={robot.id}>
                <Link src={`robots/${robot.id}`} name={robot.name} />
            </li>))
        }
    </div>
</div>);

RobotsPage.getInitialProps = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log('data', data);
    return {
        robots: data,
    }
}

export default RobotsPage