export const handleResponse = (response) => {
    if (response.ok) {
        return response.json();
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export const handleChange = (e) => {
    if (!!this.state.errors[e.target.name]) {
        let errors = Object.assign({}, this.state.errors);
        delete errors[e.target.name];
        this.setState({
            [e.target.name]: e.target.value,
            errors
        });
    } else {
        this.setState({ [e.target.name]: e.target.value });
    }
}
