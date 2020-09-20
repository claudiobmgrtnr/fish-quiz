import React from 'react';
import './category.css'
function Category({question, openModal}) {
 
    return (
        <div className="category" key={question.id} onClick={() => openModal(question.id)}>
            <p className="categoryName">
                {question.category}
            </p>
        </div>
    )
    
}

export default Category;