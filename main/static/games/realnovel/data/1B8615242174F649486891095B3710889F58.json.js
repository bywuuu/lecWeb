GS.dataCache['1B8615242174F649486891095B3710889F58'] = {
    "uid": "1B8615242174F649486891095B3710889F58",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Show Dealer Card",
        "type": "data_record",
        "order": 4,
        "category": "commonEvents",
        "id": "1B8615242174F649486891095B3710889F58",
        "isFolder": false,
        "parentId": "49738AEB1E5AE24DEE4AD903FEA2BCEA2443",
        "data": {
            "name": "Show Dealer Card",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "Here we will show a new card-image on screen at the dealer's side. We want a 50% overlap of the card-images so it looks a little more like having cards on your hand in real-life. To do that, we first get the current amount of the dealer's cards. That amount does not contain the new drawn card. We are using that amount to calculate the x-position of the new card. We multiply it with 63, which is the half-size of a card-image, to make sure it appears at the end of all currently displayed cards. At the we add an offset/gap of 100 pixels to the left to avoid that the cards stick at the left-edge of the screen. Try to remove that command to see how it is displayed then.\n\nNext we are showing a picture using our card-sheet. At the calculated x-position and a fixed y-position of 100. The problem here that we actually don't want to display the entire card-sheet but only a single card-image from it. So we have to cut/crop the card-sheet somehow. For such cases, VN Maker provides the \"Crop Picture\" command. That command allows us to cut/crop a picture so that it only displays a smaller portion of it. To calculate the area we want to crop, we have to do a little bit of basic math:\n\nThe card-sheet displays 52 cards plus additional joker cards divided into a table/grid of 5 rows with 13 columns where each cell represents a single card-image. We know that each card-type in our deck is represented by a number between 0 and 51. So for the number 0, we have to display the club-ace and for the number 1 we have to display the club-2 which is placed next to the club-ace.\n\nTo calculate the correct x-coordinate of the area to crop, we can just multiply the card-type number with the pixel width of a single card-image(126 pixels). So 0 * 126 = 0, 1 * 126 = 126, so we convert the card-type number to a pixel-offset on the card-sheet. That would perfectly work if all cards on the card-sheet would be just in one row, but \"unfortunately\", they are separated on 5 rows. So if we reach card-type 13 and calculating 13 * 126 = 1638, we are going out of the card-sheet's bounds because card-type 13 is on the second row. To solve that problem, we use a modula-operation(rest of a division) and divide the card-type number through the amount of cards per row, which is 13. So if the card-type is 13, the result will be 0 and if the card-type is 14, the result will be 1. So if we multiply the result with 126 we will always get the correct x-coordinate on the card-sheet.\n\nThe only thing left now is the y-position on the card sheet. Here we only need to divide the card-type number through amount of cards per row again, but this time we are using the down-rounded result of the divison and not the rest. Means if the card-type number is below 13, the result will always be 0, if its above 13 but below 26, it will always be 1 and so on. And yes, next we just need to multiply that result with the pixel height of a single card-image, which is 183 pixels, to get the correct y-position on the card-sheet.\n\nWith that x- and y values we can just use \"Crop Picture\" command to crop the correct area to only show the correct single card-image on screen."
                    },
                    "indent": 0,
                    "uid": "A7A29E71015A7742055AF388BB6A63A8B5F6",
                    "expanded": true
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
                            "name": "Picture ID",
                            "index": 0,
                            "scope": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "BEC7001F73C597438888FB850EC80B6B84DF"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Card Place X",
                            "index": 3,
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
                            "name": "Card Count",
                            "index": 0,
                            "scope": 0
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
                    "uid": "E28722676F43F74BCD89C0473D5A7D00A2A3"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Card Place X",
                            "index": 3,
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
                        "operation": 3,
                        "source": 0,
                        "sourceValue": 63,
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
                    "uid": "32D6608C5C31854917981D939CC21E4EE1CC"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Card Place X",
                            "index": 3,
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
                        "sourceValue": 100,
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
                    "uid": "8578CA166F493040906B85F1FFAE731EAC1A"
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
                        "operation": 1,
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
                    "uid": "AAB59BF39050E549D498E78930387EAFAF49"
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
                        "number": {
                            "name": "Card Count",
                            "index": 0,
                            "scope": 0
                        },
                        "blendMode": 0,
                        "zOrder": 0,
                        "duration": 0,
                        "origin": 0,
                        "waitForCompletion": 0,
                        "positionType": 2,
                        "position": {
                            "x": {
                                "name": "Card Place X",
                                "index": 3,
                                "scope": 0
                            },
                            "y": 100
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
                            "duration": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "graphic": {
                            "name": "game_cards",
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
                    "uid": "CAC64B4B7B61924FBE0841A49293E28EBBAB"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Card X",
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
                            "name": "Card",
                            "scope": 1,
                            "index": 1,
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
                    "uid": "CB909235193D5844C18AE047659FAE12DD94"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Card X",
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
                        "sourceValue": 13,
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
                    "uid": "53F1CBA120067748292AB772787D6DDADECE"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Card Y",
                            "index": 2,
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
                            "name": "Card",
                            "scope": 1,
                            "index": 1,
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
                    "uid": "1D5EAA3222247341D64A42C0E6D6730F02AF"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Card Y",
                            "index": 2,
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
                        "operation": 4,
                        "source": 0,
                        "sourceValue": 13,
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
                    "uid": "122A992144358740F30977C70F60E9050243"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Card X",
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
                        "operation": 3,
                        "source": 0,
                        "sourceValue": 126,
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
                    "uid": "B09E1FCC3AE4484E9C8948487879B2D2398E"
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Card Y",
                            "index": 2,
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
                        "operation": 3,
                        "source": 0,
                        "sourceValue": 183,
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
                    "uid": "0D911CD195EFF94EC5692CA1EE600CA8232A"
                },
                {
                    "id": "gs.CropPicture",
                    "params": {
                        "number": {
                            "name": "Card Count",
                            "index": 0,
                            "scope": 0
                        },
                        "x": {
                            "name": "Card X",
                            "index": 1,
                            "scope": 0
                        },
                        "y": {
                            "name": "Card Y",
                            "index": 2,
                            "scope": 0
                        },
                        "width": 126,
                        "height": 183,
                        "numberDomain": "com.degica.vnm.default",
                        "domain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "49985C097C417246D41876D861FE7228DF4F"
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 30
                    },
                    "indent": 0,
                    "uid": "D9D0E5B00E3E444DAE5B1068B16FE89F5330"
                }
            ],
            "index": "1B8615242174F649486891095B3710889F58",
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
                    "name": "Card Count",
                    "index": 0,
                    "scope": 0
                },
                {
                    "name": "Card X",
                    "index": 1,
                    "scope": 1,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "Card Y",
                    "index": 2,
                    "scope": 1,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "Card Place X",
                    "index": 3,
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