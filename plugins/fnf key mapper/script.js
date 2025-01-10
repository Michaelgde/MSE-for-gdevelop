//console.log(keyPressed)

if(keyPressed.getAsString() === 'Left'){
   createNode(96)
   keyPressed.setString('')
   runtimeScene.getObjects('music_container')[runtimeScene.getObjects('music_container').length-1].getVariables().get('data').setString('left')
}
if(keyPressed.getAsString() === 'Down'){
   createNode(192)
   keyPressed.setString('')
   runtimeScene.getObjects('music_container')[runtimeScene.getObjects('music_container').length-1].getVariables().get('data').setString('down')
}
if(keyPressed.getAsString() === 'Up'){
   createNode(288)
   keyPressed.setString('')
   runtimeScene.getObjects('music_container')[runtimeScene.getObjects('music_container').length-1].getVariables().get('data').setString('up')
}
if(keyPressed.getAsString() === 'Right'){
   createNode(384)
   keyPressed.setString('')
   runtimeScene.getObjects('music_container')[runtimeScene.getObjects('music_container').length-1].getVariables().get('data').setString('right')
}
