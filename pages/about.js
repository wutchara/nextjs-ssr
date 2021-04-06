import Link from 'next/link';

const AboutPage = () => (<div style={{fontSize: '20px', color: 'blue'}}>
    <h1>About Page</h1>
    <Link href='/'>
        <button>Back</button>
    </Link>
    <p>I was a magician once</p>
</div>);

export default AboutPage