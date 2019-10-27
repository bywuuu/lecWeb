GS.dataCache['E0573F945FDCA547DA2964F4045866DD29FF'] = {
    "uid": "E0573F945FDCA547DA2964F4045866DD29FF",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Black Jack",
        "type": "vn.scene",
        "parentId": "3EB0897BK4EAAA43A8SA91DEE65923801AB3",
        "chapterUid": "3EB0897BK4EAAA43A8SA91DEE65923801AB3",
        "order": 1,
        "localizableStrings": {
            "BE0E3B3D55CF0846D97B4AA3317A095B684E": {
                "t": "Dealer: {GN:4}",
                "d": {
                    "eid": "EBD3AF1698CB94417A1BFBE4DC6E5D556B4C"
                }
            },
            "37EA5DBA5F0C2148F32964014D1A9780DDA0": {
                "t": "You: {GN:1}",
                "d": {
                    "eid": "24D4A226278BA647A33A28F6A2A661AD82B9"
                }
            },
            "3CA3FB291B99A5400A2AA4792B018B17778C": {
                "t": "Take Card",
                "d": {
                    "eid": "9C55454E553EE74C316B47072831CB42C138"
                }
            },
            "B29046C08BE0A5420D097AD766F0CD3B5D45": {
                "t": "Stay",
                "d": {
                    "eid": "4BA0E6C8519EF740AF29F9F3F303BB7A3FE0"
                }
            }
        },
        "commands": [
            {
                "id": "gs.Comment",
                "params": {
                    "text": "First we setup the user interface for the game. We will add a background image as well as two text labels to display the points of the dealer and player."
                },
                "indent": 0,
                "uid": "B3D26E2120AFB347088897D1C57EEEE3BAF2",
                "expanded": true
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "Moonlight",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "layer": 0,
                    "duration": 0,
                    "waitForCompletion": 1,
                    "blendMode": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "loopVertical": 0,
                    "loopHorizontal": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1,
                        "easing.type": 1,
                        "animation.type": 0,
                        "origin": 1,
                        "zOrder": 1,
                        "blendMode": 1,
                        "viewport.type": 1,
                        "loopVertical": 1,
                        "loopHorizontal": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "expanded": false,
                "uid": "C030FD73960572406D68EC374DDA18D5CAD2"
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 0,
                        "width": 100,
                        "height": 100
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 255,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 0,
                    "number": 20,
                    "blendMode": 0,
                    "zOrder": 300,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 0,
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1,
                        "easing.type": 1,
                        "animation.type": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "visual.type": 1,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 1,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 1,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "ui_back",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "numberDomain": "com.degica.vnm.default",
                    "domain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "2D72C82441EC284F6798C7B42C2896EC966B",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 0,
                        "width": 100,
                        "height": 100
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 255,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 6,
                    "number": 21,
                    "blendMode": 0,
                    "zOrder": 300,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 0,
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1,
                        "easing.type": 1,
                        "animation.type": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "visual.type": 1,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 1,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 1,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "ui_back",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "numberDomain": "com.degica.vnm.default",
                    "domain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "2B3D3E8A069B1743F16A67561DEADFD117EB",
                "expanded": false
            },
            {
                "id": "gs.ShowText",
                "params": {
                    "viewport": {
                        "type": "ui"
                    },
                    "predefinedPositionId": 0,
                    "positionType": 1,
                    "number": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "blendMode": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "text": {
                        "lcId": "BE0E3B3D55CF0846D97B4AA3317A095B684E",
                        "defaultText": {
                            "t": "Dealer: {GN:4}",
                            "d": {
                                "eid": "EBD3AF1698CB94417A1BFBE4DC6E5D556B4C"
                            }
                        }
                    },
                    "position": {
                        "x": 30,
                        "y": 28
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1,
                        "easing.type": 1,
                        "animation.type": 1,
                        "origin": 1,
                        "zOrder": 1,
                        "blendMode": 1,
                        "viewport.type": 1,
                        "positionOrigin": 1
                    },
                    "expressions": [],
                    "animations": [],
                    "numberDomain": "com.degica.vnm.default",
                    "domain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "EBD3AF1698CB94417A1BFBE4DC6E5D556B4C",
                "expanded": true
            },
            {
                "id": "gs.ShowText",
                "params": {
                    "viewport": {
                        "type": "ui"
                    },
                    "predefinedPositionId": 0,
                    "positionType": 1,
                    "number": 1,
                    "duration": 0,
                    "waitForCompletion": 1,
                    "blendMode": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "text": {
                        "lcId": "37EA5DBA5F0C2148F32964014D1A9780DDA0",
                        "defaultText": {
                            "t": "You: {GN:1}",
                            "d": {
                                "eid": "24D4A226278BA647A33A28F6A2A661AD82B9"
                            }
                        }
                    },
                    "position": {
                        "x": 30,
                        "y": 658
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1,
                        "easing.type": 1,
                        "animation.type": 1,
                        "origin": 1,
                        "zOrder": 1,
                        "blendMode": 1,
                        "viewport.type": 1,
                        "positionOrigin": 1
                    },
                    "expressions": [],
                    "animations": [],
                    "numberDomain": "com.degica.vnm.default",
                    "domain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "24D4A226278BA647A33A28F6A2A661AD82B9",
                "expanded": true
            },
            {
                "id": "gs.Comment",
                "params": {
                    "text": "Next we are defining the card value, creating the deck of 312 cards and let each player draw a card. Check the common events in database to get more details about how this is done."
                },
                "indent": 0,
                "uid": "054C640E46DE4742AE68C5E95696AF3BEEFF",
                "expanded": true
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "EA262EC363CD654F3D9937A00800F3E0D003",
                    "parameters": {
                        "values": []
                    }
                },
                "indent": 0,
                "uid": "EEF882A350892049F089B9E748D0AB9A3CF7"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Start Game"
                },
                "indent": 0,
                "uid": "21177AD93C808446997A1BF27D516F452334"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "F3A2BB09608241476D6A14E5734C934B7AD7",
                    "parameters": {
                        "values": []
                    }
                },
                "indent": 0,
                "uid": "16BA77A98CBDC540B36AF51702205F6AEC04"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "1BB324253E74D2496F3827B9C8D8B161D47B",
                    "parameters": {
                        "values": []
                    }
                },
                "indent": 0,
                "uid": "8C28AAB32EEC964E4D299DD758F15E3083A6"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C48CA8CE6407B340821B8DF36A5071A28872",
                    "parameters": {
                        "values": []
                    }
                },
                "indent": 0,
                "uid": "60D58B1C80FE774B690996F0C71AB2B61A6E"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "F2C0CB484B7984427C498166E3B8869CB08C",
                    "parameters": {
                        "values": []
                    }
                },
                "indent": 0,
                "uid": "C81D2ADE4E246742394B1F448CFCA5B03E56"
            },
            {
                "id": "gs.Comment",
                "params": {
                    "text": "Our game logic starts at this label. We are showing two choices to let the player decide if they want to draw a card or stay. \n\nIf the player decides to draw a card, we remove the card from the deck and add it to the player's cards. Then we get the value for that card and add it to the player's points. If the player then has more than 21 points, they lost the game.\n\nIf the player decides to stay, we next let the dealer draw cards by doing the same procedure as we did for the player until the dealer's points reach 17 or more. If the dealer then has more than 21 points, they lost the game and the player wins. If both parties have less or equal 21 points, the different between both parties points is calculated to determine who is closer to 21.\n\nIf the player is closer, they will win the game. Otherwise the dealer will win the game. If both parties have the same amount of points, it counts as a draw."
                },
                "indent": 0,
                "uid": "A04B86BB73F59445A199D2E45659039C2F57",
                "expanded": true
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Start Round"
                },
                "indent": 0,
                "uid": "E590E53A71AB78442E3B90E772971DA0B8D8"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "commonEventId": null,
                        "label": "Take Card",
                        "switch": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": "3CA3FB291B99A5400A2AA4792B018B17778C",
                        "defaultText": {
                            "t": "Take Card",
                            "d": {
                                "eid": "9C55454E553EE74C316B47072831CB42C138"
                            }
                        }
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 1,
                    "box": {
                        "x": 510,
                        "y": 220,
                        "angle": 0,
                        "zoom": 1,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 160
                        },
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "9C55454E553EE74C316B47072831CB42C138"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "commonEventId": null,
                        "label": "Stay",
                        "switch": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": "B29046C08BE0A5420D097AD766F0CD3B5D45",
                        "defaultText": {
                            "t": "Stay",
                            "d": {
                                "eid": "4BA0E6C8519EF740AF29F9F3F303BB7A3FE0"
                            }
                        }
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 1,
                    "box": {
                        "x": 510,
                        "y": 284,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 255,
                            "y": 142,
                            "width": 300,
                            "height": 50,
                            "horizontalFlip": false,
                            "zoom": 1,
                            "angle": 0
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 160
                        },
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "4BA0E6C8519EF740AF29F9F3F303BB7A3FE0"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "C7B1BA6622D97941810972D2DC342956150A"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Take Card"
                },
                "indent": 0,
                "uid": "1ADEB3C0288BA4497F780E983EAD5A35998E"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C48CA8CE6407B340821B8DF36A5071A28872",
                    "parameters": {
                        "values": []
                    }
                },
                "indent": 0,
                "uid": "2C14281D338B21427C380C700A7E11200119"
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValue": 21,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0,
                    "valueType": 0,
                    "operation": 3
                },
                "indent": 0,
                "uid": "E5CEEB4A2E2E814B0B6B7EB8D044D4F9A0C7"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Stay",
                    "target": 0
                },
                "indent": 1,
                "uid": "7D318FCA286C6341CE2B9656EE4640F2E4B4"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Start Round",
                    "target": 0
                },
                "indent": 0,
                "uid": "D31D06A137164242F89941238244E34C6993"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Stay"
                },
                "indent": 0,
                "uid": "ACC18C490370954C355B7C228FC3C85B7B69"
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValue": 21,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0,
                    "valueType": 0,
                    "operation": 2
                },
                "indent": 0,
                "uid": "CCEE1A1B620C32486789B1C44DB173DB09DE"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "9DD31B69556541401B1BFF2964349D21006C",
                    "parameters": {
                        "values": [
                            "You Lose!"
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 1,
                "uid": "E4CD98E88A33C44367086704928683F46DE0"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Start Game",
                    "target": 0
                },
                "indent": 1,
                "uid": "C59F963442460046DE0BCC706388FE061BBE"
            },
            {
                "id": "gs.LoopCommand",
                "params": {},
                "indent": 0,
                "uid": "DCC24BC64CE445470989A7421DDFDD0067B3"
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "name": "Dealer Points",
                        "index": 3,
                        "scope": 1,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValue": 17,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0,
                    "valueType": 0,
                    "operation": 3,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 1,
                "uid": "2BAD14DD755B5745BB9B04818A53F42671F3"
            },
            {
                "id": "gs.BreakLoopCommand",
                "params": {},
                "indent": 2,
                "uid": "1EFA16827B1C0642333B56F365211C0A1149"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "F2C0CB484B7984427C498166E3B8869CB08C",
                    "parameters": {
                        "values": []
                    }
                },
                "indent": 1,
                "uid": "46D765265D73464C903B55848109D285F160"
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "name": "Dealer Points",
                        "index": 3,
                        "scope": 1,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValue": 21,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0,
                    "valueType": 0,
                    "operation": 2,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "9876F68D1731964DAB6BFEC69C560DC3B000"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "9DD31B69556541401B1BFF2964349D21006C",
                    "parameters": {
                        "values": [
                            "You Win!"
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 1,
                "uid": "B1FEB9C87C0B7249B4682E22DDEBBD9C36D6"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Start Game",
                    "target": 0
                },
                "indent": 1,
                "uid": "EB044ED7735DA143988B4E886170254F8DFF"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Dealer / Player Difference",
                        "index": 1,
                        "scope": 0
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "operation": 0,
                    "source": 0,
                    "sourceValue": {
                        "name": "Player Points",
                        "scope": 1,
                        "index": 0,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceRandom": {
                        "start": 0,
                        "end": 0
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "sourceReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "00FBFBC18EB9B747FB392944F8BFBD3087CA"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Dealer / Player Difference",
                        "index": 1,
                        "scope": 0
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "operation": 2,
                    "source": 0,
                    "sourceValue": {
                        "name": "Dealer Points",
                        "index": 3,
                        "scope": 1,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceRandom": {
                        "start": 0,
                        "end": 0
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "sourceReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "ABD76DAD3AAEB64545795B541AC4224F8DAF"
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "name": "Dealer / Player Difference",
                        "index": 1,
                        "scope": 0
                    },
                    "numberValue": 0,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0,
                    "valueType": 0,
                    "operation": 2,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "BD1C208E82C01647654A1F11F4B4A24D7DBF"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "9DD31B69556541401B1BFF2964349D21006C",
                    "parameters": {
                        "values": [
                            "You Win!"
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 1,
                "uid": "396094F9353E044AE71AA6011C49702EEABB"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Start Game",
                    "target": 0
                },
                "indent": 1,
                "uid": "07007E7742811748074831B6388DCA3AF8D6"
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "name": "Dealer / Player Difference",
                        "index": 1,
                        "scope": 0
                    },
                    "numberValue": 0,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0,
                    "valueType": 0,
                    "operation": 4,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "6C2F9F19496714472D5B535272020B346D09"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "9DD31B69556541401B1BFF2964349D21006C",
                    "parameters": {
                        "values": [
                            "You Lose!"
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 1,
                "uid": "119DB9159239274DCD5A4C3546A25434433C"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Start Game",
                    "target": 0
                },
                "indent": 1,
                "uid": "0A728B275A566746F818FAA3B1BA1D3D8EED"
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "name": "Dealer / Player Difference",
                        "index": 1,
                        "scope": 0
                    },
                    "numberValue": 0,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0,
                    "valueType": 0,
                    "operation": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "96A25F3439644245F7399746E86F93CBBC47"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "9DD31B69556541401B1BFF2964349D21006C",
                    "parameters": {
                        "values": [
                            "Draw!"
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 1,
                "uid": "69AAD88F55DDE84E3519FC88A53278CDB3BE"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Start Game",
                    "target": 0
                },
                "indent": 1,
                "uid": "EB171ACE214D7044702A98957BA8CFA4D4A6"
            }
        ],
        "livePreviewDisabled": false,
        "booleanVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "numberVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "stringVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ]
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "chapterUid",
        "order"
    ]
}