//console.log(keyPressed)

if(keyPressed.getAsString() === 'Left'){
   createNode(96)
   keyPressed.setString('')
}
if(keyPressed.getAsString() === 'Down'){
   createNode(192)
   keyPressed.setString('')
}
if(keyPressed.getAsString() === 'Up'){
   createNode(288)
   keyPressed.setString('')
}
if(keyPressed.getAsString() === 'Right'){
   createNode(384)
   keyPressed.setString('')
}
