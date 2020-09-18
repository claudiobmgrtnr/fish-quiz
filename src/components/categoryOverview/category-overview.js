import React from 'react';
import './category-overview.css';
import Category from '../category/category.js';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function CategoryOverview({questions}) {

    const [modalIsOpen,setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    return(
        <div className="categoryOverview">
            <h1 className="title">
                En rechte Palaari binenand haa
                <span className="subTitle">The Game</span>
            </h1>
            <div className="categories">
                {questions.map(question => <Category openModal={openModal} name={question.category}/>)}
            </div>
            <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Question"
        >
            Yo, hier wird mal die Frage stehen.
          <button onClick={closeModal}>close</button>
        </Modal>
        </div>
    )
}

export default CategoryOverview;