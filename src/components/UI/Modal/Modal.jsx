import React, { useContext } from 'react';

import cl from './Modal.module.css';
import { ModalInputTitle, NewPostData } from '../../../context';

const Modal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.modal]
    if(visible) rootClasses.push(cl.active)

    const [newPostData, setNewPostData] = useContext(NewPostData);

    const parseTitle = (currentText) => {
        setNewPostData({...newPostData, title: currentText})
      }
    
      const parseContent = (currentText) => {
        setNewPostData({...newPostData, content: currentText})
      }

    return (
        <div
            className={rootClasses.join(' ')}
            onClick={() => setVisible(false)}
        >
            <div
                className={cl.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
}

export default Modal;