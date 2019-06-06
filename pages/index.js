import Layout from '../components/Layout';
import Link from 'next/link';
import {authInitialProps} from "../lib/auth";

const index = (props) => {
    // console.log('index props',props);
    return(
        <Layout title="Home" {...props}>
            <Link href="/profile">
                <a>Go to profile</a>
            </Link>
        </Layout>
    )
};

index.getInitialProps = authInitialProps();

export  default index;