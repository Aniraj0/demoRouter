import React from 'react';
import { useParams } from 'react-router-dom';


function Topics() {

    let { topicId } = useParams();
    console.log("hello",topicId);
  
    return (
      <div>
        <h3>{topicId}</h3>
      </div>
    );
  }

export default Topics;