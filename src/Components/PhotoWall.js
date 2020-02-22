import React,{Component} from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


function PhotoWall(props){
    
    return (
        <div>
        {
        <Link className="add-icon"  to = "/AddPhoto"></Link>
       }
        <div className="photo-grid">{props.posts.sort( function(x,y) 
            {
            return y.id-x.id;
        }).map((post,index) => <Photo key={post.id} index={index} {...props}post={post} />)}
         </div>
         </div>
    );  
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