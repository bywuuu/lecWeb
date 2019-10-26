GS.dataCache['F2C0CB484B7984427C498166E3B8869CB08C'] = {
    "uid": "F2C0CB484B7984427C498166E3B8869CB08C",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Draw Dealer Card",
        "type": "data_record",
        "order": 2,
        "category": "commonEvents",
        "id": "F2C0CB484B7984427C498166E3B8869CB08C",
        "isFolder": false,
        "parentId": "49738AEB1E5AE24DEE4AD903FEA2BCEA2443",
        "data": {
            "name": "Draw Dealer Card",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "Here we let the dealer draw a card. So we are drawing a card from the deck using \"Pop from List\" and store that drawn card in \"Card\" variable. Next let that drawn card appear at the dealer's side on screen by calling the \"Show Dealer Card\" common events. Next we add the drawn card to the dealer's card list and also get the value for it and add that value to the dealer's points. At the end we refresh the UI text so it displays the correct points on screen."
                    },
                    "uid": "10592BD707861745D68AC631F88A6923C10E",
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
                    "uid": "6EED2E4F4D43424CF8196EF029E6FFFE3282"
                },
                {
                    "id": "gs.CallCommonEvent",
                    "params": {
                        "commonEventId": "1B8615242174F649486891095B3710889F58",
                        "parameters": {
                            "values": []
                        }
                    },
                    "indent": 0,
                    "uid": "11E3FC4A8C79C141AE38D15768DBDBD57509"
                },
                {
                    "id": "gs.ListAdd",
                    "params": {
                        "valueType": 0,
                        "listVariable": {
                            "name": "Dealer Cards",
                            "index": 2,
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
                    "uid": "DB8BDDBB354323464E1BC328D32FC63631FB"
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
                    "uid": "B18CF68E6E5FB14C215A01F47D6F6217413D"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Dealer Points",
                            "index": 3,
                            "scope": 1,
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
                    "uid": "6D387B9B7D1E04412D297CD8EFC538C5F005"
                },
                {
                    "id": "gs.RefreshText",
                    "params": {
                        "number": 0,
                        "numberDomain": "com.degica.vnm.default",
                        "domain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "C0D15A1D55DD804D806A9BB1F683B14879D3"
                }
            ],
            "index": "F2C0CB484B7984427C498166E3B8869CB08C",
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