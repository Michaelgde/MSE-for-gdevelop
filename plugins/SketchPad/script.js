window.customNodeColors = window.customNodeColors || {};

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.altKey && event.key.toLowerCase() === "k") {
    event.preventDefault();
    if (!document.getElementById("sketchpadcstmID")) {
      const iframe = document.createElement("iframe");
      iframe.id = "sketchpadcstmID";
      iframe.style.width = "500px";
      iframe.style.height = "300px";
      iframe.style.border = "2px solid #8A2BE2";
      iframe.style.borderRadius = "10px";
      iframe.style.position = "fixed";
      iframe.style.top = "50%";
      iframe.style.left = "50%";
      iframe.style.transform = "translate(-50%, -50%)";
      iframe.style.background = "#2D1B5A";
      iframe.style.zIndex = "1000";
      document.body.appendChild(iframe);

      const iframeHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8" />
        <title>Sketchpad</title>
        <style>
          html, body {
            margin: 0;
            padding: 0;
            background: #2d1b5a;
            color: #e0b0ff;
            font-family: Arial, sans-serif;
            height: 100%;
            box-sizing: border-box;
          }
      
          #toolbar {
            display: flex;
            gap: 8px;
            padding: 10px;
            background: #1e123f;
            position: absolute;
            top: 0;
            width: 100%;
            z-index: 2;
            align-items: center;
          }
      
          #closeBtn {
            background: #e74c3c;
            color: white;
            border: none;
            font-size: 14px;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            cursor: pointer;
            line-height: 24px;
            padding: 0;
            text-align: center;
          }
      
          button {
            background-color: #5e3db0;
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 14px;
            cursor: pointer;
          }
      
          button:hover {
            background-color: #7d5fff;
          }
      
          canvas {
            display: block;
            position: absolute;
            top: 48px;
            left: 0;
            width: 100%;
            height: calc(100% - 48px);
            background-color: white;
            border-top: 2px solid #000;
          }
        </style>
      </head>
      <body>
        <div id="toolbar">
          <button id="closeBtn">X</button>
          <button id="penBtn">Pen</button>
          <button id="eraserBtn">Eraser</button>
          <button id="clearBtn">Clear</button>
          <label>Color: <input type="color" id="colorPicker" value="#000000" /></label>
          <label>Size: <input type="number" id="sizePicker" value="2" min="1" max="20" /></label>
        </div>
        <canvas id="sketchCanvas"></canvas>
      
        <script>
          const canvas = document.getElementById("sketchCanvas");
          const ctx = canvas.getContext("2d");
          let drawing = false;
          let mode = "pen";
          let color = "#000000";
          let size = 2;
          let history = [];
          let historyIndex = -1;
      
          function resizeCanvas() {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = canvas.clientWidth * dpr;
            canvas.height = canvas.clientHeight * dpr;
            ctx.scale(dpr, dpr);
          }
      
          resizeCanvas();
      
          window.addEventListener("resize", resizeCanvas);
      
          let lastX = 0, lastY = 0, mouseX = 0, mouseY = 0;
      
          function getCoords(e) {
            const rect = canvas.getBoundingClientRect();
            return { x: e.clientX - rect.left, y: e.clientY - rect.top };
          }
      
          function saveState() {
            history = history.slice(0, historyIndex + 1);
            const snapshot = canvas.toDataURL();
            history.push(snapshot);
            historyIndex++;
            try {
              localStorage.setItem("sketchpadSave", snapshot);
            } catch (e) {
              console.warn("Could not save to localStorage", e);
            }
          }
      
          function restoreState(index) {
            const img = new Image();
            img.src = history[index];
            img.onload = () => {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            };
          }
      
          function drawCursorOverlay() {
            if (mode === "eraser" && !drawing) {
              ctx.save();
              ctx.beginPath();
              ctx.strokeStyle = "rgba(0,0,0,0.3)";
              ctx.lineWidth = 1;
              ctx.arc(mouseX, mouseY, size / 2, 0, Math.PI * 2);
              ctx.stroke();
              ctx.restore();
            }
          }
      
          canvas.addEventListener("mousedown", (e) => {
            drawing = true;
            const { x, y } = getCoords(e);
            lastX = x;
            lastY = y;
          });
      
          canvas.addEventListener("mousemove", (e) => {
            const { x, y } = getCoords(e);
            mouseX = x;
            mouseY = y;
      
            if (drawing) {
              ctx.strokeStyle = mode === "eraser" ? "#ffffff" : color;
              ctx.lineWidth = size;
              ctx.lineCap = "round";
              ctx.beginPath();
              ctx.moveTo(lastX, lastY);
              ctx.lineTo(x, y);
              ctx.stroke();
              lastX = x;
              lastY = y;
            } else {
              restoreState(historyIndex);
              drawCursorOverlay();
            }
          });
      
          canvas.addEventListener("mouseup", () => {
            if (drawing) saveState();
            drawing = false;
          });
      
          canvas.addEventListener("mouseleave", () => {
            if (drawing) saveState();
            drawing = false;
          });
      
          document.getElementById("penBtn").addEventListener("click", () => mode = "pen");
          document.getElementById("eraserBtn").addEventListener("click", () => mode = "eraser");
          document.getElementById("colorPicker").addEventListener("input", (e) => color = e.target.value);
          document.getElementById("sizePicker").addEventListener("input", (e) => size = parseInt(e.target.value, 10));
          document.getElementById("clearBtn").addEventListener("click", () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            saveState();
          });
      
          document.addEventListener("keydown", (e) => {
            if (e.ctrlKey && e.key === "z") {
              e.preventDefault();
              if (historyIndex > 0) {
                historyIndex--;
                restoreState(historyIndex);
              }
            }
            if (e.ctrlKey && e.key === "y") {
              e.preventDefault();
              if (historyIndex < history.length - 1) {
                historyIndex++;
                restoreState(historyIndex);
              }
            }
          });
      
          document.getElementById("closeBtn").addEventListener("click", () => {
            const iframe = parent.document.getElementById("sketchpadcstmID");
            if (iframe) parent.document.body.removeChild(iframe);
          });
      
          
          const savedImage = localStorage.getItem("sketchpadSave");
          if (savedImage) {
            const img = new Image();
            img.src = savedImage;
            img.onload = () => {
              ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
              saveState();
            };
          } else {
            saveState();
          }
        </script>
      </body>
      </html>
      `;

      const blob = new Blob([iframeHtml], { type: "text/html" });
      iframe.src = URL.createObjectURL(blob);
    }
  }
});
