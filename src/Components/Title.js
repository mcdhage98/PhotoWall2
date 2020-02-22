import React,{Component} from 'react';
import ReactDom from 'react-dom';
class Title extends Component{
    render()
    {
        return(<h2>{this.props.title}</h2>);
    }

}

export default Title;