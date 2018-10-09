import {
  connect,
} from 'react-redux';
import Display from '../components/Display';


function mapStateToProps(state) {
  return {
    text: state.counter,
  };
}

export default connect(mapStateToProps, null)(Display);
