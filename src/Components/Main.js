import React,{Component} from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from "./AddPhoto";
import {Route, Link} from "react-router-dom"
import {removePost} from "../Redux/actions"
import Single from './Single'
import ReactDom from 'react-dom';



class Main extends Component{

    constructor()
    {
        super();
        
    }
    
    componentDidMount(){
        //this.props.removePost(1);
    }
    

    
    
    render()
    {
        console.log(this.props)
        return(
       
        
       <div>
            <h2>
            <Link to="/"> Photo Wall</Link>
            </h2>
            <Route exact path="/" render ={ () =>(
            <div>
               {/* <Title title={'PhotoWall'}></Title> */}
                <PhotoWall {...this.props}  />
               
             </div>
             
            )}/>
               
         <Route path="/AddPhoto" render ={ ({history}) => (
                <AddPhoto {...this.props} onHistory={history}/>
                    
            )}/>

            <Route path="/single" render={ () => (

                <Single/>
            )}/>
            
        
        
                
        </div>
        )
    }
    
}

export default Main;