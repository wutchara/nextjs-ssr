import Link from 'next/link';

const HomeBtn = (posts) => (<Link href={posts.src}>
<a>{posts.name}</a>
</Link>);

export default HomeBtn;