const createTag = ({
  tagName = "div",
  clsName: className,
  idName,
  text,
  attrs,
  evt,
}) => {
  const node = document.createElement(tagName);

  if (text !== undefined) {
    const nodeText = document.createTextNode(text);
    node.appendChild(nodeText);
  }

  if (className !== undefined) {
    className.forEach((cls) => {
      node.classList.add(cls);
    });
  }

  if (idName !== undefined) {
    node.id = idName;
  }

  if (attrs !== undefined) {
    attrs.forEach(({ name, value }) => {
      node.setAttribute(name, value);
    });
  }

  if (evt !== undefined) {
    const { type, cb } = evt;
    node.addEventListener(type, cb);
  }

  return node;
};

export const createInterface = (handleGame) => {
  const wrapper = createTag({ tagName: "div", clsName: ["wrapper"] });
  document.body.appendChild(wrapper);

  const h1 = createTag({ tagName: "h1", text: "Lotto & Mini Lotto" });
  wrapper.appendChild(h1);

  const label = createTag({
    tagName: "label",
    attrs: [{ name: "for", value: "number" }],
    text: "Aby zagrać w Lotto podaj 6 liczb od 1 do 49. W Mini Lotto wystarczy podać 5 liczb z przedziału 1 - 42. Powodzenia!",
  });
  wrapper.appendChild(label);

  const inputContainer = createTag({
    tagName: "div",
    clsName: ["wrapper__container"],
  });
  wrapper.appendChild(inputContainer);

  for (let i = 0; i < 6; i++) {
    const input = createTag({
      tagName: "input",
      attrs: [
        { name: "type", value: "text" },
        { name: "name", value: "number" },
        { name: "min", value: "1" },
        { name: "max", value: "49" },
      ],
      clsName: ["user_digit"],
    });
    inputContainer.appendChild(input);
  }

  const button = createTag({
    tagName: "button",
    attrs: [{ name: "type", value: "button" }],
    clsName: ["play-btn"],
    idName: "playBtn",
    text: "Zagraj",
    evt: {
      type: "click",
      cb: () => handleGame(),
    },
  });
  wrapper.appendChild(button);

  const drawnNumbers = createTag({
    tagName: "span",
    idName: "drawnNumbers",
    text: "",
  });
  wrapper.appendChild(drawnNumbers);

  const result = createTag({
    tagName: "span",
    idName: "result",
    text: "Żeby wygrać trzeba grać!",
  });
  wrapper.appendChild(result);
};
