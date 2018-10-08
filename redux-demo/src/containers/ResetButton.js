import {
  connect,
} from 'react-redux';
import {
  resetCounter,
} from '../store/actions';
import Button from '../components/Button';


function mapDispatchToProps(dispatch) {
  return {
    onClick: () => dispatch(resetCounter()),
  };
}

export default connect(null, mapDispatchToProps)(Button);
