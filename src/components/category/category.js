import React from 'react';
import slug from 'slug'
import './category.css'
function Category({name, openModal}) {

    const key = slug(name);
    
    return (
        <div className="category" key={key} onClick={openModal}>
            <p className="categoryName">
                {name}
            </p>
        </div>
    )
    
}

export default Category;