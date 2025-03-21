document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "b") {
    if (!document.getElementById("bpmIframe")) {
      const iframe = document.createElement("iframe");
      iframe.id = "bpmIframe";
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

      iframe.srcdoc = `
              <html>
              <head>
                  <title>BPM Calculator</title>
              </head>
              <style>
                  body {
                      background: #2D1B5A;
                      color: #E0B0FF;
                      font-family: Arial, sans-serif;
                      text-align: center;
                      position: relative;
                      padding: 20px;
                  }
                  .close-btn {
                      position: absolute;
                      top: 10px;
                      right: 10px;
                      background: #FF4D6D;
                      color: white;
                      border: none;
                      padding: 5px 10px;
                      cursor: pointer;
                      font-size: 16px;
                      border-radius: 5px;
                  }
                  h3 {
                      margin-bottom: 15px;
                  }
                  #tapButton {
                      background: #8A2BE2;
                      border: none;
                      color: white;
                      padding: 10px 20px;
                      font-size: 16px;
                      cursor: pointer;
                      border-radius: 5px;
                  }
                  #tapButton:hover {
                      background: #6A1BA2;
                  }
                  #bpmDisplay, #tapCount {
                      margin-top: 10px;
                      font-size: 16px;
                      font-weight: bold;
                  }
              </style>
              <body>
                  <button class="close-btn" onclick="parent.document.getElementById('bpmIframe').remove()">X</button>
                  <h3>BPM Calculator</h3>
                  <button id="tapButton">Tap</button>
                  <p id="tapCount">Taps: 0</p>
                  <p id="bpmDisplay">BPM: 0</p>
                  <script>
                      let times = [];
                      let tapCount = 0;
                      let timeoutID = null;

                      document.getElementById('tapButton').addEventListener('click', function() {
                          const now = performance.now();
                          times.push(now);
                          tapCount++;

                          document.getElementById('tapCount').innerText = 'Taps: ' + tapCount;

                          if (times.length > 1) {
                              const intervals = times.slice(1).map((t, i) => t - times[i]);

                              // Allow faster taps but still avoid extreme values
                              const validIntervals = intervals.filter(i => i >= 100 && i <= 2000);

                              if (validIntervals.length > 0) {
                                  const avgInterval = validIntervals.reduce((a, b) => a + b, 0) / validIntervals.length;
                                  const bpm = Math.round(60000 / avgInterval);
                                  document.getElementById('bpmDisplay').innerText = 'BPM: ' + bpm;
                              } else {
                                  document.getElementById('bpmDisplay').innerText = 'BPM: --'; // Prevents it from getting stuck
                              }
                          }

                          // Reset after 5 seconds of inactivity
                          if (timeoutID) clearTimeout(timeoutID);
                          timeoutID = setTimeout(() => {
                              times = [];
                              tapCount = 0;
                              document.getElementById('tapCount').innerText = 'Taps: 0';
                              document.getElementById('bpmDisplay').innerText = 'BPM: 0';
                          }, 5000);
                      });
                  </script>
              </body>
              </html>
          `;
    }
  }
});
