import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

class home extends Component {
    render() {
        return (
            <Container>
                <Alert variant='success'>Hello World!</Alert>
            </Container>
        );
    }
}

export default home;