GS.dataCache['9DD31B69556541401B1BFF2964349D21006C'] = {
    "uid": "9DD31B69556541401B1BFF2964349D21006C",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Show Game Result",
        "type": "data_record",
        "order": 5,
        "category": "commonEvents",
        "id": "9DD31B69556541401B1BFF2964349D21006C",
        "isFolder": false,
        "parentId": "49738AEB1E5AE24DEE4AD903FEA2BCEA2443",
        "data": {
            "name": "Show Game Result",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [
                {
                    "label": "Message",
                    "type": 3,
                    "stringVariable": {
                        "name": "Message",
                        "index": 0,
                        "scope": 0
                    },
                    "stringValueType": "text"
                }
            ],
            "commands": [
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "This common event shows the game result message in the center of the screen. The actual message can be passed as a parameter \"Message\". The \"Show Text\" command then displays that parameter \"Message\" on screen using the Text Code {LT:1}. After that the common event waits for the user to press the left mouse button to continue and to erase the message slowly."
                    },
                    "indent": 0,
                    "uid": "D4F38F1C77B00146820858872C65A6395491",
                    "expanded": true
                },
                {
                    "id": "gs.ChangeTextSettings",
                    "params": {
                        "number": 3,
                        "padding": [
                            6,
                            0,
                            6,
                            0
                        ],
                        "font": "Times New Roman",
                        "size": 80,
                        "outline": 1,
                        "shadow": 0,
                        "outlineColor": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 255
                        },
                        "shadowColor": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 255
                        },
                        "fieldFlags": {
                            "font": 0,
                            "size": 0,
                            "outline": 0,
                            "outlineColor": 1,
                            "shadow": 1,
                            "shadowColor": 1,
                            "padding.0": 1,
                            "padding.1": 1,
                            "padding.2": 1,
                            "padding.3": 1,
                            "lineSpacing": 1,
                            "outlineSize": 1,
                            "shadowOffsetX": 1,
                            "shadowOffsetY": 1,
                            "bold": 1,
                            "italic": 1,
                            "underline": 1,
                            "smallCaps": 1,
                            "strikeThrough": 1
                        },
                        "lineSpacing": 0,
                        "outlineSize": 4,
                        "shadowOffsetX": 1,
                        "shadowOffsetY": 1,
                        "bold": 0,
                        "italic": 0,
                        "underline": 0,
                        "smallCaps": 0,
                        "strikeThrough": 0,
                        "numberDomain": "com.degica.vnm.default",
                        "domain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "998A8C7E96126446BF194C47223861D73248",
                    "expanded": false
                },
                {
                    "id": "gs.ShowText",
                    "params": {
                        "viewport": {
                            "type": "ui"
                        },
                        "predefinedPositionId": 8,
                        "positionType": 0,
                        "number": 3,
                        "duration": 0,
                        "waitForCompletion": 1,
                        "blendMode": 0,
                        "origin": 0,
                        "zOrder": 0,
                        "text": {
                            "lcId": "22E2F4E307E920435B499185C889DCA7923F",
                            "defaultText": "{Y:C}{LT:1}{Y:N}"
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
                            "duration": 1,
                            "easing.type": 1,
                            "animation.type": 0,
                            "origin": 1,
                            "zOrder": 1,
                            "blendMode": 1,
                            "viewport.type": 1
                        },
                        "expressions": [],
                        "animations": [],
                        "numberDomain": "com.degica.vnm.default",
                        "domain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "D3B8C7EF8670E047D0789FF49F6504600294",
                    "expanded": false
                },
                {
                    "id": "gs.WaitForInput",
                    "params": {
                        "key": 1,
                        "state": 1,
                        "action": {
                            "type": 0,
                            "data": {
                                "label": "$$C50EA7EF0592134BEF59E098BD7961D34EB4",
                                "commonEventId": 0
                            }
                        }
                    },
                    "indent": 0,
                    "uid": "BAFD62209517C44205390979211674DD834D"
                },
                {
                    "id": "gs.EraseText",
                    "params": {
                        "number": 3,
                        "duration": 0,
                        "waitForCompletion": 1,
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
                            "animation.type": 0
                        },
                        "numberDomain": "com.degica.vnm.default",
                        "domain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "C2CC7B377CEBF141FD6B81D55F2D7A06D975",
                    "expanded": false
                }
            ],
            "index": "9DD31B69556541401B1BFF2964349D21006C",
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
                    "name": "Message",
                    "index": 0,
                    "scope": 0
                }
            ],
            "defaultExpressionId": "BF7CB12110894142C299D341A545C910AA86"
        },
        "localizableStrings": {
            "22E2F4E307E920435B499185C889DCA7923F": {
                "t": "{Y:C}{LT:1}{Y:N}",
                "d": {
                    "eid": "D3B8C7EF8670E047D0789FF49F6504600294"
                }
            }
        }
    },
    "summary": [
        "name",
        "type",
        "order"
    ]
}