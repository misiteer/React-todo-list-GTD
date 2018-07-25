import React from "react";
import './css/addItem.css'

class AddItem extends React.Component {

    handleAdd = (e)=>{
        e.preventDefault(); // 阻止默认事件

        // 从input 拿到用户输入的内容, 传出去
        console.log(this.inputNode.value);

        this.props.onInputChange(this.inputNode.value);

        this.inputNode.value = ''
    };

    render(){
        return(
            <form className='add-item' onSubmit={this.handleAdd}>
                {/*通过ref获取input节点的引用*/}
                <input type="text" required ref={(input) => this.inputNode = input}/>
                <input type="submit" value="添加"/>
            </form>
        )
    }
}

export default AddItem;