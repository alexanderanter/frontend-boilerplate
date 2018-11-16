import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { reduxForm, Form } from 'redux-form';
import { Spinner, FlexBox } from 'blockscope-ui';

const propTypes = {
  pingMessage: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

const defaultProps = {
  error: ''
};

const SampleReducer = ({ pingMessage, handleSubmit, loading, error }) => {
  const message = error || pingMessage;

  return (
    <FlexBox align="center" justify="space-around">
      <p>Sample Reducer:</p>
      <Form onSubmit={handleSubmit}>
        <Button type="submit" variant="contained" color="primary">
          Ping!
        </Button>
      </Form>
      {!loading && <p>{message ? `Server responded with: ${message}` : `Click the button...`}</p>}
      {loading && <Spinner />}
    </FlexBox>
  );
};

SampleReducer.propTypes = propTypes;
SampleReducer.defaultProps = defaultProps;

export default reduxForm({
  form: 'pingForm'
})(SampleReducer);
