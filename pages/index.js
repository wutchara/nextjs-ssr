import Link from 'next/link';

const HomePage = () => (<div>
    <h1>SSR Magician</h1>
    <br />
    <a href='/about'>A: About</a>
    <br />
    <Link href='/about'>
        <button>Link: About</button>
    </Link>
</div>);

export default HomePage