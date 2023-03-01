"use strict";

const Keyboard = {
  row1: [
    {
      keyCode: "192",
      name: "Backquote",
      simbols: ["ё", "Ё", "`", "~"],
      class: "key",
    },
    {
      keyCode: "49",
      name: "Digit1",
      simbols: ["1", "!", "1", "!"],
      class: "key",
    },
    {
      keyCode: "50",
      name: "Digit2",
      simbols: ["2", '"', "2", "@"],
      class: "key",
    },
    {
      keyCode: "51",
      name: "Digit3",
      simbols: ["3", "№", "3", "#"],
      class: "key",
    },
    {
      keyCode: "52",
      name: "Digit4",
      simbols: ["4", ";", "4", "$"],
      class: "key",
    },
    {
      keyCode: "53",
      name: "Digit5",
      simbols: ["5", "%", "5", "%"],
      class: "key",
    },
    {
      keyCode: "54",
      name: "Digit6",
      simbols: ["6", ":", "6", "^"],
      class: "key",
    },
    {
      keyCode: "55",
      name: "Digit7",
      simbols: ["7", "?", "7", "&"],
      class: "key",
    },
    {
      keyCode: "56",
      name: "Digit8",
      simbols: ["8", "*", "8", "*"],
      class: "key",
    },
    {
      keyCode: "57",
      name: "Digit9",
      simbols: ["9", "(", "9", "("],
      class: "key",
    },
    {
      keyCode: "48",
      name: "Digit0",
      simbols: ["0", ")", "0", ")"],
      class: "key",
    },
    {
      keyCode: "189",
      name: "Minus",
      simbols: ["-", "_", "-", "_"],
      class: "key",
    },
    {
      keyCode: "187",
      name: "Equal",
      simbols: ["=", "+", "=", "+"],
      class: "key",
    },
    {
      keyCode: "8",
      name: "Backspace",
      simbols: ["Backspace", "Backspace", "Backspace", "Backspace"],
      class: "key backspace",
    },
  ],
  row2: [
    {
      keyCode: "9",
      name: "Tab",
      simbols: ["Tab", "Tab", "Tab", "Tab"],
      class: "key tab",
    },
    {
      keyCode: "81",
      name: "KeyQ",
      simbols: ["й", "Й", "q", "Q"],
      class: "key",
    },
    {
      keyCode: "87",
      name: "KeyW",
      simbols: ["ц", "Ц", "w", "W"],
      class: "key",
    },
    {
      keyCode: "69",
      name: "KeyE",
      simbols: ["у", "У", "e", "E"],
      class: "key",
    },
    {
      keyCode: "82",
      name: "KeyR",
      simbols: ["к", "К", "r", "R"],
      class: "key",
    },
    {
      keyCode: "84",
      name: "KeyT",
      simbols: ["е", "Е", "t", "T"],
      class: "key",
    },
    {
      keyCode: "89",
      name: "KeyY",
      simbols: ["н", "Н", "y", "Y"],
      class: "key",
    },
    {
      keyCode: "85",
      name: "KeyU",
      simbols: ["г", "Г", "u", "U"],
      class: "key",
    },
    {
      keyCode: "73",
      name: "KeyI",
      simbols: ["ш", "Ш", "i", "I"],
      class: "key",
    },
    {
      keyCode: "79",
      name: "KeyO",
      simbols: ["щ", "Щ", "o", "O"],
      class: "key",
    },
    {
      keyCode: "80",
      name: "KeyP",
      simbols: ["з", "З", "p", "P"],
      class: "key",
    },
    {
      keyCode: "219",
      name: "BracketLeft",
      simbols: ["х", "Х", "[", "{"],
      class: "key",
    },
    {
      keyCode: "221",
      name: "BracketRight",
      simbols: ["ъ", "Ъ", "]", "}"],
      class: "key",
    },
    {
      keyCode: "220",
      name: "Backslash",
      simbols: ["\\", "/", "\\", "|"],
      class: "key",
    },
    {
      keyCode: "46",
      name: "Delete",
      simbols: ["DEL", "DEL", "DEL", "DEL"],
      class: "key del",
    },
  ],
  row3: [
    {
      keyCode: "20",
      name: "CapsLock",
      simbols: ["CapsLock", "CapsLock", "CapsLock", "CapsLock"],
      class: "key capslock",
    },
    {
      keyCode: "65",
      name: "KeyA",
      simbols: ["ф", "Ф", "a", "A"],
      class: "key",
    },
    {
      keyCode: "83",
      name: "KeyS",
      simbols: ["ы", "Ы", "s", "S"],
      class: "key",
    },
    {
      keyCode: "68",
      name: "KeyD",
      simbols: ["в", "В", "d", "D"],
      class: "key",
    },
    {
      keyCode: "70",
      name: "KeyF",
      simbols: ["а", "А", "f", "F"],
      class: "key",
    },
    {
      keyCode: "71",
      name: "KeyG",
      simbols: ["п", "П", "g", "G"],
      class: "key",
    },
    {
      keyCode: "72",
      name: "KeyH",
      simbols: ["р", "Р", "h", "H"],
      class: "key",
    },
    {
      keyCode: "74",
      name: "KeyJ",
      simbols: ["о", "О", "j", "J"],
      class: "key",
    },
    {
      keyCode: "75",
      name: "KeyK",
      simbols: ["л", "Л", "k", "K"],
      class: "key",
    },
    {
      keyCode: "76",
      name: "KeyL",
      simbols: ["д", "Д", "l", "L"],
      class: "key",
    },
    {
      keyCode: "186",
      name: "Semicolon",
      simbols: ["ж", "Ж", ";", ":"],
      class: "key",
    },
    {
      keyCode: "222",
      name: "Quote",
      simbols: ["э", "Э", "'", '"'],
      class: "key",
    },
    {
      keyCode: "13",
      name: "Enter",
      simbols: ["ENTER", "ENTER", "ENTER", "ENTER"],
      class: "key enter",
    },
  ],
  row4: [
    {
      keyCode: "16",
      name: "ShiftLeft",
      simbols: ["Shift", "Shift", "Shift", "Shift"],
      class: "key shift",
    },
    {
      keyCode: "90",
      name: "KeyZ",
      simbols: ["я", "Я", "z", "Z"],
      class: "key",
    },
    {
      keyCode: "88",
      name: "KeyX",
      simbols: ["ч", "Ч", "x", "X"],
      class: "key",
    },
    {
      keyCode: "67",
      name: "KeyC",
      simbols: ["с", "С", "c", "C"],
      class: "key",
    },
    {
      keyCode: "86",
      name: "KeyV",
      simbols: ["м", "М", "v", "V"],
      class: "key",
    },
    {
      keyCode: "66",
      name: "KeyB",
      simbols: ["и", "И", "b", "B"],
      class: "key",
    },
    {
      keyCode: "78",
      name: "KeyN",
      simbols: ["т", "Т", "n", "N"],
      class: "key",
    },
    {
      keyCode: "77",
      name: "KeyM",
      simbols: ["ь", "Ь", "m", "M"],
      class: "key",
    },
    {
      keyCode: "188",
      name: "Comma",
      simbols: ["б", "Б", ",", "<"],
      class: "key",
    },
    {
      keyCode: "190",
      name: "Period",
      simbols: ["ю", "Ю", ".", ">"],
      class: "key",
    },
    {
      keyCode: "191",
      name: "Slash",
      simbols: [".", ",", "/", "?"],
      class: "key",
    },
    {
      keyCode: "38",
      name: "ArrowUp",
      simbols: ["▲", "▲", "▲", "▲"],
      class: "key arrow",
    },
    {
      keyCode: "16",
      name: "ShiftRight",
      simbols: ["Shift", "Shift", "Shift", "Shift"],
      class: "key shift-right",
    },
  ],
  row5: [
    {
      keyCode: "17",
      name: "ControlLeft",
      simbols: ["Ctrl", "Ctrl", "Ctrl", "Ctrl"],
      class: "key ctrl",
    },
    {
      keyCode: "91",
      name: "MetaLeft",
      simbols: ["Win", "Win", "Win", "Win"],
      class: "key win",
    },
    {
      keyCode: "18",
      name: "AltLeft",
      simbols: ["Alt", "Alt", "Alt", "Alt"],
      class: "key alt",
    },
    {
      keyCode: "32",
      name: "Space",
      simbols: [" ", " ", " ", " "],
      class: "key space",
    },
    {
      keyCode: "18",
      name: "AltRight",
      simbols: ["Alt", "Alt", "Alt", "Alt"],
      class: "key alt",
    },
    {
      keyCode: "37",
      name: "ArrowLeft",
      simbols: ["◄", "◄", "◄", "◄"],
      class: "key arrow",
    },
    {
      keyCode: "40",
      name: "ArrowDown",
      simbols: ["▼", "▼", "▼", "▼"],
      class: "key arrow",
    },
    {
      keyCode: "39",
      name: "ArrowRight",
      simbols: ["►", "►", "►", "►"],
      class: "key arrow",
    },
    {
      keyCode: "17",
      name: "ControlRight",
      simbols: ["Ctrl", "Ctrl", "Ctrl", "Ctrl"],
      class: "key ctrl",
    },
  ],
};

