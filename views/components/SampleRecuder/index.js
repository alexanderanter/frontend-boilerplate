import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { reduxForm, Form } from 'redux-form';
import FlexBox from '../../common/FlexBox';

const propTypes = {
  fetchPing: PropTypes.func.isRequired,
  pingMessage: PropTypes.string.isRequired
};

class SampleReducer extends Component {
  handleSubmit = e => {
    e.preventDefault();
    /* eslint-disable */
    this.props.fetchPing();
    /* eslint-enable */
  };

  render() {
    const { pingMessage } = this.props;

    return (
      <FlexBox align="center" justify="space-around">
        <p>Sample Reducer:</p>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit" variant="contained" color="primary">
            Ping!
          </Button>
        </Form>
        <p>
          {pingMessage ? `Server responded with: ${pingMessage}` : `Waiting for server response...`}
        </p>
      </FlexBox>
    );
  }
}

SampleReducer.propTypes = propTypes;

export default reduxForm({
  form: 'pingForm'
})(SampleReducer);
