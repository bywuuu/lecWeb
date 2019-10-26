GS.dataCache['F3A2BB09608241476D6A14E5734C934B7AD7'] = {
    "uid": "F3A2BB09608241476D6A14E5734C934B7AD7",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Reset Game",
        "type": "data_record",
        "order": 6,
        "category": "commonEvents",
        "id": "F3A2BB09608241476D6A14E5734C934B7AD7",
        "isFolder": false,
        "parentId": "49738AEB1E5AE24DEE4AD903FEA2BCEA2443",
        "data": {
            "name": "Reset Game",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "Here we reset the game so we can play it again without bugs. We have to clean up the screen and remove all card pictures. We use the length of the player's card list to know how many pictures are on the screen and then we remove each picture with a loop. We do the same with the dealer's cards. After that, we have to reset the deck, player's cards, player's points, dealer's cards and dealers points. At the end we refresh the text labels for the points to make sure they display 0 points. "
                    },
                    "indent": 0,
                    "uid": "B2D9AEB803545644CD18974782CA9E83FD62",
                    "expanded": true
                },
                {
                    "id": "gs.ListLength",
                    "params": {
                        "listVariable": {
                            "name": "Player Cards",
                            "index": 1,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "Card Count",
                            "index": 1,
                            "scope": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "EE925395340CB549148B113775FA7F1C1243"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Picture ID",
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
                    "uid": "25C267CF2C0667492C5A90879070343454A3"
                },
                {
                    "id": "gs.LoopCommand",
                    "params": {},
                    "indent": 0,
                    "uid": "5E6C1BBB3F43384A188BBA268CEA418155FD"
                },
                {
                    "id": "gs.ErasePicture",
                    "params": {
                        "number": {
                            "name": "Card",
                            "index": 0,
                            "scope": 0
                        },
                        "duration": 0,
                        "waitForCompletion": 1,
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
                            "duration": 0
                        },
                        "numberDomain": "com.degica.vnm.default",
                        "domain": "com.degica.vnm.default"
                    },
                    "indent": 1,
                    "uid": "8B0185DE4D3CF3464E8A30D5072CB0556FB4"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Card",
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
                    "uid": "48132C771A78354C1959ED37080CE84E2B1D"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Card",
                            "index": 0,
                            "scope": 0
                        },
                        "numberValue": {
                            "name": "Card Count",
                            "index": 1,
                            "scope": 0
                        },
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
                    "uid": "8CA868705669D849725A6FD85E9AE80697E7"
                },
                {
                    "id": "gs.BreakLoopCommand",
                    "params": {},
                    "indent": 2,
                    "uid": "623923C314220444A58BAA70B9F1935CBD2C"
                },
                {
                    "id": "gs.ListLength",
                    "params": {
                        "listVariable": {
                            "name": "Dealer Cards",
                            "index": 2,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "Card Count",
                            "index": 1,
                            "scope": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "203B08A91B72384FA559E0F94988418BA5FC"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Card",
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
                        "sourceValue": 50,
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
                    "uid": "8684D65B1F52F348D69BA56418BFEF8DA4EF"
                },
                {
                    "id": "gs.LoopCommand",
                    "params": {},
                    "indent": 0,
                    "uid": "BC7CAA3C5D2A394958489AB3E3760D5A8089"
                },
                {
                    "id": "gs.ErasePicture",
                    "params": {
                        "number": {
                            "name": "Card",
                            "index": 0,
                            "scope": 0
                        },
                        "duration": 0,
                        "waitForCompletion": 1,
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
                            "duration": 0
                        },
                        "numberDomain": "com.degica.vnm.default",
                        "domain": "com.degica.vnm.default"
                    },
                    "indent": 1,
                    "uid": "3741605F86639541B82A5C4789F62FE472FA"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Card",
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
                    "uid": "04A1D80710395741320AEB50BDAB573018F5"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Card Count",
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
                    "uid": "0A9DEEF02A64F34C999A35219D2DF34568E7"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Card Count",
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
                        "operation": 5,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 1,
                    "uid": "B1162284954F32413259FD7234DBFE98F1D8"
                },
                {
                    "id": "gs.BreakLoopCommand",
                    "params": {},
                    "indent": 2,
                    "uid": "4CEE57C7033D9243622B4E932B7336320A3C"
                },
                {
                    "id": "gs.ListClear",
                    "params": {
                        "listVariable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 0,
                    "uid": "AE6B00B34B24A34C868AA4C567095AE12D38"
                },
                {
                    "id": "gs.ListClear",
                    "params": {
                        "listVariable": {
                            "name": "Player Cards",
                            "index": 1,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "8EE6A5AE7754E84AD9496A779FF44454D9D6"
                },
                {
                    "id": "gs.ListClear",
                    "params": {
                        "listVariable": {
                            "name": "Dealer Cards",
                            "index": 2,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "47541A9354EE33455B5BA8B296ADC21CB2FA"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "scope": 1,
                            "index": 0,
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
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "sourceReferenceDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "2466FEDC670CC44D7689DC07458B25DBEFCD"
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
                    "uid": "EB09F6825944C34EA91A2E72E51DF313156B"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Card",
                            "scope": 1,
                            "index": 1,
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
                    "uid": "D8CFE32310EEF648105B1F60C5D80EB6C8CE"
                },
                {
                    "id": "gs.RefreshText",
                    "params": {
                        "number": 0,
                        "numberDomain": "com.degica.vnm.default",
                        "domain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "42677F867A6378402778B098E34463795FD0"
                },
                {
                    "id": "gs.RefreshText",
                    "params": {
                        "number": 1,
                        "numberDomain": "com.degica.vnm.default",
                        "domain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "E11AB07B8A57124B8E282251498081D87C22"
                }
            ],
            "index": "F3A2BB09608241476D6A14E5734C934B7AD7",
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
                    "name": "Picture ID",
                    "index": 0,
                    "scope": 0
                },
                {
                    "name": "Card Count",
                    "index": 1,
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