function init() {
  let line,
    lang = localStorage.getItem("lang"),
    on = " on",
    off = " off";
  if (lang == "ru") {
    (on = " off"), (off = " on");
  }
  const wrapper = document.createElement("div"),
    input = document.createElement("textarea"),
    keyboardDiv = document.createElement("div"),
    key = document.createElement("div");
  wrapper.className = "wrapper";
  document.body.append(wrapper);
  input.setAttribute("id", "result");
  input.setAttribute("cols", 60);
  input.setAttribute("rows", 6);
  wrapper.appendChild(input);
  keyboardDiv.className = "keyboard";
  wrapper.appendChild(keyboardDiv);
  for (line in Keyboard) {
    let row = document.createElement("div");
    row.className = "row";
    keyboardDiv.appendChild(row);

    for (let i = 0; i < Keyboard[line].length; i++) {
      let container = document.createElement("div");
      container.className = Keyboard[line][i]["class"];
      container.innerHTML =
        '<span class="' +
        Keyboard[line][i]["name"] +
        off +
        '"><span class="case down">' +
        Keyboard[line][i]["simbols"][0] +
        "</span>" +
        '<span class="case up">' +
        Keyboard[line][i]["simbols"][1] +
        "</span>";
      container.innerHTML +=
        '<span class="' +
        Keyboard[line][i]["name"] +
        on +
        '"><span class="case down">' +
        Keyboard[line][i]["simbols"][2] +
        "</span>" +
        '<span class="case up">' +
        Keyboard[line][i]["simbols"][3] +
        "</span>";
      row.appendChild(container);
    }
  }
}

