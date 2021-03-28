// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #212121;\n}\n\n.galery {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-column-gap: 0.5em;\n  grid-row-gap: 0.5em;\n  justify-content: center;\n  align-items: center;\n}\n.galery img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 4px;\n}\n.galery img:hover {\n  border: 0.2em lightsalmon solid;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}