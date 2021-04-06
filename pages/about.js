import Link from 'next/link';
import Image from '../components/image';

const AboutPage = () => (<div style={{fontSize: '20px', color: 'blue'}}>
    <h1>About Page</h1>
    <Link href='/'>
        <button>Back</button>
    </Link>
    <Image />
    <p>I was a magician once</p>
</div>);

export default AboutPage