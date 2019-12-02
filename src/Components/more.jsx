import React from 'react';

const More = (props) => {
console.log(props);
    return(

        <div>
            
            
                
                {props.children}   
                <div className="row">        
                <div className="col-md-12">
                
                    <button type="button" class="btn btn-outline-primary" style={{margin:"20px"}}>READ MORE</button>
                    <button type="button" class="btn btn-outline-primary">VIEW MORE</button>
            
                </div>

            </div>
        </div>

    )
}
export default More;