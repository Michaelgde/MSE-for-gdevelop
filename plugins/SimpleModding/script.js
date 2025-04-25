// ----------------------------------------------------
// Simple CONFIGS
// ----------------------------------------------------

window.runtimeScene = runtimeScene;
window.gdjs = gdjs;


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

  const changeImageTexture = (spriteName, base64DataURI, recursive) => {
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
  };

  const spritePosition = (spriteName, x, y, recursive) => {
    const sprite = recursive
      ? runtimeScene.getObjects(spriteName)
      : [runtimeScene.getObjects(spriteName)[0]];
    if (sprite) {
      sprite.setX(x);
      sprite.setY(y);
    }
  };

  const getVariable = (varName, global, nested) => {
    let variable = "";

    if (nested) {
      if (global) {
        const parts = varName.split(".");
        variable = runtimeScene.getGame().getVariables().get(parts[0]);
        for (let i = 1; i < parts.length; i++) {
          variable = variable.getChild(parts[i]);
        }
      } else {
        const parts = varName.split(".");
        variable = runtimeScene.getVariables().get(parts[0]);
        for (let i = 1; i < parts.length; i++) {
          variable = variable.getChild(parts[i]);
        }
      }
    } else {
      if (global) {
        variable = runtimeScene.getGame().getVariables().get(varName);
      } else {
        variable = runtimeScene.getVariables().get(varName);
      }
    }
    return variable;
  };

  const setVariable = (varName, value, global, nested) => {
    let variable = "";

    if (nested) {
      if (global) {
        const parts = varName.split(".");
        variable = runtimeScene.getGame().getVariables().get(parts[0]);
        for (let i = 1; i < parts.length; i++) {
          variable = variable.getChild(parts[i]);
        }
      } else {
        const parts = varName.split(".");
        variable = runtimeScene.getVariables().get(parts[0]);
        for (let i = 1; i < parts.length; i++) {
          variable = variable.getChild(parts[i]);
        }
      }

    } else {
      if (global) {
        variable = runtimeScene.getGame().getVariables().get(varName);
      } else {
        variable = runtimeScene.getVariables().get(varName);
      }
    }
    if (typeof value === "number") {
      variable.setNumber(value);
    } else if (typeof value === "string") {
      variable.setString(value);
    } else if (typeof value === "boolean") {
      variable.setBoolean(value);
    }
  };


  return {
    createIframe,
    playAudio,
    changeImageTexture,
    spritePosition,
    getVariable,
    setVariable,
  };
};

window.smplmod = simplemod();
