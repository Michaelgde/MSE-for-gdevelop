# Simple Modding

A plugin specifically designed to help you to make plugins for MSE.

To use this api in your project, include this at the top of your plugin script:

```js
// this loads the plugin if its not already loaded
if (
  !runtimeScene
    .getGame()
    .getVariables()
    .get("data")
    .getChild("plugins")
    .getChild("SimpleModding")
    .getChild("script")
) {
  fetch(
    "https://raw.githubusercontent.com/Michaelgde/MSE-for-gdevelop/main/plugins/SimpleModding/script.js"
  )
    .then((res) => res.text())
    .then((text) => {
      runtimeScene
        .getGame()
        .getVariables()
        .get("data")
        .getChild("plugins")
        .getChild("SimpleModding")
        .getChild("script")
        .setString(text);
    });
}
```

---

## API

SimpleModding requres `smplmod` command to call it's functions.

### `smplmod.createIframe(iframeName: string, iframeHTML: string, method: string, styleConfig?: object): void`

**Description:**  
Creates and injects a named iframe into the scene using the provided HTML content. You can choose between using a `bloburl` or `srcdoc` method for loading the content. Optionally, you can pass a `styleConfig` object to customize the iframe's styling.

**Parameters:**

- `iframeName` (string): A unique name for the iframe.
- `iframeHTML` (string): The HTML content to inject into the iframe.
- `method` (string): Determines how the HTML content is loaded.
  - `"bloburl"`: Loads content as a Blob URL.
  - `"srcdoc"`: Loads content directly via `srcdoc` attribute.
- `styleConfig` (object, optional): An object containing CSS styles for the iframe.  
  If omitted, default styles will be applied.

**Example:**

```js
smplmod.createIframe("gameEmbed", "<h1>Hello Iframe</h1>", "bloburl", {
  width: "600px",
  height: "400px",
  border: "none",
  position: "absolute",
  top: "50%",
  left: "50%",
});
```

### `smplmod.playAudio(base64DataURI: string): void`

**Description:**  
Plays an audio clip from a base64-encoded Data URI. The Data URI must include the `data:audio/...;base64,` prefix or playback will fail.

**Parameters:**

- `base64DataURI` (string): A base64-encoded audio Data URI (e.g., `data:audio/mp3;base64,//uQxAAA...`).

**Example:**

```js
smplmod.playAudio("data:audio/mp3;base64,//uQxAAA...");
```

---

### `smplmod.changeImageTexture(spriteName: string, base64DataURI: string, recursive: boolean): void`

**Description:**  
Updates the texture of one or more sprites using a base64-encoded image Data URI. If `recursive` is `true`, all sprites sharing the specified name will update; if `false`, only the first matching sprite changes.

**Parameters:**

- `spriteName` (string): The name of the sprite(s) to update.
- `base64DataURI` (string): A base64-encoded image Data URI (e.g., `data:image/png;base64,iVBORw0KGgo...`).
- `recursive` (boolean): Whether to update all matching sprites (`true`) or only the first match (`false`).

**Example:**

```js
smplmod.changeImageTexture(
  "playerSprite",
  "data:image/png;base64,iVBORw0KGgo...",
  true
);
```
