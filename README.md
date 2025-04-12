# MSE (Music Sheet Editor) for GDevelop

## About

MSE is a music mapping tool for GDevelop designed to track and key beats in audio/music. It’s particularly useful for creating rhythm games like **Friday Night Funkin' (FNF)**, **Geometry Dash**, **Guitar Hero**, and other similar games.

MSE saves the keys you map in JSON files. These files can be converted into an array/structure variable in GDevelop using the "JSON to Variable" extension.

## Plugins

Plugins are third-party features that extend the functionality of MSE. Plugins are written in JavaScript using the **GDJS** (GDevelop JavaScript) library.

For documentation on **GDJS**, visit:  
[GDJS Documentation](https://docs.gdevelop.io/GDJS%20Runtime%20Documentation/modules/gdjs.html)

For comprehensive documentation on creating plugins, visit the wiki:  
[MSE Plugin Documentation](https://github.com/Michaelgde/music-sheet/wiki)

If you'd like to publish a plugin, please reach out to me via my [Discord server](https://discord.gg/BqMsVZ2mR8).

---

## How to Use MSE

1. **Creating Keys**: Press **C** to create a key at the current position on the grid. The grid represents the beats per minute (BPM) where each grid line corresponds to a beat.
2. **TA (Time of Audio)**: The long moving line in the editor represents the **Time of Audio (TA)**. It graphically indicates when a key is reached, a note is played, or when an event can be triggered in sync with the audio.
3. **Exporting Data**:
   - **Array Export**: You can export your project as an array. This format is useful if you only need the time when a note/key is reached or the X position of a key, which helps to reduce the size of the JSON file.
   - **Structure Export**: You can export your project as a structure. This format includes all data such as time, X position, Y position, and events.
4. **Scripts**: Developers can use the **Script** feature to run custom JavaScript, mainly using GDJS. This allows further customization and improvement of MSE.

---

## Pros and Cons of the HTML and Desktop Versions of MSE

### HTML Version

**PROS:**
1. Lightweight and easy to use.
2. Secure when run on reliable browsers like **Chrome**, **Brave**, or **Firefox**.
3. No need to download updates, as everything is updated automatically.
4. Can run on multiple operating systems without installation.

**CONS:**
1. Can be laggy if the size of the projects exceeds the available RAM.
2. May contain bugs due to the potential lack of proper testing before upload.
3. Not recommended for use with insecure or outdated browsers.

---

### Desktop Version

**PROS:**
1. Faster performance and more stable.
2. Allows you to install an older version if needed.
3. Works seamlessly with JavaScript and GDJS.
4. Does not require an internet connection to function.

**CONS:**
1. Heavier on system resources.
2. You may need to update the application when a new recommended version is released.
3. Less secure if plugins are installed from unofficial or untrusted sources.

---

