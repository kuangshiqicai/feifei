import React, { Component } from "react"
import "../../common.css";
import logo from "../../../logo.svg";
export default class Agent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // contentTitle: ['aa', 'bb', 'cc', 'dd']
      contentTitle: [],
      contentTabTitle: [],
      contentRightPics: [],
      contentDetailArr: [],
      inputVal: '',
      numberArr: {'ALL': 11,'ALPHYSICALL': 22,'VIRTUAL': 33}
    }
  }
  componentDidMount() {
    this.setState({
      contentTitle: [{name:'building', number: 7}, {name:'building', number: 7}],
      contentTabTitle: ['All', 'Physical', 'Virtual'],
      contentRightPics: ['icon-th-card', 'icon-th-list'],
      contentDetailArr: [{name:'thoughtwork001thoughtwork001thoughtwork001', type: 'idle', url: '192.168.1.102', file: '/var/lib/curise-agent',show: false, tags: ['Firefox', 'Safari', 'Ubuntu', 'Chrome','Firefox', 'Safari', 'Ubuntu', 'Chrome','Firefox', 'Safari', 'Ubuntu', 'Chrome','Firefox', 'Safari', 'Ubuntu', 'Chrome','Firefox', 'Safari', 'Ubuntu', 'Chrome','Firefox', 'Safari', 'Ubuntu', 'Chrome','Firefox', 'Safari', 'Ubuntu', 'Chrome','Firefox', 'Safari', 'Ubuntu', 'Chrome']},{name:'thoughtwork002thoughtwork002thoughtwork002', type: 'building', url: '192.168.1.243', file: '/var/lib/curise-agent',show: false,  tags: ['Firefox', 'Safari', 'Ubuntu', 'Chrome']},{name:'thoughtwork003thoughtwork003thoughtwork003', type: 'idle', url: '192.168.1.103', file: '/var/lib/curise-agent',show: false,  tags: ['Firefox', 'Safari', 'Ubuntu', 'Chrome']},{name:'thoughtwork004thoughtwork004thoughtwork004', type: 'idle', url: '192.168.1.104', file: '/var/lib/curise-agent',show: false,  tags: ['Firefox', 'Safari', 'Chrome']},{name:'thoughtwork005thoughtwork005thoughtwork005', type: 'idle', url: '192.168.1.105', file: '/var/lib/curise-agent',show: false,  tags: ['Firefox', 'Chrome']},{name:'thoughtwork006thoughtwork006thoughtwork006', type: 'idle', url: '192.168.1.106', file: '/var/lib/curise-agent',show: false,  tags: ['Firefox', 'Safari', 'Ubuntu']},{name:'thoughtwork007thoughtwork007thoughtwork007', type: 'idle', url: '192.168.1.107', file: '/var/lib/curise-agent',show: false,  tags: ['Safari', 'Ubuntu', 'Chrome']},]
    })
  }
  onCancel = (item, index)=> {
    const listData = [...this.state.contentDetailArr];   //复制数组--浅拷贝

    this.setState({
      contentDetailArr: listData.map((val, idx) => idx === index ? {...val, show: !val.show} : val),                        
    },
    ()=>{console.log('onCancel', this.state.contentDetailArr)})
  }
  onOk = (item, index)=> {
    const {inputVal} = this.state;
    const arr = inputVal.trim().split(',');
    const listData = [...this.state.contentDetailArr];   //复制数组--浅拷贝
    if(arr.length>0) {
      this.setState({
        contentDetailArr: listData.map((val, idx) => idx === index ? {...val, show: !val.show, tags: [...val.tags, ...arr]} : val),
        inputVal: ''                  
    },()=>{
      console.log('onOk',  this.state.contentDetailArr)
    })
    }
    
  }
  onDel=(val, index)=>{
    const listData = [...this.state.contentDetailArr];   //复制数组--浅拷贝
    const newArr = listData.map(
      (value, idx)=> idx === index ? {...value, tags: value.tags.filter(
        x => x!= val
      )}: value
    )
    this.setState({
      contentDetailArr: newArr
    }, () => {
      console.log('onOk', this.state.contentDetailArr)
    })
    
  }
  InputChange = (e)=> {
    this.setState({
      inputVal: e.target.value
    })
  }
 renderModal = (item, index)=> {
    // console.log("came here")
    return(
      item.show ? <div className='modalWrapper'>
      
          <div className='modalTitle'>
            <input type="text" name="fname" placeholder="First name" defaultValue={this.state.inputVal} value={this.state.inputVal} onChange={(e)=>this.InputChange(e)}/>
          </div>
      <div className='modalFooter'>
        <button onClick={()=>this.onCancel}>取消</button>
        <button onClick={()=>this.onOk(item, index)}>确认</button>
      </div>
    </div> : null
    )
  }
  addTags= (item, index)=> {
    // const {inputVal} = this.state;
    // const arr = inputVal.split(',');
    const listData = [...this.state.contentDetailArr];   //复制数组--浅拷贝

    this.setState({
      contentDetailArr: listData.map((val, idx) => idx === index ? {...val, show: !val.show} : val),                        
    },
    ()=>{console.log('addTags', this.state.contentDetailArr)})
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
        <div className='contentStatus'>
          <div className='statusTop'>
              <div className='all'>ALL</div>
              <div className='physical'>ALPHYSICALL</div>
              <div className='virtual'>VIRTUAL</div>
          </div>
          <div className='statusBottom'>
              <div className='all'>{this.state.numberArr.ALL}</div>
              <div className='physical'>{this.state.numberArr.ALPHYSICALL}</div>
              <div className='virtual'>{this.state.numberArr.VIRTUAL}</div>
          </div>
        </div>
        
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
                      <i className={item}></i>
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
                              <div className='icon-plus' onClick={() => this.addTags(item, index)}></div>
                              {/* {
                                this.renderModal(item, index)
                                } */}
                            {item.show ? <div className='modalWrapper'>

                              <div className='modalTitle'>
                                <input type="text" name="fname" placeholder="First name" defaultValue={this.state.inputVal} value={this.state.inputVal} onChange={(e) => this.InputChange(e)} />
                              </div>
                              <div className='modalFooter'>
                                <button onClick={() => this.onCancel(item, index)}>取消</button>
                                <button onClick={() => this.onOk(item, index)}>确认</button>
                              </div>
                            </div> : null}
                            </div>
                            <div className="detailTagWarp">
                            {
                              item.tags.length > 0 &&  item.tags.map((val) => {
                                return (
                                  val?<span className='detailTag'>
                                    <span className='detailTagType'>{val}</span>
                                    <span className='icon-trash' onClick={() => this.onDel(val, index)}></span>
                                  </span> :null
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