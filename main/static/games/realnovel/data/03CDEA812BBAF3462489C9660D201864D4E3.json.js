GS.dataCache['03CDEA812BBAF3462489C9660D201864D4E3'] = {
    "uid": "03CDEA812BBAF3462489C9660D201864D4E3",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Show Player Card",
        "type": "data_record",
        "order": 3,
        "category": "commonEvents",
        "id": "03CDEA812BBAF3462489C9660D201864D4E3",
        "isFolder": false,
        "parentId": "49738AEB1E5AE24DEE4AD903FEA2BCEA2443",
        "data": {
            "name": "Show Player Card",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "Here we will show a new card-image on screen at the player's side. We want a 50% overlap of the card-images so it looks a little more like having cards on your hand in real-life. To do that, we first get the current amount of the player's cards. That amount does not contain the new drawn card. We are using that amount to calculate the x-position of the new card. We multiply it with 63, which is the half-size of a card-image, to make sure it appears at the end of all currently displayed cards. At the we add an offset/gap of 100 pixels to the left to avoid that the cards stick at the left-edge of the screen. Try to remove that command to see how it is displayed then.\n\nNext we are showing a picture using our card-sheet. At the calculated x-position and a fixed y-position of 400. The problem here that we actually don't want to display the entire card-sheet but only a single card-image from it. So we have to cut/crop the card-sheet somehow. For such cases, VN Maker provides the \"Crop Picture\" command. That command allows us to cut/crop a picture so that it only displays a smaller portion of it. To calculate the area we want to crop, we have to do a little bit of basic math:\n\nThe card-sheet displays 52 cards plus additional joker cards divided into a table/grid of 5 rows with 13 columns where each cell represents a single card-image. We know that each card-type in our deck is represented by a number between 0 and 51. So for the number 0, we have to display the club-ace and for the number 1 we have to display the club-2 which is placed next to the club-ace.\n\nTo calculate the correct x-coordinate of the area to crop, we can just multiply the card-type number with the pixel width of a single card-image(126 pixels). So 0 * 126 = 0, 1 * 126 = 126, so we convert the card-type number to a pixel-offset on the card-sheet. That would perfectly work if all cards on the card-sheet would be just in one row, but \"unfortunately\", they are separated on 5 rows. So if we reach card-type 13 and calculating 13 * 126 = 1638, we are going out of the card-sheet's bounds because card-type 13 is on the second row. To solve that problem, we use a modula-operation(rest of a division) and divide the card-type number through the amount of cards per row, which is 13. So if the card-type is 13, the result will be 0 and if the card-type is 14, the result will be 1. So if we multiply the result with 126 we will always get the correct x-coordinate on the card-sheet.\n\nThe only thing left now is the y-position on the card sheet. Here we only need to divide the card-type number through amount of cards per row again, but this time we are using the down-rounded result of the divison and not the rest. Means if the card-type number is below 13, the result will always be 0, if its above 13 but below 26, it will always be 1 and so on. And yes, next we just need to multiply that result with the pixel height of a single card-image, which is 183 pixels, to get the correct y-position on the card-sheet.\n\nWith that x- and y values we can just use \"Crop Picture\" command to crop the correct area to only show the correct single card-image on screen."
                    },
                    "indent": 0,
                    "uid": "70575AD729EB8140A05B84615A558EFE5803",
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
                            "index": 0,
                            "scope": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "B4AAA1BA3280D84D9A7B2C48C53DF0A1DA0D"
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
                    "uid": "50E9A6F9304803495958689341EAE99C4D9B"
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
                    "uid": "BA46A9BA606A4743FD6B20742CE9544F35EA"
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
                    "uid": "F566A1152ECFD44E03584F109C6FEB8CC94E"
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
                            "y": 400
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
                            "origin": 1
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
                    "uid": "2C086CA59755E6456D8AF2F67FB01C5BF781"
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
                    "uid": "232A146B463B3345BC28A9556461753BBB6A"
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
                    "uid": "797351DF685B83482E79A78881112ABDE924"
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
                    "uid": "1E140276075B3848922887B7173386B9E766"
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
                    "uid": "508862E7628F9049DF59FA36920CED972AD3"
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
                    "uid": "BF256C5363118140653B2D588EF30E314E73"
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
                    "uid": "DA01B25D3CD3254353491195C6E410A0BCF3"
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
                    "uid": "AE7B2BB56E8D28456B7BC9A3568D67065797"
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 30
                    },
                    "indent": 0,
                    "uid": "8D8A134308F7B0489759E193151FC5501AC2"
                }
            ],
            "index": "03CDEA812BBAF3462489C9660D201864D4E3",
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
            "singleInstance": true,
            "stringVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "defaultExpressionId": "BF7CB12110894142C299D341A545C910AA86"
        },
        "localizableStrings": {
            "21D166275DDAB44D3148B83786E68C4D745B": {
                "t": "{Y:C}You Lose!{Y:N}",
                "d": {
                    "eid": "7E6FEE37091C784DA1183CA4C10E2A331810"
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