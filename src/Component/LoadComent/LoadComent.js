import React from 'react';
import dateFormat from 'dateformat'

const LoadComent = (props) => {
        
    return (
        props.comments.map(comment=>{
           return (
               <div key={comment.id}>
                   <h5>{comment.author}</h5>
                   <p>{comment.comment}</p>
                   <p>Rating: {comment.rating} </p>
                   <p>{comment.date}</p>
               </div>
           ) 
        })
       
      
    );
};

export default LoadComent;