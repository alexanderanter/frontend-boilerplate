import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { reduxForm, Form } from 'redux-form';
import FlexBox from '../../common/FlexBox';
import Spinner from '../../common/Spinner';

const propTypes = {
  fetchPing: PropTypes.func.isRequired,
  pingMessage: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
};

class SampleReducer extends Component {
  handleSubmit = e => {
    e.preventDefault();
    /* eslint-disable */
    this.props.fetchPing();
    /* eslint-enable */
  };

  render() {
    const { pingMessage, loading, error } = this.props;
    const message = error || pingMessage;

    return (
      <FlexBox align="center" justify="space-around">
        <p>Sample Reducer:</p>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit" variant="contained" color="primary">
            Ping!
          </Button>
        </Form>
        {!loading && <p>{message ? `Server responded with: ${message}` : `Click the button...`}</p>}
        {loading && <Spinner />}
      </FlexBox>
    );
  }
}

SampleReducer.propTypes = propTypes;

export default reduxForm({
  form: 'pingForm'
})(SampleReducer);
