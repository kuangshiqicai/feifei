import React, { useState, useEffect } from "react"
import "../../common.css";
import logo from "../../../logo.svg";
import Modal from '../Modal/Modal3';
// export default class UserList extends Component {
  function UserList() {
    const [modalVisible, setModalVisible] = useState(false);
    const [contentTitle, setContentTitle] = useState([]);
    const [contentTabTitle, setContentTabTitle] = useState([]);
    const [contentRightPics, setContentRightPics] = useState([]);
    const [contentDetailArr, setContentDetailArr] = useState([]);
    
    const modalConfig = {
        visible: modalVisible,
        closeModal: () => {
            setModalVisible(false);
        }
    };
    const modalOk = (item, index) => {
      console.log('item', item);
      console.log('index', index);
    }
    const modalChildren = (item, index) => {
      return (
        <div className="dialog">
            {/* <span onClick={() => setModalVisible(false)} className="closeBtn">x</span>
            <div>这是内容</div> */}
            <div className='modalWrapper'>
        
            <div className='modalTitle'>
              <input type="text" name="fname" placeholder="First name" className=''/>
            </div>
          
        {/* {this.props.children} */}
        <div className='modalFooter'>
          <button onClick={() => setModalVisible(false)}>取消</button>
          {/* <button onClick={() => setModalVisible(false)}>确认</button> */}
          <button onClick={() => modalOk(item, index)}>确认</button>
        </div>
      </div>
        </div>
    )}
    
    useEffect(() => { // 在第一次渲染时取 body 原始的 overflow 值
      setContentTitle([{name:'building', number: 7}, {name:'building', number: 7}]);
      setContentTabTitle(['All', 'Physical', 'Virtual']);
      setContentRightPics([logo, logo]);
      setContentDetailArr([{name:'thoughtwork001thoughtwork001thoughtwork001', type: 'idle', url: '192.168.1.102', file: '/var/lib/curise-agent',show: false, tags: ['Firefox', 'Safari', 'Ubuntu', 'Chrome']},{name:'thoughtwork002thoughtwork002thoughtwork002', type: 'building', url: '192.168.1.243', file: '/var/lib/curise-agent',show: false,  tags: ['Firefox', 'Safari', 'Ubuntu', 'Chrome']},{name:'thoughtwork003thoughtwork003thoughtwork003', type: 'idle', url: '192.168.1.103', file: '/var/lib/curise-agent',show: false,  tags: ['Firefox', 'Safari', 'Ubuntu', 'Chrome']},{name:'thoughtwork004thoughtwork004thoughtwork004', type: 'idle', url: '192.168.1.104', file: '/var/lib/curise-agent',show: false,  tags: ['Firefox', 'Safari', 'Chrome']},{name:'thoughtwork005thoughtwork005thoughtwork005', type: 'idle', url: '192.168.1.105', file: '/var/lib/curise-agent',show: false,  tags: ['Firefox', 'Chrome']},{name:'thoughtwork006thoughtwork006thoughtwork006', type: 'idle', url: '192.168.1.106', file: '/var/lib/curise-agent',show: false,  tags: ['Firefox', 'Safari', 'Ubuntu']},{name:'thoughtwork007thoughtwork007thoughtwork007', type: 'idle', url: '192.168.1.107', file: '/var/lib/curise-agent',show: false,  tags: ['Safari', 'Ubuntu', 'Chrome']},])
  }, [])




  // render() {
    return <div className='content'>
      <div className='contentHeader'>
        {
          contentTitle.length>0 && contentTitle.map((item, index) => {
            return (<div className='contentblock'>
                <div className='contentName'>{item.name}</div>
                <div className='contentNo'>{item.number}</div>
              </div>)
          })
        }
        
      </div>
      <div className='contenTab'>
        <div className='contenTabLeft'>
          {
            contentTabTitle.length>0 && contentTabTitle.map((item, index) => {
              return (
                  <div className='contentTabItem'>{item}</div>
                )
            })
          }
        </div>
        <div className='contenTabMid'>
          <input type="text" name="fname" placeholder="First name" className='contenTabMidInput'/>
        </div>
        <div className='contenTabRight'>
          {
              contentRightPics.length>0 && contentRightPics.map((item, index) => {
                return (
                    <div className='contenTabRightItem'>
                      {/* <img src={item} className='logo' alt='logo'></img> */}
                    </div>
                  )
              })
            }
        </div>
      </div>
      <div className='contentDetail'>
        {
                contentDetailArr.length>0 && contentDetailArr.map((item, index) => {
                  return (
                    <div className='contentDetailItem'>
                      <div className="detailIcon">
                        {/* <img src={logo}  className='detailIconImg' alt='logo'/> */}
                        <i className='icon-id-card'></i> 
                      </div>
                      <div className="detailContent">
                        <div className="detailContentUp">
                          <div className="detailName">{item.name}</div>
                          <div className="detailType">{item.type}</div>
                          <div className="detailUrl">{item.url}</div>
                          <div className="detailFile">{item.file}</div>
                        </div>
                          
                          <div className="detailTagarr">
                            <div className='detailTagAdd'>
                              {/* <div className='icon-plus'></div> */}
                              <button onClick={() => setModalVisible(true)} className="openBtn icon-plus"></button>
                              <Modal {...modalConfig}>{modalChildren(item, index)}</Modal>
                            </div>
                            <div className="detailTagWarp">
                            {
                              item.tags.length > 0 &&  item.tags.map((val, index) => {
                                return (
                                  <span className='detailTag'>
                                    <span className='detailTagType'>{val}</span>
                                    {/* <span className='icon-deny'></span>
                                    <span className='icon-desktop'></span>
                                    <span className='icon-boat'></span>
                                    <span className='icon-folder'></span>
                                    <span className='icon-info'></span>
                                    <span className='icon-plus'></span>
                                    <span className='icon-search'></span>
                                    <span className='icon-th-card'></span>
                                    <span className='icon-th-list'></span>
                                    <span className='icon-close'></span>
                                    <span className='icon-cog'></span> */}
                                    <span className='icon-trash'></span>
                                    {/* <span className='icon-sign-in'></span>
                                    <span className='icon-navicon'></span>
                                    <span className='icon-dashboard'></span>
                                    <span className='icon-sitemap'></span>
                                    <span className='icon-coffee'></span>
                                    <span className='icon-angle-up'></span>
                                    <span className='icon-angle-down'></span>
                                    <span className='icon-life-bouy'></span>
                                    <span className='icon-id-card'></span> */}
                                  </span>
                                )
                              })
                            }
                            </div>
                            <div className="detailDeny">
                              {/* <img className='detailDenyImg' alt='logo' src={logo} /> */}
                              <i className='icon-deny'></i>
                              <span className='detailDenyImg'>Deny</span>
                            </div>
                          </div>
                      </div>
                    </div>
                    )
                })
              }
        
      </div>
    </div>
  }

  export default UserList;
