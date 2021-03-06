import React, { Component } from 'react';
import FormContainer from './containers/FormContainer';
import { Row,Col } from 'react-materialize'

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <Row>
      <Col s={12}>
        <FormContainer/>
      </Col>
      </Row> 
    );
  }
}

export default App;