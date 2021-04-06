import Link from 'next/link';
import LinkBtn from '../components/link-btn';

const HomePage = () => (<div>
    <h1>SSR Magician</h1>
    <br />
    <a href='/about'>A: About</a>
    <br />
    <LinkBtn src='/about' name='Link: About' />
    <LinkBtn src='/robots' name='Link: Robots' />
</div>);

export default HomePage