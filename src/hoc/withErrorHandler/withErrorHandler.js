import React, { Component } from 'react';

import Message from '../../UI/Message/Message';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null
            };

            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });

            this.resInterceptor = axios.interceptors.response.use(res => {
                if (res.data.error) {
                    const errorMessage = {
                        message: res.data.error
                    };
                    this.setState({ error: errorMessage});
                }
                return res;
            }, (error) => {
                this.setState({ error: error });
            });
        };

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        };

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        };

        render() {
            return (
                <>
                    <Message show={this.state.error} backdropClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Message>
                    <WrappedComponent {...this.props} />
                </>
            );
        };
    }
};

export default withErrorHandler;