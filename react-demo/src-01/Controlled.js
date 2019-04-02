import React, { Component } from 'react'

export default class Controlled extends Component {
    constructor(){
        super();
        this.state = {
            inputValue:'hello',
            list:[1,2,3],
            isClick:false
        }
    }
    handleChange = (e)=>{
        this.setState({
            inputValue:e.target.value
        })
    }
    handleClick = ()=>{       
        // let li = this.state.list;
        // li.push(this.state.inputValue);
        // console.log(this.inp.value);
        this.setState({
            list:[...this.state.list,this.state.inputValue]
            // isClick:!this.state.isClick
        });
    }
    // componentDidMount = ()=>{
    //     this.inp.focus();
    //     // this.refs.a.focus();
    // }
    render() {
        let str = '<span>hello</span>';
        return (
        <div>
            <div dangerouslySetInnerHTML={{__html:str}}></div>
            <label htmlFor="inp">代办事项：</label>
            <input type="text" id="inp" value={this.state.inputValue} onChange={this.handleChange}/>
            <button onClick={this.handleClick} className='gray'>提交</button>
            <ul>
                {this.state.list.map((item,index)=>{
                    return <li dangerouslySetInnerHTML={{__html:item}}></li>
                })}
            </ul>
        </div>
        )
    }
    /*
    <input type="text" id="inp" ref="a" ref={(inp)=>{this.inp = inp}} defaultValue="he" value={this.state.inputValue} onChange={this.handleChange}/>
    <button ref="b" onClick={this.handleClick} className={this.state.isClick==true?'red':'gray'}>提交<tton>
    */
}