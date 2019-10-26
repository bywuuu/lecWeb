GS.dataCache['EA262EC363CD654F3D9937A00800F3E0D003'] = {
    "uid": "EA262EC363CD654F3D9937A00800F3E0D003",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Define Card Values",
        "type": "data_record",
        "order": 8,
        "category": "commonEvents",
        "id": "EA262EC363CD654F3D9937A00800F3E0D003",
        "isFolder": false,
        "parentId": "49738AEB1E5AE24DEE4AD903FEA2BCEA2443",
        "data": {
            "name": "Define Card Values",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "Here we define the value for each of the 52 different cards. That is necessary because VN Maker does not know that by default. We are representing each card-type with a number between 0-51 so we just create a list with 52 entries where each entry represents a card-type and stores the card's value. To keep the game logic simple, we set a fixed value of 11 for the ace instead of calculating it dynamically."
                    },
                    "indent": 0,
                    "uid": "E2146CDD8E6357459D891C26B82DD8E9B466",
                    "expanded": true
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 0,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 11,
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
                    "uid": "D49480F768F02744C31B0FB868C5626E4032"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 1,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 2,
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
                    "uid": "2741B5169D044546312A00B277A44267D5D6"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 2,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 3,
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
                    "uid": "6B8B16092121734FCA586632B845BE270E4D"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 3,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 4,
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
                    "uid": "D7E1725762972647CD5A7B62C0E0D2807DA7"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 4,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 5,
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
                    "uid": "756EE6DB61381247A71930F8B278D64321C3"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 5,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 6,
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
                    "uid": "42C2B9135EAA734ECB6963563120BF909FB5"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 6,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 7,
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
                    "uid": "A84DCF6D398DC645385955D85C7A943FD471"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 7,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 8,
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
                    "uid": "B42267F01BFEA74236293B035EAE16C52C07"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 8,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 9,
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
                    "uid": "869CC54950014146983BCA6708CA4A198E18"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 9,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 10,
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
                    "uid": "696FB76B81848741F528701125A718C6F6B3"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 10,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 10,
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
                    "uid": "39F6B71F0FE0214C6318B3E73C2FB6C74D70"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 11,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 10,
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
                    "uid": "61AAE992243506441C1B6CA8131038BB6D3B"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 12,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 10,
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
                    "uid": "D6BD65C01A57984EF3981D82A80E11636991"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 13,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 11,
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
                    "uid": "33A7F52F5AE5034C075BABF900DA1DCFE17E"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 14,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 2,
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
                    "uid": "454236F782BB7142302AD8B64264CAEA7089"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 15,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 3,
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
                    "uid": "BB38F3AC8D63D84F4B48ACB7821B9F0C0440"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 16,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 4,
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
                    "uid": "F717D7597F458844274B76F65B276F10A636"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 17,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 5,
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
                    "uid": "8BA15B1003D43143A689BDA33D440DB8D6A5"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 18,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 6,
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
                    "uid": "DA628EF20947E1488449C3D3F2E09AAED1CA"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 19,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 7,
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
                    "uid": "FA94525F5348C644193B3D16C8AFFF64FF13"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 20,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 8,
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
                    "uid": "259E79C7239DB147357922569896214B126F"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 21,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 9,
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
                    "uid": "B3B16B118E5D5640D319F8C77534B0F2820C"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 22,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 10,
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
                    "uid": "B9BD33447C296241F23BAE38EC4640F5CB30"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 23,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 10,
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
                    "uid": "685B6B0856798846233A15C44EC98DA05FED"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 24,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 10,
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
                    "uid": "B678759527A0664CF41BF5A707A6F16F43BA"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 25,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 10,
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
                    "uid": "4E6560F50CFBC9450A1845423FB0893DAB61"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 26,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 11,
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
                    "uid": "9F8064A981939247883B46B0F2C586AE0977"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 27,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 2,
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
                    "uid": "D603CB2B2219F84FFC4843F4CE1DE4904498"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 28,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 3,
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
                    "uid": "C60A175475D66548816B2895203022ABDB3E"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 29,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 4,
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
                    "uid": "489F1A362548724FAE5961824D4DD1323D05"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 30,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 5,
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
                    "uid": "4088C0D084E9444C3F6A5696DB1C3D8823EF"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 31,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 6,
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
                    "uid": "2C5A60D100B2854B0949BD72D44C008B2CBF"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 32,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 7,
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
                    "uid": "6DC818381E8BF74D2558A3401CF59BC5691E"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 33,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 8,
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
                    "uid": "0437D3FE80F5C84D256BFC8581A212D51908"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 34,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 9,
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
                    "uid": "38343835340BD34CEE58D653C6505E6D2ACF"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 35,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 10,
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
                    "uid": "16DDB4AA2F1599490F1A8B7939552CDAAFEA"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 36,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 10,
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
                    "uid": "A609BE6C8DB5C6426A7B139512EA9CB9EB87"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 37,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 10,
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
                    "uid": "E72B7F149B5F774D5578EF34042939102173"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 38,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 10,
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
                    "uid": "872D97D63C272649B9799D06A72F3E815F15"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 39,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 11,
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
                    "uid": "50CE5CE73AB0E349535ADB2646E7A2444E7E"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 40,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 2,
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
                    "uid": "E8ACAA5B4A50B74FA39869868A0CC6466D0C"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 41,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 3,
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
                    "uid": "BC21CBF984C222497E691B588EBFBDEE3D6A"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 42,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 4,
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
                    "uid": "229B248C270CF44E118BE92776458BBD7860"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 43,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 5,
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
                    "uid": "EC170D879ED0A1431E2B974599F42F0F13F2"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 44,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 6,
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
                    "uid": "1990129E34D5B0440C1BF3979311427D14A5"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 45,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 7,
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
                    "uid": "B1607C264C782444229A0BA4EC714328542D"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 46,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 8,
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
                    "uid": "AF0CDA3452EE8444735B37C7FC1C07625BA0"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 47,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 9,
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
                    "uid": "FAA32FB874944844A76A82279E3AFF0E0817"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 48,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 10,
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
                    "uid": "2C56889918C078419E99B9627A77BDDE9234"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 49,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 10,
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
                    "uid": "0114450435F91348644AA606A90D55579BC2"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 50,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 10,
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
                    "uid": "7BE0888673E93843E27A36E5814C1B1E6C4F"
                },
                {
                    "id": "gs.ListSet",
                    "params": {
                        "index": 51,
                        "valueType": 0,
                        "listVariable": {
                            "name": "Card Values",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 10,
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
                    "uid": "A4F5535F67B1A14E1139E9F4A7FF48936946"
                }
            ],
            "index": "EA262EC363CD654F3D9937A00800F3E0D003",
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
            "stringVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
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