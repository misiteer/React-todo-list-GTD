import React from 'react';
import PropTypes from 'prop-types';
import './css/todoItem.css'

// 列表条目
class TodoItem extends React.Component {
    handleClick = () => {
        // 通知父组件
        this.props.onDelete(this.props.index);
    };

    render() {
        return (
            <li className="todo-item">
                <span className="item-name">{this.props.val}</span>
                <span className="item-remove" onClick={this.handleClick}>X</span>
            </li>
        );
    }
}
// props数据类型检查
TodoItem.propTypes ={
    index: PropTypes.number.isRequired,
    val: PropTypes.string,
};

// 如果制定props未传入, 使用默认值
TodoItem.defaultProps ={
    val: "我是默认描述"
};

export default TodoItem;
