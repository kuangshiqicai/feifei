import React, { Component } from 'react'
class Test extends React.Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       outside: false,
    //     }
    //   }
//   componentDidMount(){
//     document.body.addEventListener('click', function() {
// 		outside=true
// 	},true)
// 	document.body.addEventListener('click', function() {
// 		if(outside){
// 			alertBox.style.display = 'none'
// 		}
// 	})
//   }
  
render(){
    document.addEventListener('click',function () {
        alert('body')
    },false)
    return(
        <div>Trade
            <div onClick={()=>{alert('外层')}}>
                <div onClick={(e)=>{e.stopPropagation();e.nativeEvent.stopImmediatePropagation();alert('内层')}}>
                    点击冒泡测试
                </div>
 
            </div>
        </div>
    )
}
}
export default Test