//console.log(keyPressed)

if(keyPressed.getAsString() === 'Left'){
   createNode(96)
   runtimeScene.getObject('music_container')[runtimeScene.getObjects('music_container').length-1].getVariable().get('data').setString('left')
   keyPressed.setString('')
}
if(keyPressed.getAsString() === 'Down'){
   createNode(192)
   runtimeScene.getObject('music_container')[runtimeScene.getObjects('music_container').length-1].getVariable().get('data').setString('down')
   keyPressed.setString('')
}
if(keyPressed.getAsString() === 'Up'){
   createNode(288)
   runtimeScene.getObject('music_container')[runtimeScene.getObjects('music_container').length-1].getVariable().get('data').setString('up')
   keyPressed.setString('')
}
if(keyPressed.getAsString() === 'Right'){
   createNode(384)
   runtimeScene.getObject('music_container')[runtimeScene.getObjects('music_container').length-1].getVariable().get('data').setString('right')
   keyPressed.setString('')
}
