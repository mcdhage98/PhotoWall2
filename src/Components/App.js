import Main from './Main';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {removePost} from '../Redux/actions'
import {withRouter} from 'react-router'
import * as actions from '../Redux/actions'


function mapStateToProps(state)
{
    return{
        posts:state
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators(actions,dispatch);
}

const App = withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));

export default App