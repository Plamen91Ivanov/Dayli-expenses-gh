import React, { useState } from 'react';

const SearchAlgorithm = (props) => {
  const [isEditing, setIsEditing] = useState(false);
    
    const startEditingHandler = () => {
        setIsEditing(true);
      };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className='new-expense'>
        {!isEditing && (
          <button onClick={startEditingHandler}>Search</button>
        )}
        {isEditing && (
          <div>
             <button onClick={startEditingHandler}>Search</button>
            <h1>h1</h1>
          </div>           
        )}
      </div>
      );
}

export default SearchAlgorithm;