init();

let pressed = new Set(),
  capslock = false;

window.addEventListener("keydown", function (EO) {
  EO = EO || window.event;
  // EO.preventDefault();
  let el,
    key,
    textarea = document.getElementById("result"),
    lang = localStorage.getItem("lang"),
    divs;
  pressed.add(EO.key);
  if (pressed.has("Shift") && pressed.has("Alt")) {
    lang = lang == "en" ? "ru" : "en";
    localStorage.setItem("lang", lang);
    let divs = document.getElementsByClassName("key");
    for (let cell of divs) {
      let className = cell.firstChild.className;
      cell.firstChild.className = cell.lastChild.className;
      cell.lastChild.className = className;
    }
  }

  switch (EO.key) {
    case "Alt":
    case "Meta":
    case "Control":
    case "ArrowUp":
    case "ArrowRight":
    case "ArrowDown":
    case "ArrowLeft":
      break;
    case "Delete":
      break;
    case "CapsLock":
      divs = document.getElementsByClassName("case");
      for (let cell of divs) {
        cell.className = cell.className == "case up" ? "case down" : "case up";
      }
      capslock = !capslock;
      break;
    case "Tab":
      textarea.value += "     ";
      break;
    case "Backspace":
      textarea.value = textarea.value.substring(0, textarea.value.length - 1);
      break;
    case " ":
      textarea.value += " ";
      break;
    case "Enter":
      textarea.value += "\n";
      break;
    case "Shift":
      divs = document.getElementsByClassName("case");
      for (let cell of divs) {
        cell.className = cell.className == "case up" ? "case down" : "case up";
      }
      break;
    default:
      let strTextArea;
      for (el in Keyboard) {
        for (let i = 0; i < Keyboard[el].length; i++) {
          if (EO.keyCode == Keyboard[el][i]["keyCode"]) {
            if (
              (!pressed.has("Shift") && capslock) ||
              (pressed.has("Shift") && !capslock)
            ) {
              strTextArea =
                lang == "en"
                  ? Keyboard[el][i]["simbols"][3]
                  : Keyboard[el][i]["simbols"][1];
            } else if (
              (!pressed.has("Shift") && !capslock) ||
              (pressed.has("Shift") && capslock)
            ) {
              strTextArea =
                lang == "en"
                  ? Keyboard[el][i]["simbols"][2]
                  : Keyboard[el][i]["simbols"][0];
            }
            textarea.value += strTextArea;
          }
        }
      }
      break;
  }

  key = document.getElementsByClassName(EO.code);
  if (key[0].parentNode.className.indexOf(" active") == -1) {
    let str = key[0].parentNode.className + " active";
    key[0].parentNode.className = str;
  }
});

