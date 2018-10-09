import {
  connect,
} from 'react-redux';
import {
  asyncAddCounter,
} from '../store/actions';
import Button from '../components/Button';


function mapDispatchToProps(dispatch) {
  return {
    onClick: () => {
      dispatch(asyncAddCounter(1))
    },
  };
}

export default connect(null, mapDispatchToProps)(Button);
