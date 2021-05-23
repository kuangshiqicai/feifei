import React, { Component } from "react"
import "../../common.css";
import logo from "../../../logo.svg";
export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // contentTitle: ['aa', 'bb', 'cc', 'dd']
      contentTitle: [],
      contentTabTitle: [],
      contentRightPics: [],
      contentDetailArr: [],
    }
  }
  componentDidMount() {
    this.setState({
      contentTitle: [{name:'building', number: 7}, {name:'building', number: 7}],
      contentTabTitle: ['All', 'Physical', 'Virtual'],
      contentRightPics: [logo, logo],
      contentDetailArr: [{name:'thoughtwork001thoughtwork001thoughtwork001', type: 'idle', url: '192.168.1.102', file: '/var/lib/curise-agent', tags: ['Firefox', 'Safari', 'Ubuntu', 'Chrome']},{name:'thoughtwork002thoughtwork002thoughtwork002', type: 'building', url: '192.168.1.243', file: '/var/lib/curise-agent', tags: ['Firefox', 'Safari', 'Ubuntu', 'Chrome']},{name:'thoughtwork003thoughtwork003thoughtwork003', type: 'idle', url: '192.168.1.103', file: '/var/lib/curise-agent', tags: ['Firefox', 'Safari', 'Ubuntu', 'Chrome']},{name:'thoughtwork004thoughtwork004thoughtwork004', type: 'idle', url: '192.168.1.104', file: '/var/lib/curise-agent', tags: ['Firefox', 'Safari', 'Chrome']},{name:'thoughtwork005thoughtwork005thoughtwork005', type: 'idle', url: '192.168.1.105', file: '/var/lib/curise-agent', tags: ['Firefox', 'Chrome']},{name:'thoughtwork006thoughtwork006thoughtwork006', type: 'idle', url: '192.168.1.106', file: '/var/lib/curise-agent', tags: ['Firefox', 'Safari', 'Ubuntu']},{name:'thoughtwork007thoughtwork007thoughtwork007', type: 'idle', url: '192.168.1.107', file: '/var/lib/curise-agent', tags: ['Safari', 'Ubuntu', 'Chrome']},]
    },()=>{
      console.log('2222',  this.state.contentTitle)
    })
  }
  render() {
    return <div className='content'>
      <div className='contentHeader'>
        {
          this.state.contentTitle.length>0 && this.state.contentTitle.map((item, index) => {
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
            this.state.contentTabTitle.length>0 && this.state.contentTabTitle.map((item, index) => {
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
              this.state.contentRightPics.length>0 && this.state.contentRightPics.map((item, index) => {
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
                this.state.contentDetailArr.length>0 && this.state.contentDetailArr.map((item, index) => {
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
                              <div className='icon-plus'></div>
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
}