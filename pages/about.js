import Link from 'next/link';
import Image from '../components/image';
import HomeBtn from '../components/link-btn';

const AboutPage = () => (<div style={{fontSize: '20px', color: 'blue'}}>
    <h1>About Page</h1>
    <HomeBtn src='/' name='Back' />
    <Image />
    <p>I was a magician once</p>
</div>);

export default AboutPage