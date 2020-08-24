import React from 'react';

class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooh ah what a shame, something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;