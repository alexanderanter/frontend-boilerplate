import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { reduxForm, Form } from 'redux-form';
import FlexBox from '../../common/FlexBox';

class SampleSocket extends Component {
  socketConnection = new WebSocket('ws://localhost:8080');

  state = {
    message: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    this.socketConnection.send(JSON.stringify({ type: 'sent', msg: 'ping' }));
    this.socketConnection.onmessage = event => this.setState({ message: event.data });
  };

  render() {
    const { message } = this.state;
    return (
      <FlexBox align="center" justify="space-around">
        <p>Sample Socket:</p>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit" variant="contained" color="primary">
            Ping Socket!
          </Button>
        </Form>
        <p>{message || 'Click the button...'}</p>
      </FlexBox>
    );
  }
}

export default reduxForm({
  form: 'pingForm'
})(SampleSocket);
