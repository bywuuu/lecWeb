GS.dataCache['C48CA8CE6407B340821B8DF36A5071A28872'] = {
    "uid": "C48CA8CE6407B340821B8DF36A5071A28872",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Draw Player Card",
        "type": "data_record",
        "order": 1,
        "category": "commonEvents",
        "id": "C48CA8CE6407B340821B8DF36A5071A28872",
        "isFolder": false,
        "parentId": "49738AEB1E5AE24DEE4AD903FEA2BCEA2443",
        "data": {
            "name": "Draw Player Card",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "Here we let the player draw a card. So we are drawing a card from the deck using \"Pop from List\" and store that drawn card in \"Card\" variable. Next let that drawn card appear at the player's side on screen by calling the \"Show Player Card\" common event. Next we add the drawn card to the player's card list and also get the value for it and add that value to the player's points. At the end we refresh the UI text so it displays the correct points on screen."
                    },
                    "uid": "885020F77DD0D246F81821764EC5DB1D5DE4",
                    "indent": 0,
                    "expanded": true
                },
                {
                    "id": "gs.ListPop",
                    "params": {
                        "valueType": 0,
                        "listVariable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "Card",
                            "scope": 1,
                            "index": 1,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "F571CAEE85FF284CF4984029E9EF5EEC89B0"
                },
                {
                    "id": "gs.CallCommonEvent",
                    "params": {
                        "commonEventId": "03CDEA812BBAF3462489C9660D201864D4E3",
                        "parameters": {
                            "values": []
                        }
                    },
                    "indent": 0,
                    "uid": "F367CA168CB48648EC68E144B2CD231BE74E"
                },
                {
                    "id": "gs.ListAdd",
                    "params": {
                        "valueType": 0,
                        "listVariable": {
                            "name": "Player Cards",
                            "index": 1,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": {
                            "name": "Card",
                            "scope": 1,
                            "index": 1,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "stringValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "listValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "B2D8AAEA5F32C842FD48381712BA05F4462E"
                },
                {
                    "id": "gs.ListValueAt",
                    "params": {
                        "valueType": 0,
                        "index": {
                            "name": "Card",
                            "scope": 1,
                            "index": 1,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "Card Value",
                            "index": 2,
                            "scope": 1,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "4E5F39847F4972484139AE46879431A78F56"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Player Points",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
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
                        "operation": 1,
                        "source": 0,
                        "sourceValue": {
                            "name": "Card Value",
                            "index": 2,
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
                    "uid": "8BD54D2036EDF74BE83AE2800F8AA5F644F6"
                },
                {
                    "id": "gs.RefreshText",
                    "params": {
                        "number": 1,
                        "numberDomain": "com.degica.vnm.default",
                        "domain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "2FDBB6745A4751454409E85548CA9D5366B5"
                }
            ],
            "index": "C48CA8CE6407B340821B8DF36A5071A28872",
            "booleanVariables": [
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
            ],
            "singleInstance": true,
            "defaultExpressionId": "BF7CB12110894142C299D341A545C910AA86"
        },
        "localizableStrings": {}
    },
    "summary": [
        "name",
        "type",
        "order"
    ]
}