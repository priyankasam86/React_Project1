import React from 'react';
import Faker from 'faker';

const Userdetails = (props) => {
    
    let {imgUrl, username, profile} = props;    
    return(

        <div>
           
                <div className="col-md-4">
                    <img alt="username" src={imgUrl} className="rounded-circle" />

                    <div className="col-md-6">
                        <button type="button" className="btn btn-info btn-md">{username}</button>
                    </div>

                    <div className="col-md-6">
                        <h5>{profile}</h5>
                    </div>
                </div>
                
        </div>
    )
}

export default Userdetails;