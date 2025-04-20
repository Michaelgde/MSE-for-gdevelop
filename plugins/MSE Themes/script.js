if (!window.lastSceneName) {
  window.lastSceneName = runtimeScene.getName();
}

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.altKey && event.key.toLowerCase() === "t") {
    if (!document.getElementById("mse-theme")) {
      const iframe = document.createElement("iframe");
      iframe.id = "mse-theme";
      iframe.style.width = "320px";
      iframe.style.height = "260px";
      iframe.style.border = "2px solid #8A2BE2";
      iframe.style.borderRadius = "10px";
      iframe.style.position = "fixed";
      iframe.style.top = "50%";
      iframe.style.left = "50%";
      iframe.style.transform = "translate(-50%, -50%)";
      iframe.style.background = "white";
      iframe.style.zIndex = "1000";
      document.body.appendChild(iframe);

      const iframeHtml = `
<html>
  <head>
    <title>MSE THEME</title>
    <style>
      body {
        background: #2d1b5a;
        color: #e0b0ff;
        font-family: Arial, sans-serif;
        text-align: center;
        position: relative;
        padding: 20px;
        margin: 0;
        font-size: 12px;
        overflow: hidden;
      }

      .close-btn {
        position: absolute;
        top: 5px;
        right: 5px;
        background: #ff4d6d;
        color: white;
        border: none;
        padding: 4px 8px;
        cursor: pointer;
        font-size: 12px;
        border-radius: 5px;
      }

      .btn {
        background-color: #6a0dad;
        border: none;
        color: #fff;
        padding: 8px 16px;
        margin: 5px;
        font-size: 12px;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        width: 100%;
        box-sizing: border-box;
      }

      .btn:hover {
        background-color: #8e44ad;
      }

      .hidden {
        display: none;
      }

      h1 {
        font-size: 16px;
        margin-bottom: 15px;
      }

      input[type="file"] {
        font-size: 12px;
      }
    </style>
  </head>
  <body>
    <button
      class="close-btn"
      onclick="parent.document.getElementById('mse-theme').remove()"
    >
      X
    </button>

    <h1>Select a Theme</h1>

    <p>To get more themes, visit our <a href="https://github.com/Byson94/MSE-Themes" target="_blank">GitHub repository</a> or upload your own theme!</p>

    <button class="btn" onclick="applyHackerTheme()">Use Hacker Theme</button>
    <button class="btn" onclick="document.getElementById('fileInput').click()">
      Upload Your Theme
    </button>
    <input
      type="file"
      id="fileInput"
      class="hidden"
      accept=".js"
      onchange="loadCustomTheme(event)"
    />

    <script>
      function applyHackerTheme() {
        parent.postMessage({ type: "load-default-theme", code: "hacker" }, "*");
      }

      function loadCustomTheme(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (e) {
          parent.postMessage({ type: "load-theme", code: e.target.result }, "*");
        };
        reader.readAsText(file);
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

if (runtimeScene.getOnceTriggers().triggerOnce(1)) {
  window.addEventListener("message", function (event) {
    if (event.data.type === "load-theme") {
      try {
        localStorage.setItem("MSETheme", event.data.code);
        eval(event.data.code);
      } catch (err) {
        console.error("Failed to execute theme script:", err);
      }
    }
    if (event.data.type === "load-default-theme") {
      if (event.data.code === "hacker") {
        const hackerScriptUrl =
          "https://raw.githubusercontent.com/Byson94/MSE-Themes/refs/heads/main/assets/hacker/hacker.js";

        fetch(hackerScriptUrl)
          .then((response) => response.text())
          .then((script) => {
            localStorage.setItem("MSETheme", script);

            console.log("script:", script);
            eval(script);
          })
          .catch((error) => {
            console.error("Error getting the hacker theme:", error);
          });
      }
    }
  });
}

const scripttheme = localStorage.getItem("MSETheme");

if (scripttheme) {
  eval(scripttheme);
}
