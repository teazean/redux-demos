import {
  connect,
} from 'react-redux';
import {
  asyncResetCounter,
} from '../store/actions';
import Button from '../components/Button';


function mapDispatchToProps(dispatch) {
  return {
    onClick: () => dispatch(asyncResetCounter()),
  };
}

export default connect(null, mapDispatchToProps)(Button);
