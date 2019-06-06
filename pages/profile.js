import React from 'react';
import Layout from '../components/Layout';
import {getUserProfile, authInitialProps} from "../lib/auth";

class Profile extends React.Component {

    state = {
        user: null
    };

    async componentDidMount() {
        const Profile = await getUserProfile();
        await this.setState({user: Profile});
    }

    render() {
        return (
            <Layout title="Profile" {...this.props}>
                <pre>{JSON.stringify(this.state.user, null, 2)}</pre>
            </Layout>
        );
    }
}

Profile.getInitialProps = authInitialProps();

export default Profile