import { connect } from 'react-redux';
import { changeLabel } from '../Home/homeActions';
import Home from './Home';

function mapStateToProps(state) {
    return {
        label: state.home.label
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeLabel(label) {
            dispatch(changeLabel(label));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
