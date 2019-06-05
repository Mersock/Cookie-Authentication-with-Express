import {loginUser} from '../lib/auth';
import Router from 'next/router';

class LoginForm extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        const {email, password} = this.state;
        event.preventDefault();

        loginUser(email, password)
            .then(() => {
                Router.push('/profile');
            });
    }

    render() {
        const {email, password} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div><input type="email"
                            name="email"
                            placeholder="E-mail"
                            onChange={this.handleChange}
                            value={email}
                /></div>
                <div><input type="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                            value={password}
                /></div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default LoginForm;