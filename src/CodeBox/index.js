import React, { Component } from 'react';
import 'codemirror/lib/codemirror.css';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/xml/xml';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/theme/monokai.css'
import './CodeBox.css';


class CodeBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      code: '//code'
    }
    this.updateCode = this.updateCode.bind(this);

  }
  
  componentDidMount() {
    this.refs.editor.getCodeMirror().refresh(); 
  }

  updateCode(newCode) {
    this.setState({
      code: newCode
    });

  }

  render() {

    
    var options = {
      lineNumbers: true,
      mode: this.props.mode,
      theme:'monokai'
    };

    return (
      <div className="code-box">
        <CodeMirror ref="editor" value={this.state.code} onChange={this.updateCode} options={options} />
      </div>
    );
  }
}

export default CodeBox;
