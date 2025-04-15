if(runtimeScene.getOnceTriggers().triggerOnce(1)){
    registerTxt('event_display',true,false,30)
    runtimeScene.createObject('event_display').setPosition(415,34)
    runtimeScene.getObjects('event_display')[0].setLayer('Layer')
}
runtimeScene.getObjects('music_container').forEach(obj=>{if(gdjs.RuntimeObject.collisionTest(obj,runtimeScene.getObjects('play_node')[0],true)){
    runtimeScene.getObjects('event_display')[0].setString(obj.getVariables().get('data').getAsString())
}})

if(getSetting('see events','costom colour')){
    var Re = getSetting('see events','r')
    var Ge = getSetting('see events','g')
    var Be = getSetting('see events','b')
    runtimeScene.getObjects('event_display')[0].setColor(Re+";"+Ge+";"+Be)
}
