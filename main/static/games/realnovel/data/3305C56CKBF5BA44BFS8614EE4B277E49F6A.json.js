GS.dataCache['3305C56CKBF5BA44BFS8614EE4B277E49F6A'] = {
    "uid": "3305C56CKBF5BA44BFS8614EE4B277E49F6A",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Sample Scene",
        "type": "vn.scene",
        "parentId": "3EB0897BK4EAAA43A8SA91DEE65923801AB3",
        "chapterUid": "3EB0897BK4EAAA43A8SA91DEE65923801AB3",
        "order": 0,
        "commands": [
            {
                "id": "gs.Comment",
                "params": {
                    "text": "In scene we let Jane ask if the user wants to play Black Jack and if the users responds with \"Yes\" we will change to our \"Black Jack\" scene to start the Black Jack mini game."
                },
                "indent": 0,
                "uid": "81D213694CB815463B4829368FB1DA2AA9E3",
                "expanded": true
            },
            {
                "id": "gs.PlayMusic",
                "params": {
                    "music": {
                        "name": "Tutorial_-_Good_Mood",
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "fadeInDuration": 0,
                    "playTime": {
                        "min": 10,
                        "max": 30
                    },
                    "playRange": {
                        "start": 10,
                        "end": 20
                    },
                    "playType": 0,
                    "fieldFlags": {
                        "music.volume": 1,
                        "music.playbackRate": 1,
                        "fadeInDuration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "loop": 1,
                    "waitForCompletion": 0
                },
                "indent": 0,
                "uid": "81584F2656C1D2401E5B01F4B467B7E426F9"
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "graphic": {
                        "name": "Bench_Morning",
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
                        "loopVertical": 1,
                        "loopHorizontal": 1,
                        "viewport.type": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "viewport": {
                        "type": "scene"
                    }
                },
                "indent": 0,
                "uid": "11CAF4887C77414E518B4FF5B4C99FAC4BD8",
                "expanded": false
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "predefinedPositionId": 1,
                    "expressionId": null,
                    "characterId": "D817084774AB154CCE68B7B2587B0058EBFA",
                    "zOrder": 0,
                    "origin": 0,
                    "blendMode": 0,
                    "positionType": 0,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "animation": {
                        "type": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 0
                    },
                    "duration": 0,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "duration": 1,
                        "easing.type": 1,
                        "animation.type": 1,
                        "motionBlur.enabled": 1,
                        "origin": 1,
                        "zOrder": 1,
                        "blendMode": 1,
                        "viewport.type": 1
                    },
                    "viewport": {
                        "type": "scene"
                    }
                },
                "indent": 0,
                "uid": "2D4A01253DE3D447FD1B9D8213C0C90A18CF",
                "expanded": false
            },
            {
                "id": "vn.MessageBoxVisibility",
                "params": {
                    "duration": 30,
                    "waitForCompletion": true,
                    "visible": 1,
                    "animation": {
                        "type": 0,
                        "movement": 3,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "duration": 1
                    },
                    "id": "messageBox"
                },
                "indent": 0,
                "uid": "DCDA1E2E60D6C849B48AC3902F17BE0D5007"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "D700A9F7718E204480781CD1762295D8199B",
                        "defaultText": "Hey! Do you want to play a card game with me? It's similar to Black Jack!"
                    },
                    "position": 0,
                    "characterId": "D817084774AB154CCE68B7B2587B0058EBFA",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "AE1D9B194E38874E6B99C335DA1AA7359B3A",
                "expanded": true
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "question"
                },
                "indent": 0,
                "uid": "502CE4827082F24129380D9546D8D91C59DA"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "commonEventId": null,
                        "label": "play",
                        "switch": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": "FB98624A424A1644221BEA057F5995A600AB",
                        "defaultText": "Let's play!"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "3986B47294E5B74B7F6911863BF677CA1DDA"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "commonEventId": null,
                        "label": "no",
                        "switch": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": "1D8D51AA7ED1E143777BCF64B14389D4DCD4",
                        "defaultText": "No thanks!"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "BEDE347382D4774A5D48A796CF4A9D3990D8"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "CEB055244144574DA168F54861678B577D71"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "play"
                },
                "indent": 0,
                "uid": "BEFBD6AA945B0646A1198718AE53F4CFC1D3"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "E0573F945FDCA547DA2964F4045866DD29FF",
                        "name": "Black Jack"
                    },
                    "duration": 20,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "savePrevious": 0
                },
                "indent": 0,
                "uid": "4F7011C89E91C540173A0176253C08BF6194"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "no"
                },
                "indent": 0,
                "uid": "223D38B80FC46844884990D8302249E79418"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "1964F58C6B23034DB908FEF4179F826AC342",
                        "defaultText": "Why not? Don't worry, it's easy! Come on, think about it! It will be fun!"
                    },
                    "position": 0,
                    "characterId": "BA77A09EK7F14A4C2BSA11BE8CC099F00810",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "B785E55E7CA32442E13BBA16BD5F8E51A0D8",
                "expanded": true
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "question",
                    "target": 0
                },
                "indent": 0,
                "uid": "4A01AADF76EDC347581B914629A58B049690"
            }
        ],
        "background": {
            "graphic": {
                "name": ""
            },
            "offsetX": 0,
            "offsetY": 0
        },
        "localizableStrings": {
            "D700A9F7718E204480781CD1762295D8199B": {
                "t": "Hey! Do you want to play a card game with me? It's similar to Black Jack!",
                "d": {
                    "cid": "D817084774AB154CCE68B7B2587B0058EBFA",
                    "eid": "AE1D9B194E38874E6B99C335DA1AA7359B3A"
                }
            },
            "FB98624A424A1644221BEA057F5995A600AB": {
                "t": "Let's play!",
                "d": {
                    "eid": "3986B47294E5B74B7F6911863BF677CA1DDA"
                }
            },
            "1D8D51AA7ED1E143777BCF64B14389D4DCD4": {
                "t": "No thanks!",
                "d": {
                    "eid": "BEDE347382D4774A5D48A796CF4A9D3990D8"
                }
            },
            "1964F58C6B23034DB908FEF4179F826AC342": {
                "t": "Why not? Don't worry, it's easy! Come on, think about it! It will be fun!",
                "d": {
                    "cid": "BA77A09EK7F14A4C2BSA11BE8CC099F00810",
                    "eid": "B785E55E7CA32442E13BBA16BD5F8E51A0D8"
                }
            }
        },
        "numberVariables": [
            {
                "name": "My Local",
                "index": 0,
                "scope": 0
            },
            {
                "name": "",
                "index": 1,
                "scope": 1,
                "domain": "com.degica.vnm.default"
            },
            {
                "name": "Super Loc",
                "index": 2,
                "scope": 0
            }
        ],
        "booleanVariables": [
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
        ],
        "listVariables": [
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