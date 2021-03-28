// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #212121;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\na {\n  text-decoration: none;\n  font-size: 3em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\na span {\n  transition: ease-in-out 0.3s;\n}\na:hover span {\n  transform: scale(1.2);\n  font-weight: bold;\n}\n\n.link_1 {\n  color: #212121;\n  background-color: lightsalmon;\n}\n\n.link_2 {\n  color: lightsalmon;\n  background-color: #212121;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}