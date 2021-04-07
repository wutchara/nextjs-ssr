import { useRouter } from 'next/router'
import LinkBtn from '../../components/link-btn'

const Post = (props) => {
    const router = useRouter()
    const { pid } = router.query

    return (<div>
        <LinkBtn src='/robots' name='Back' />
        <p>Robot ID: {pid}</p>
        <hr />
    </div>)
}

export default Post