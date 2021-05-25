import React, { useEffect, useState } from 'react';
import './Modal.css';
import { createPortal } from 'react-dom';

const Modal = (props) => {
    const { children, visible, closeModal } = props;
    
    const [bodyOverflow, setBodyOverflow] = useState(false);

    useEffect(() => { // 在第一次渲染时取 body 原始的 overflow 值
        setBodyOverflow(window.getComputedStyle(document.body).overflow);
    }, [])

    useEffect(() => { // 根据 visible 来动态修改 body 的 overflow 值
        if (visible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = bodyOverflow;
        }
    }, [visible, bodyOverflow])

    function handleClick(event) {
        // 点击蒙层自己时关闭模态框，点击模态框的内容时不关闭
        if (event.target === event.currentTarget) {
            closeModal();
        }
    }

    const modal = createPortal(
        <div className="modal" onClick={handleClick}>
            {children}
        </div>,
        document.body
    );

    return <div>{visible && modal}</div>;
};

// export default React.memo(Modal);
export default Modal;