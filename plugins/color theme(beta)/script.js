

var countyu = runtimeScene.getVariables().get('mcc')
if(runtimeScene.getOnceTriggers().triggerOnce(6)){
    registerTxt('info12h',false,false,20)
    runtimeScene.createObject('info12h').setLayer('Layer')
    runtimeScene.getObjects('info12h')[0].setPosition(600,300)
    runtimeScene.getObjects('info12h')[0].setString('set color RGB')

    var R = {
        "assetStoreId": "",
        "name": "re",
        "type": "TextInput::TextInputObject",
        "variables": [],
        "effects": [],
        "behaviors": [
            {
                "name": "Opacity",
                "type": "OpacityCapability::OpacityBehavior"
            },
            {
                "name": "Resizable",
                "type": "ResizableCapability::ResizableBehavior"
            },
            {
                "name": "Text",
                "type": "TextContainerCapability::TextContainerBehavior"
            }
        ],
        "content": {
            "initialValue": "",
            "placeholder": "add event",
            "fontResourceName": "",
            "fontSize": 20,
            "inputType": "number",
            "textColor": "255;255;255",
            "fillColor": "141;38;255",
            "fillOpacity": 255,
            "borderColor": "141;38;255",
            "borderOpacity": 255,
            "borderWidth": 1,
            "readOnly": false,
            "disabled": false
        }
    }
    var G = {
        "assetStoreId": "",
        "name": "ge",
        "type": "TextInput::TextInputObject",
        "variables": [],
        "effects": [],
        "behaviors": [
            {
                "name": "Opacity",
                "type": "OpacityCapability::OpacityBehavior"
            },
            {
                "name": "Resizable",
                "type": "ResizableCapability::ResizableBehavior"
            },
            {
                "name": "Text",
                "type": "TextContainerCapability::TextContainerBehavior"
            }
        ],
        "content": {
            "initialValue": "",
            "placeholder": "add event",
            "fontResourceName": "",
            "fontSize": 20,
            "inputType": "number",
            "textColor": "255;255;255",
            "fillColor": "141;38;255",
            "fillOpacity": 255,
            "borderColor": "141;38;255",
            "borderOpacity": 255,
            "borderWidth": 1,
            "readOnly": false,
            "disabled": false
        }
    }
    var B = {
        "assetStoreId": "",
        "name": "be",
        "type": "TextInput::TextInputObject",
        "variables": [],
        "effects": [],
        "behaviors": [
            {
                "name": "Opacity",
                "type": "OpacityCapability::OpacityBehavior"
            },
            {
                "name": "Resizable",
                "type": "ResizableCapability::ResizableBehavior"
            },
            {
                "name": "Text",
                "type": "TextContainerCapability::TextContainerBehavior"
            }
        ],
        "content": {
            "initialValue": "",
            "placeholder": "add event",
            "fontResourceName": "",
            "fontSize": 20,
            "inputType": "number",
            "textColor": "255;255;255",
            "fillColor": "141;38;255",
            "fillOpacity": 255,
            "borderColor": "141;38;255",
            "borderOpacity": 255,
            "borderWidth": 1,
            "readOnly": false,
            "disabled": false
        }
    }

    var opaa = {
        "assetStoreId": "",
        "name": "opas",
        "type": "TextInput::TextInputObject",
        "variables": [],
        "effects": [],
        "behaviors": [
            {
                "name": "Opacity",
                "type": "OpacityCapability::OpacityBehavior"
            },
            {
                "name": "Resizable",
                "type": "ResizableCapability::ResizableBehavior"
            },
            {
                "name": "Text",
                "type": "TextContainerCapability::TextContainerBehavior"
            }
        ],
        "content": {
            "initialValue": "",
            "placeholder": "add event",
            "fontResourceName": "",
            "fontSize": 20,
            "inputType": "number",
            "textColor": "255;255;255",
            "fillColor": "141;38;255",
            "fillOpacity": 255,
            "borderColor": "141;38;255",
            "borderOpacity": 255,
            "borderWidth": 1,
            "readOnly": false,
            "disabled": false
        }
    }

    var cover = {
        "adaptCollisionMaskAutomatically": true,
        "assetStoreId": "",
        "name": "coverrrt",
        "type": "Sprite",
        "updateIfNotVisible": false,
        "variables": [],
        "effects": [],
        "behaviors": [
            {
                "name": "Animation",
                "type": "AnimatableCapability::AnimatableBehavior"
            },
            {
                "name": "Effect",
                "type": "EffectCapability::EffectBehavior"
            },
            {
                "name": "Flippable",
                "type": "FlippableCapability::FlippableBehavior"
            },
            {
                "name": "Opacity",
                "type": "OpacityCapability::OpacityBehavior"
            },
            {
                "name": "Resizable",
                "type": "ResizableCapability::ResizableBehavior"
            },
            {
                "name": "Scale",
                "type": "ScalableCapability::ScalableBehavior"
            }
        ],
        "animations": [
            {
                "name": "node",
                "useMultipleDirections": false,
                "directions": [
                    {
                        "looping": false,
                        "metadata": "{\"pskl\":{}}",
                        "timeBetweenFrames": 0.08,
                        "sprites": [
                            {
                                "hasCustomCollisionMask": true,
                                "image": "node",
                                "points": [],
                                "originPoint": {
                                    "name": "origine",
                                    "x": 0,
                                    "y": 0
                                },
                                "centerPoint": {
                                    "automatic": true,
                                    "name": "centre",
                                    "x": 0,
                                    "y": 0
                                },
                                "customCollisionMask": [
                                    [
                                        {
                                            "x": 0,
                                            "y": 0
                                        },
                                        {
                                            "x": 64,
                                            "y": 0
                                        },
                                        {
                                            "x": 64,
                                            "y": 64
                                        },
                                        {
                                            "x": 0,
                                            "y": 64
                                        }
                                    ]
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
    registerTxt('hj',false,false,20)
    runtimeScene.createObject('hj').setPosition(600,420)
    runtimeScene.getObjects('hj')[0].setLayer('Layer')
    runtimeScene.getObjects('hj')[0].setString('opacity')

    runtimeScene.registerObject(opaa)
    runtimeScene.createObject('opas').setPosition(600,440)
    runtimeScene.getObjects('opas')[0].setLayer('Layer')

    runtimeScene.registerObject(R)
    runtimeScene.createObject('re').setPosition(600,320)
    runtimeScene.getObjects('re')[0].setLayer('Layer')

    runtimeScene.registerObject(G)
    runtimeScene.createObject('ge').setPosition(600,350)
    runtimeScene.getObjects('ge')[0].setLayer('Layer')

    runtimeScene.registerObject(B)
    runtimeScene.createObject('be').setPosition(600,380)
    runtimeScene.getObjects('be')[0].setLayer('Layer')

    runtimeScene.getVariables().get('mcc').setNumber(runtimeScene.getObjects('music_container').length)




    runtimeScene.registerObject(cover)
    runtimeScene.createObject('coverrrt').setOpacity(32)
    runtimeScene.getObjects('coverrrt')[0].setLayer('Layer')
    runtimeScene.getObjects('coverrrt')[0].setZOrder(200)
    runtimeScene.getObjects('coverrrt')[0].setWidth(1280)
    runtimeScene.getObjects('coverrrt')[0].setHeight(720)

}
var Re = runtimeScene.getObjects('re')[0].getString()
var Ge = runtimeScene.getObjects('ge')[0].getString()
var Be = runtimeScene.getObjects('be')[0].getString()
var opaaass = runtimeScene.getObjects('opas')[0].getString()
if(Number(Re)<255 && Number(Be)<255 && Number(Ge)<255 && Number(Re)>-1 && Number(Be)>-1 && Number(Ge)>-1 ){
    if(keyPressed.getAsString() === 'w' && runtimeScene.getObjects('re').length > 0){
        runtimeScene.getObjects('music_container').forEach(objk=> objk.setColor(Re+";"+Ge+";"+Be))
        countyu.setNumber(countyu.getAsNumber())
        keyPressed.setString('')
    }

}


if(keyPressed.getAsString() === 'w' && runtimeScene.getObjects('re').length > 0){
    if(Number(Re)<255 && Number(Be)<255 && Number(Ge)<255 && Number(Re)>-1 && Number(Be)>-1 && Number(Ge)>-1 ){
        runtimeScene.getObjects('coverrrt')[0].setColor(Re+";"+Ge+";"+Be)
        runtimeScene.getObjects('music_container').forEach(objk=> objk.setColor(Re+";"+Ge+";"+Be))
        runtimeScene.getObjects('fast_forward')[0].setColor(Re+";"+Ge+";"+Be)
        runtimeScene.getObjects('fast_backward')[0].setColor(Re+";"+Ge+";"+Be)
        runtimeScene.getObjects('play')[0].setColor(Re+";"+Ge+";"+Be)
        runtimeScene.getObjects('stop')[0].setColor(Re+";"+Ge+";"+Be)
        runtimeScene.getObjects('settings_ic')[0].setColor(Re+";"+Ge+";"+Be)
        runtimeScene.getObjects('home')[0].setColor(Re+";"+Ge+";"+Be)
        runtimeScene.getObjects('save')[0].setColor(Re+";"+Ge+";"+Be)
        runtimeScene.getObjects('menu')[0].setColor(Re+";"+Ge+";"+Be)
        runtimeScene.getObjects('set')[0].setColor(Re+";"+Ge+";"+Be)
        runtimeScene.getObjects('show_event')[0].setColor(Re+";"+Ge+";"+Be)
        runtimeScene.getObjects('speaker')[0].setColor(Re+";"+Ge+";"+Be)
        runtimeScene.getObjects('logo')[0].setColor(Re+";"+Ge+";"+Be)
        runtimeScene.getObjects('debug')[0].setColor(Re+";"+Ge+";"+Be)
        runtimeScene.getObjects('debug2')[0].setColor(Re+";"+Ge+";"+Be)

    }

    if(Number(opaaass)<256 && Number(opaaass)> -1){
        runtimeScene.getObjects('coverrrt')[0].setOpacity(Number(opaaass))
    }
    keyPressed.setString('')
}
if(keyPressed.getAsString() === 'Escape' && runtimeScene.getObjects('re').length > 0){
    runtimeScene.getObjects('re')[0].hide(true)
    runtimeScene.getObjects('ge')[0].hide(true)
    runtimeScene.getObjects('be')[0].hide(true)
    runtimeScene.getObjects('opas')[0].hide(true)
    runtimeScene.getObjects('hj')[0].hide(true)
    runtimeScene.getObjects('info12h')[0].hide(true)
    keyPressed.setString('')

}
if(keyPressed.getAsString() === 'F2' && runtimeScene.getObjects('re').length > 0){
    runtimeScene.getObjects('re')[0].hide(false)
    runtimeScene.getObjects('ge')[0].hide(false)
    runtimeScene.getObjects('be')[0].hide(false)
    runtimeScene.getObjects('opas')[0].hide(false)
    runtimeScene.getObjects('hj')[0].hide(false)
    runtimeScene.getObjects('info12h')[0].hide(false)
    keyPressed.setString('')

}
