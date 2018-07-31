import { connect } from 'react-redux';

import SampleReducer from '../../components/SampleReducer';
import { getPingRequest } from '../../../state/ping/actions';
import { getPingMessage, pingHasError, pingIsLoading } from '../../../state/ping/selectors';

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
)(SampleReducer);
