const HTML_Editor = CodeMirror(document.getElementById("html_code"),{
  lineNumbers:true,
  tabSize:2,
  mode:"xml",
  theme:"dracula",
  styleActiveLine:true,
  matchBrackets:true,
  lineWrapping:true,
  smartIndent:true
});

const CSS_Editor = CodeMirror(document.getElementById("css_code"),{
  lineNumbers:true,
  tabSize:2,
  mode:"css",
  theme:"dracula",
  styleActiveLine:true,
  matchBrackets:true,
  lineWrapping:true,
  smartIndent:true
});
const JS_Editor = CodeMirror(document.getElementById("js_code"),{
  lineNumbers:true,
  tabSize:2,
  mode:"javascript",
  theme:"dracula",
  styleActiveLine:true,
  matchBrackets:true,
  lineWrapping:true,
  smartIndent:true
});

document.querySelector("#build_btn").addEventListener("click",function(){
  let htmlCode = HTML_Editor.getValue();
  let cssCode = "<style>"+ CSS_Editor.getValue() + "</style>";
  let jsCode = "<script>" + JS_Editor.getValue() + "</script>";
  let OutPutWindow = document.querySelector("#output_window").contentWindow.document;
  OutPutWindow.open();
  OutPutWindow.write(htmlCode+cssCode+jsCode);
  OutPutWindow.close();
});
