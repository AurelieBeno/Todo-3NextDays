import React, { useState, useEffect } from "react";
import Modal from "../Modal.js";

function DisplayToday(props) {
  const [isOpen, setIsOpen] = useState(false);

  function removeThis(e) {
    props.deleteItem(e, "Today");
  }
  function toggleModal() {
    setIsOpen(true);
  }

  return (
    <div className='column__list '>
      <div className='column__item'>
        <div className='column__title--wrapper'>
          <h2>Today</h2>
        </div>
        {props.items.map((item, index) => {
          return (
            <ul
              key={index}
              className='card__list'
              onClick={toggleModal}
            >
              <li className='card__item'>
                <div className='card__title'>
                  &nbsp;{item} &nbsp;
                </div>
                <div
                  className='minus deleteItem'
                  onClick={() => removeThis(index)}
                >
                  <i className='fas fa-times' />
                </div>
              </li>
              <Modal show={isOpen} onClose={toggleModal}>
                Here's some content for the modal
                {props.items}
              </Modal>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayToday;
