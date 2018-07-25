import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        return(
            <div>
                <h2>GTD记事本</h2>
                <p>明日复明日, 明日何其多</p>
                <ul>
                    <li>
                        <span>烫头</span><span>X</span>
                    </li>
                    <li>
                        <span>抽烟</span><span>X</span>
                    </li>
                    <li>
                        <span>喝酒</span><span>X</span>
                    </li>
                </ul>
                <input type="text"/><button>添加</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
