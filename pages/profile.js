import React from 'react';
import {getUserProfile} from "../lib/auth";

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
                <pre>{JSON.stringify(this.state.user,null,2)}</pre>
        );
    }
}

export default Profile