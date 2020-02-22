import React,{Component} from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


function PhotoWall(props){
    console.log(props);
    return (
        <div>
        {
        //<a className="add-icon" onClick={props.onNavigate} href="#AddPhoto">Click me</a>
        // <button className="add-icon" onClick={props.onNavigate}>+</button>}

        <Link className="add-icon"  to = "/AddPhoto"></Link>
       }
        <div className="photo-grid">{props.posts.sort( function(x,y) 
            {
            return y.id-x.id;
        }).map((post,index) => <Photo key={post.id} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
         </div>
         </div>
    );  
}


PhotoWall.propTypes ={
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
} 


/*
class PhotoWall extends Component{
    render()
    {
        return (
            <div className="photo-grid">{this.props.posts.map((post,index) => <Photo key={index} post={post}/>)}
             </div>
        );
    }

}
*/



export default PhotoWall