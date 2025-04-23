// ----------------------------------------------------
// Simple API
// ----------------------------------------------------

const simplemod = () => {
  const createIframe = (iframeName, iframeHTML, method, iframeStyle) => {
    try {
      const iframe = document.createElement("iframe");
      iframe.id = iframeName;
      if (iframeStyle) {
        Object.entries(iframeStyle).forEach(([key, value]) => {
          iframe.style[key] = value;
        });
      } else {
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
      }
      document.body.appendChild(iframe);

      if (method === "srcdoc") {
        iframe.srcdoc = iframeHTML;
      } else if (method === "bloburl") {
        const blob = new Blob([iframeHTML], { type: "text/html" });
        iframe.src = URL.createObjectURL(blob);
      }
    } catch (error) {
      console.error("SimpleModding: An error occurred when creating iframe");
    }
  };

  const playAudio = (dataURI) => {
    const audio = new Audio(dataURI);
    audio.play().catch((err) => {
      console.error("SimpleModding: Audio play failed:", err);
    });
  };

  function changeImageTexture(spriteName, base64DataURI, recursive) {
    const image = new Image();
    image.onload = () => {
      const texture = new PIXI.Texture(new PIXI.BaseTexture(image));
      const objects = recursive
        ? runtimeScene.getObjects(spriteName)
        : [runtimeScene.getObjects(spriteName)[0]];

      objects.forEach((sprite) => {
        const width = sprite.getWidth();
        const height = sprite.getHeight();
        const zOrder = sprite.getZOrder();

        sprite.getRendererObject().texture = texture;

        sprite.setWidth(width);
        sprite.setHeight(height);
        sprite.setZOrder(zOrder);
      });
    };
    image.onerror = (e) => {
      console.error("Failed to load texture:", e);
    };
    image.src = base64DataURI;
  }

  return {
    createIframe,
    playAudio,
    changeImageTexture,
  };
};

window.smplmod = simplemod();
