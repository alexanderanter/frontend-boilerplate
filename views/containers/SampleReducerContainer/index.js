import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SampleReducer from '../../components/SampleReducer';
import { getPingRequest } from '../../../state/ping/actions';
import { getPingMessage, pingHasError, pingIsLoading } from '../../../state/ping/selectors';

const propTypes = {
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  pingMessage: PropTypes.string.isRequired
};
class SampleReducerContainer extends Component {
  handleSubmit = e => {
    e.preventDefault();
    /* eslint-disable */
    this.props.fetchPing();
    /* eslint-enable */
  };

  render() {
    const { error, loading, pingMessage } = this.props;
    return (
      <SampleReducer
        error={error}
        loading={loading}
        pingMessage={pingMessage}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

SampleReducerContainer.propTypes = propTypes;

const mapDispatchToProps = dispatch => ({
  fetchPing: () => dispatch(getPingRequest())
});

const mapStateToProps = state => ({
  error: pingHasError(state),
  loading: pingIsLoading(state),
  pingMessage: getPingMessage(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleReducerContainer);
