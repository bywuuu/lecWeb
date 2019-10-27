GS.dataCache['1BB324253E74D2496F3827B9C8D8B161D47B'] = {
    "uid": "1BB324253E74D2496F3827B9C8D8B161D47B",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Create Deck",
        "type": "data_record",
        "order": 0,
        "category": "commonEvents",
        "id": "1BB324253E74D2496F3827B9C8D8B161D47B",
        "isFolder": false,
        "parentId": "49738AEB1E5AE24DEE4AD903FEA2BCEA2443",
        "data": {
            "name": "Create Deck",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "Here we are creating a deck of 312 game cards taken from 6 card-packs with 52 different cards each. We create a global list variable \"Cards\" which represents our deck as well as a local number variable \"Deck Size\" to keep track of the current size of the deck easily. We will represent each card with a number. Since we have 52 different cards we will use the numbers 0 to 51 to identify each card. For example: The number 0 would be the cross-ace, 1 would be cross-2, 12 would be cross-king and 13 would be caro-ace. Take a look at the cards-sheet image and read it from left-to-right, top-to-bottom to see what number represents what card.\n\nNext we create a loop to fill our deck with 312 cards. \n\nAt the end we shuffle the deck using \"Shuffle List\" command."
                    },
                    "indent": 0,
                    "uid": "B22496045EA2644D5138ACE8B8B36D60ECDE",
                    "expanded": true
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Card",
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
                        "sourceValue": 0,
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
                    "uid": "527F5C8C8FA2D3465E2BDB12CF7046A9E513"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Deck Size",
                            "index": 0,
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
                        "sourceValue": 0,
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
                    "uid": "A51440FD1491784AE868E681A4B829AF09B1"
                },
                {
                    "id": "gs.LoopCommand",
                    "params": {},
                    "indent": 0,
                    "uid": "31F40A361DB9D741602ACCF47952944662E3"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Card",
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
                            "name": "Card Counter",
                            "index": 0,
                            "scope": 0
                        },
                        "sourceRandom": {
                            "start": 0,
                            "end": 51
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
                    "indent": 1,
                    "uid": "60C9470656A9C446027B9DB1AD4954B8EF7E"
                },
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "Here we are doing a Mod 52 operation. This is a little trick to make things easier because we only have 52 different card types, we are using the current size of the Deck as the card-type number. That would work perfectly for a 52 cards deck. However, our deck has 312 cards made from six 52-card packs. Means if our deck-size reaches 52, 53, or 54, we would add card-types to it which actually do not exists since we only have 52 different card-types.\n\nSo we divide the current deck size by 52 and use the rest of the division(Mod operation) as the current card-type. Means if the deck size reaches 52, 53, 54 the result of the Mod operation will be 0, 1, 2. So whenever the value goes over 51, the Mod operation makes sure that it repeats and starts back at 0 and the value can never be greater than 51.\n\nThat creates the following card-types in our Deck: \n\n0\n1\n...\n51\n0\n1\n...\n51\n0\n1\n...\n51\n0\n1\n...\n51\n0\n1\n...\n51\n0\n1\n...\n51\n\nThe \"...\" means \"2 to 50\". So after that our deck contains 312 cards from 6 packs with 52 different cards each. Perfectly in order, so we need to shuffle it at the end of course."
                    },
                    "indent": 1,
                    "uid": "845060F337DFE948D32BEAF506040F1CEDEB",
                    "expanded": false
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Random Card",
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
                        "operation": 5,
                        "source": 0,
                        "sourceValue": 52,
                        "sourceRandom": {
                            "start": 0,
                            "end": 51
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
                    "indent": 1,
                    "uid": "96E0AA358FDE72405718D307A15C08404708"
                },
                {
                    "id": "gs.ListAdd",
                    "params": {
                        "valueType": 0,
                        "listVariable": {
                            "name": "Cards",
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": {
                            "name": "Card",
                            "index": 1,
                            "scope": 0
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
                    "uid": "D13DAF057D2A0146D059553816C647749882",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Card Counter",
                            "index": 0,
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
                        "operation": 1,
                        "source": 0,
                        "sourceValue": 1,
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
                    "indent": 1,
                    "uid": "1E973A7202541142B85B7A194D96718F387C"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Card Counter",
                            "index": 0,
                            "scope": 0
                        },
                        "numberValue": 312,
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
                    "indent": 1,
                    "uid": "212BEBAA4665834E1249DBF5F9700C137D0B"
                },
                {
                    "id": "gs.BreakLoopCommand",
                    "params": {},
                    "indent": 2,
                    "uid": "5F07620C3BC5A64B8509290605C48175145B"
                },
                {
                    "id": "gs.ListShuffle",
                    "params": {
                        "listVariable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 0,
                    "uid": "09534E011C93B9432D98C9B11DC58EF5129C"
                }
            ],
            "index": "1BB324253E74D2496F3827B9C8D8B161D47B",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "numberVariables": [
                {
                    "name": "Deck Size",
                    "index": 0,
                    "scope": 0
                },
                {
                    "name": "Card",
                    "index": 1,
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