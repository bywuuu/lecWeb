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
                        "loopHorizontal": 1
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
                "id": "vn.L2DJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 6,
                    "characterId": "AB6AC0D89A68C143E328CA74B4BB26755D07",
                    "model": {
                        "name": "Epsilon.model",
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
                    "zOrder": 0,
                    "origin": 0,
                    "blendMode": 0,
                    "positionType": 1,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": -21,
                        "y": 51,
                        "zoom": {
                            "x": 1,
                            "y": 1,
                            "d": 1
                        }
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
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "duration": 1,
                        "easing.type": 1,
                        "animation.type": 0,
                        "motionBlur.enabled": 1,
                        "origin": 1,
                        "zOrder": 1,
                        "blendMode": 1,
                        "viewport.type": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "011374231EB874497C2976D16AC6DC12E6CF",
                "indent": 0,
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
                        "lcId": "5AB104D838F412402599D3D66635FF234A10",
                        "defaultText": "Hello, nice day out there!"
                    },
                    "position": 0,
                    "characterId": "AB6AC0D89A68C143E328CA74B4BB26755D07",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "57D92F991B0E984F556A3C6912500957407F",
                "expanded": true
            },
            {
                "id": "gs.ShowVideo",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "positionType": 0,
                    "number": 0,
                    "blendMode": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "video": {
                        "name": "rain2.webmhd",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "position": {
                        "x": 0,
                        "y": 0
                    },
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
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "loop": 1
                },
                "uid": "4D6EEBCC1EF59242A178C5A6909EC0FD4116",
                "indent": 0
            },
            {
                "id": "vn.L2DMotion",
                "params": {
                    "characterId": "AB6AC0D89A68C143E328CA74B4BB26755D07",
                    "loop": 0,
                    "fadeInTime": 1000,
                    "data": {
                        "model": {
                            "name": "Epsilon.model",
                            "hue": 0,
                            "opacity": 255,
                            "blending": 0,
                            "tone": {
                                "red": 0,
                                "green": 0,
                                "blue": 0
                            }
                        },
                        "motion": "Epsilon_m_06.mtn",
                        "position": {
                            "x": 0,
                            "y": 0,
                            "zoom": {
                                "x": 1,
                                "y": 1,
                                "d": 1
                            }
                        }
                    },
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "fadeInTime": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "3AA091437EC26843CA68B045BC6F4C13F01F",
                "indent": 0
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
                        "lcId": "A4404C878AFDC9456B184751010408439215",
                        "defaultText": "Ow, a rainstorm!"
                    },
                    "position": 0,
                    "characterId": "AB6AC0D89A68C143E328CA74B4BB26755D07",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "3AA38BAE7EAE184F411ACE832A7E356BEDB5",
                "expanded": true
            },
            {
                "id": "vn.L2DJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 4,
                    "characterId": "BD57DD5D6E79124D94396CF100590D3A5FD4",
                    "model": {
                        "name": "haru_02.model",
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
                    "zOrder": 0,
                    "origin": 0,
                    "blendMode": 0,
                    "positionType": 1,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": 833,
                        "y": 119,
                        "zoom": {
                            "x": 1,
                            "y": 1,
                            "d": 1
                        }
                    },
                    "animation": {
                        "type": 1,
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
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "5A92247D42A80341523A4AD338C6C3134655",
                "indent": 0
            },
            {
                "id": "vn.L2DMotion",
                "params": {
                    "characterId": "BD57DD5D6E79124D94396CF100590D3A5FD4",
                    "loop": 0,
                    "fadeInTime": 1000,
                    "data": {
                        "model": {
                            "name": "haru_02.model",
                            "hue": 0,
                            "opacity": 255,
                            "blending": 0,
                            "tone": {
                                "red": 0,
                                "green": 0,
                                "blue": 0
                            }
                        },
                        "motion": "tapBody_09.mtn",
                        "position": {
                            "x": 0,
                            "y": 0,
                            "zoom": {
                                "x": 1,
                                "y": 1,
                                "d": 1
                            }
                        }
                    },
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "fadeInTime": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "2CDC6A232AB83642E72AC296F935F2093E50",
                "indent": 0
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
                        "lcId": "63E5AE881A7E1049E26851C72C5A1223A701",
                        "defaultText": "Epsilon, come on, get out of the rain !"
                    },
                    "position": 0,
                    "characterId": "BD57DD5D6E79124D94396CF100590D3A5FD4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "BF944CFC9A38C1485E1BF55809FCBBE3F6BD",
                "expanded": true
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
            "5AB104D838F412402599D3D66635FF234A10": {
                "t": "Hello, nice day out there!",
                "d": {
                    "cid": "AB6AC0D89A68C143E328CA74B4BB26755D07",
                    "eid": "57D92F991B0E984F556A3C6912500957407F"
                }
            },
            "A4404C878AFDC9456B184751010408439215": {
                "t": "Ow, a rainstorm!",
                "d": {
                    "cid": "AB6AC0D89A68C143E328CA74B4BB26755D07",
                    "eid": "3AA38BAE7EAE184F411ACE832A7E356BEDB5"
                }
            },
            "63E5AE881A7E1049E26851C72C5A1223A701": {
                "t": "Epsilon, come on, get out of the rain !",
                "d": {
                    "cid": "BD57DD5D6E79124D94396CF100590D3A5FD4",
                    "eid": "BF944CFC9A38C1485E1BF55809FCBBE3F6BD"
                }
            },
            "DD657117290A794C346AE07758C3BF3C98FF": {
                "t": "こんにちは、お元気ですか？",
                "d": {
                    "cid": "D817084774AB154CCE68B7B2587B0058EBFA",
                    "eid": "AE1D9B194E38874E6B99C335DA1AA7359B3A"
                }
            },
            "4650A74483FDA54B2D7AF0E331EDFB30A23D": {
                "t": "こんにちは、お元気ですか？",
                "d": {
                    "cid": "D817084774AB154CCE68B7B2587B0058EBFA",
                    "eid": "AE1D9B194E38874E6B99C335DA1AA7359B3A"
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