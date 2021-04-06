import Link from 'next/link';

const HomeBtn = (posts) => (<Link href={posts.src}>
<button>{posts.name}</button>
</Link>);

export default HomeBtn;