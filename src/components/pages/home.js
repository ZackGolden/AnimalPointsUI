import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

class Home extends Component {
    render() {
        return (
            <Container>
                <Alert variant='success'>Home</Alert>
            </Container>
        );
    }
}

export default Home;