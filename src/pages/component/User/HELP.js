import React, { useState } from 'react';
import './HELP.css';
import Modal from '../Modal/Modal3';

function HELP() {
    const [modalVisible, setModalVisible] = useState(false);
    const modalConfig = {
        visible: modalVisible,
        closeModal: () => {
            setModalVisible(false);
        }
    };
    
    const modalChildren = (
        <div className="dialog">
            <span onClick={() => setModalVisible(false)} className="closeBtn">x</span>
            <div>这是内容</div>
        </div>
    );
    
    return (
        <div className="App">
            <button onClick={() => setModalVisible(true)} className="openBtn">open modal</button>
            <Modal {...modalConfig}>{modalChildren}</Modal>
        </div>
    );
}

export default HELP;

// {/* <span className='icon-deny'></span>
//                                     <span className='icon-desktop'></span>
//                                     <span className='icon-boat'></span>
//                                     <span className='icon-folder'></span>
//                                     <span className='icon-info'></span>
//                                     <span className='icon-plus'></span>
//                                     <span className='icon-search'></span>
//                                     <span className='icon-th-card'></span>
//                                     <span className='icon-th-list'></span>
//                                     <span className='icon-close'></span>
//                                     <span className='icon-cog'></span> */}
                                    // <span className='icon-trash'></span>
                                    // {/* <span className='icon-sign-in'></span>
                                    // <span className='icon-navicon'></span>
                                    // <span className='icon-dashboard'></span>
                                    // <span className='icon-sitemap'></span>
                                    // <span className='icon-coffee'></span>
                                    // <span className='icon-angle-up'></span>
                                    // <span className='icon-angle-down'></span>
                                    // <span className='icon-life-bouy'></span>
                                    // <span className='icon-id-card'></span> */}