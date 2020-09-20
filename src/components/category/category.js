import React from 'react';
import './category.css'
import classnames from 'classnames';

function Category({question, openModal, answered}) {
    const classes = classnames('category', {answered: answered})

    function openQuestion() {
        if(answered) {
            return;
        }
        openModal(question.id);
    }
    return (
        <div className={classes} key={question.id} onClick={openQuestion}>
            <p className="categoryName">
                {question.category}
            </p>
        </div>
    )
    
}

export default Category;