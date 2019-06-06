import {loginUser} from '../lib/auth';
import Router from 'next/router';

class LoginForm extends React.Component {
    state = {
        email: '',
        password: '',
        error: '',
        isLoading: false
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        this.handleLogin();
        this.setState({error: ''});
        event.preventDefault();
    }

    async handleLogin() {
        try {
            const {email, password} = await this.state;
            await loginUser(email, password);
            await Router.push('/profile');
        } catch (error) {
            this.showError(error);
        }
    }

    showError = err => {
        console.log(err);
        const error = err.response && err.response.data || err.message;
        this.setState({error, isLoading: false});
    }

    render() {
        const {email, password, error, isLoading} = this.state;

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
                <button disabled={isLoading} type="submit">
                    {isLoading ? "Sending" :"Submit"}
                </button>
                <div>{error && <div>{error}</div>}</div>
            </form>
        )
    }
}

export default LoginForm;