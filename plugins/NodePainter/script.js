window.customNodeColors = window.customNodeColors || {};

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "s") {
    if (!document.getElementById("cstmNodeClrIframe")) {
      const iframe = document.createElement("iframe");
      iframe.id = "cstmNodeClrIframe";
      iframe.style.width = "340px";
      iframe.style.height = "280px";
      iframe.style.border = "2px solid #8A2BE2";
      iframe.style.borderRadius = "10px";
      iframe.style.position = "fixed";
      iframe.style.top = "50%";
      iframe.style.left = "50%";
      iframe.style.transform = "translate(-50%, -50%)";
      iframe.style.background = "#2D1B5A";
      iframe.style.zIndex = "1000";
      document.body.appendChild(iframe);

      iframe.srcdoc = `
                <html>
                <head>
                    <title>Custom Node Color</title>
                </head>
                <style>
                    body {
                        background: #2D1B5A;
                        color: #E0B0FF;
                        font-family: Arial, sans-serif;
                        text-align: center;
                        padding: 10px;
                        position: relative;
                    }
                    #closeBtn {
                        position: absolute;
                        top: 5px;
                        right: 8px;
                        background: #E74C3C;
                        color: white;
                        border: none;
                        font-size: 14px;
                        padding: 4px 8px;
                        border-radius: 50%;
                        cursor: pointer;
                    }
                    #container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 8px;
                        margin-top: 10px;
                    }
                    .event-box {
                        display: flex;
                        align-items: center;
                        background: #4B2C7C;
                        padding: 5px;
                        border-radius: 8px;
                        width: 90%;
                        justify-content: space-between;
                        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
                    }
                    .event-box input {
                        padding: 4px;
                        border-radius: 5px;
                        border: none;
                        outline: none;
                    }
                    .color-picker {
                        width: 30px;
                        height: 30px;
                        border: none;
                        cursor: pointer;
                        margin-left: 10px;
                    }
                    .remove-btn {
                        background: #E74C3C;
                        color: white;
                        border: none;
                        cursor: pointer;
                        font-size: 14px;
                        padding: 4px 6px;
                        border-radius: 50%;
                        margin-left: 10px;
                    }
                    button {
                        padding: 6px 12px;
                        font-size: 14px;
                        background: #8A2BE2;
                        color: white;
                        border: none;
                        cursor: pointer;
                        border-radius: 5px;
                        margin-top: 5px;
                    }
                </style>
                <body>
                    <button id="closeBtn">X</button>
                    <button id="addBtn">Add</button>
                    <div id="container"></div>

                    <script>
                        let localNodeColors = {};

                        function saveLocalData() {
                            localNodeColors = {};
                            document.querySelectorAll(".event-box").forEach(div => {
                                let eventName = div.querySelector("input[type='text']").value.trim();
                                let eventColor = div.querySelector("input[type='color']").value;
                                if (eventName) {
                                    localNodeColors[eventName] = eventColor;
                                }
                            });
                        }

                        document.getElementById("closeBtn").addEventListener("click", function () {
                            saveLocalData();

                        
                            this.disabled = true;

                        
                            parent.postMessage({ type: "updateNodeColors", data: localNodeColors }, "*");

                        
                            setTimeout(() => {
                                let iframe = parent.document.getElementById("cstmNodeClrIframe");
                                if (iframe) parent.document.body.removeChild(iframe);
                            }, 50);
                        }, { once: true });


                        document.getElementById("addBtn").addEventListener("click", function() {
                            createEventBox("", "#ffffff");
                        });

                        function createEventBox(eventName, eventColor) {
                            if (localNodeColors[eventName]) return;

                            let container = document.getElementById("container");
                            let div = document.createElement("div");
                            div.className = "event-box";

                            let input = document.createElement("input");
                            input.type = "text";
                            input.placeholder = "Event Name";
                            input.value = eventName;
                            input.addEventListener("input", saveLocalData);

                            let colorPicker = document.createElement("input");
                            colorPicker.type = "color";
                            colorPicker.className = "color-picker";
                            colorPicker.value = eventColor;
                            colorPicker.addEventListener("input", saveLocalData);

                            let removeBtn = document.createElement("button");
                            removeBtn.innerText = "X";
                            removeBtn.className = "remove-btn";
                            removeBtn.addEventListener("click", function() {
                                container.removeChild(div);
                                saveLocalData();
                            });

                            div.appendChild(input);
                            div.appendChild(colorPicker);
                            div.appendChild(removeBtn);
                            container.appendChild(div);

                            localNodeColors[eventName] = eventColor;
                        }

                        window.addEventListener("message", function(event) {
                            if (event.data.type === "loadNodeColors") {
                                let storedData = event.data.data;
                                for (let eventName in storedData) {
                                    createEventBox(eventName, storedData[eventName]);
                                }
                            }
                        });

                        parent.postMessage({ type: "requestNodeColors" }, "*");
                    </script>
                </body>
                </html>
            `;

      iframe.onload = function () {
        iframe.contentWindow.postMessage(
          { type: "loadNodeColors", data: window.customNodeColors },
          "*"
        );
      };
    }
  }
});

window.onmessage = function (event) {
  if (!event.data) return;

  if (event.data.type === "updateNodeColors") {
    window.customNodeColors = event.data.data;
    console.log("Final Node Colors Saved:", window.customNodeColors);
    updateNodeTints(runtimeScene);
  } else if (event.data.type === "requestNodeColors") {
    event.source.postMessage(
      { type: "loadNodeColors", data: window.customNodeColors },
      "*"
    );
  }
};

function updateNodeTints(runtimeScene) {
  const nodes = runtimeScene.getObjects("music_container");
  console.log(nodes);

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    console.log(node);

    const eventName = node.getVariables().get("data").getAsString();

    console.log(eventName);

    if (window.customNodeColors.hasOwnProperty(eventName)) {
      const hexColor = window.customNodeColors[eventName];

      console.log(hexColor);

      node.setColor(hexToRgb(hexColor));
    } else {
      node.setColor("#FFFFFF");
    }
  }
}

function hexToRgb(hex) {
  hex = hex.replace(/^#/, "");

  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  return `${r};${g};${b}`;
}
