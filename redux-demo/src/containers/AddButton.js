import {
  connect,
} from 'react-redux';
import {
  addCounter,
} from '../store/actions';
import Button from '../components/Button';


function mapDispatchToProps(dispatch) {
  return {
    onClick: () => {
      dispatch(addCounter(1))
    },
  };
}

export default connect(null, mapDispatchToProps)(Button);
