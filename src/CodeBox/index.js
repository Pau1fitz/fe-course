import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/xml/xml';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/theme/monokai.css'
import './CodeBox.css';
import $ from 'jquery';

class CodeBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: this.props.mode
    }
    this.updateCode = this.updateCode.bind(this);
    this.loadCSS = this.loadCSS.bind(this);
    this.loadJS = this.loadJS.bind(this);
    this.runJS = this.runJS.bind(this);
  }

  componentDidMount() {
    this.refs.editor.getCodeMirror().refresh(); 
    this.loadCSS();
    this.loadHTML();
  }

  loadCSS() {
    let $head = $("#preview").contents().find("head");  
    $head.html("<style>" + this.props.cssContent + "</style>");
  }

  loadJS() {
      let scriptTag = "<script>"+ this.props.jsContent + "<";
      scriptTag +=  "/script>";
      let previewFrame = document.getElementById('preview');
      let preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
      preview.open();
      preview.write(this.props.htmlContent + scriptTag)
      preview.close();

      this.loadCSS();
  }

  loadHTML() {

    console.log(this.props)
      let previewFrame = document.getElementById('preview'); 
      var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
      preview.open();
      preview.write(this.props.code);
      preview.close();
  }

  runJS() {
    this.loadJS();
  }

  updateCode(newCode) {
    //update html
    if(this.props.mode === 'text/html') {
      this.props.updateHTML(newCode);
      this.loadHTML();
    }

    //update css
    if(this.props.mode === 'css') {
      this.props.updateCSS(newCode);
      this.loadCSS();
    }

    //update js
    if(this.props.mode === 'javascript') {
      this.props.updateJS(newCode);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
    this.loadCSS();
    this.loadHTML();
  }

  render() {

    let options = {
      lineNumbers: true,
      mode: this.props.mode,
      theme:'monokai'
    };

    return (
      <div className="code-box">
        <p onClick={ this.runJS }>RUN JAVASCRIPT</p>
        <CodeMirror ref="editor" value={this.props.code} onChange={ this.updateCode } options={options} />
      </div>
    );
  }
}

export default CodeBox;