window.addEventListener("keyup", function (EO) {
  EO = EO || window.event;
  EO.preventDefault();
  let el,
    key,
    textarea = document.getElementById("result");
  for (el in Keyboard) {
    for (let i = 0; i < Keyboard[el].length; i++) {}
  }

  switch (EO.key) {
    case "Shift":
      let divs = document.getElementsByClassName("case");
      for (let cell of divs) {
        cell.className = cell.className == "case up" ? "case down" : "case up";
      }
      break;
  }

  key = document.getElementsByClassName(EO.code);
  let str = key[0].parentNode.className;
  key[0].parentNode.className = str.replace(" active", "");
  if (EO.key !== "Shift" && pressed.has("Shift")) {
    pressed.clear();
    pressed.add("Shift");
  } else {
    pressed.clear();
  }
});

window.addEventListener("click", function (EO) {
  EO = EO || window.event;
  // EO.preventDefault();
  let textarea = document.getElementById("result");
  //console.log(EO.target +'  '+ EO.target.innerText +'  '+ EO.target.className);
  // console.log(EO.target.className.indexOf("key"));
  // console.log(EO.target.className);
  if (
    EO.target.className == "case down" ||
    (EO.target.className.indexOf("key") == 0 &&
      EO.target.className.indexOf("keyboard") == -1)
  ) {
    console.log(EO.target.innerText );
    switch (EO.target.innerText) {
      case "ENTER":
        textarea.value += "\n";
        break;
      case "Backspace":
        textarea.value = textarea.value.substring(0, textarea.value.length - 1);
        break;
      case "":
        textarea.value += " ";
        break;
      case "DEL":
      case "Shift":
        let divs = document.getElementsByClassName("case");
        for (let cell of divs) {
          cell.className = cell.className == "case up" ? "case down" : "case up";
        }
        break;
      case "Ctrl":
      case "Alt":
      case "◄":
          textarea.setSelectionRange(textarea.value.length - 1, textarea.value.length- 2);
          console.log(textarea.value.length - 1);
          break;
      case "▼":
      case "►":
      case "▲":
      case "Win":
          break;
      case "CapsLock":
        let divss = document.getElementsByClassName("case");
        for (let cell of divss) {
          cell.className = cell.className == "case up" ? "case down" : "case up";
        }
        capslock = !capslock;
        break;
      case "Tab":
        textarea.value += "   ";
        break;
      default:
        textarea.value += EO.target.innerText;
    }
  }
});
