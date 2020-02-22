import React,{component, Component} from 'react';

class AddPhoto extends Component
{
    constructor()
    {
        super();
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event)
    {
        event.preventDefault(); //prevents re-rendering of page when button is pressed
        const imageLink = event.target.elements.link.value;
        const imageDescription =event.target.elements.description.value;
        const post={
            id:Number(new Date()),
            description:imageDescription,
            imageLink:imageLink
            
        }
        if(imageLink && imageDescription)
        {
            this.props.onAddPhoto(post);
        }
    }


    render()
    {
        return(
            <div>
            <h2>add a photo</h2>
                <div className="form">
                     <form onSubmit={this.handleSubmit}>
                     <input type="text" placeholder="link" name="link"></input>
                     <input type="text" placeholder="description" name="description"></input>
                     <button>Post</button>
                     </form>
                </div>
            </div>
        );

    }

}

export default AddPhoto;