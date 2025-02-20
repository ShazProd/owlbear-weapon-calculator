const handaxeData = {
    name: 'Hand Axe',
    description: 'Length: 1.5 – 2 feet, Weight: 2 pounds',
    fumbleRange: '01 – 05 UM',
    type: 'One-Handed',
    data: {
        150: ['11EK', '13EK', '15EK', '17EK', '18EK', '18EK', '21EK', '21EK', '18EK', '20EK', '24EK', '24EK', '18ES', '', '18ES', '23ES', '26ES', '20ES', '23ES', '26ES', '28ES', 150],
        149: ['11EK', '13EK', '15EK', '17EK', '18EK', '18EK', '21EK', '21EK', '18ES', '20ES', '24ES', '24ES', '18ES', '', '18ES', '23ES', '26ES', '20ES', '23ES', '26ES', '28ES', 149],
        148: ['11EK', '13EK', '15EK', '17EK', '18EK', '18EK', '21EK', '21EK', '18EK', '20EK', '24EK', '24EK', '18ES', '', '18ES', '23ES', '26ES', '20ES', '23ES', '26ES', '28ES', 148],
        147: ['11EK', '13EK', '15EK', '17EK', '18EK', '18EK', '21EK', '21EK', '18ES', '20ES', '24ES', '24ES', '18ES', '', '18ES', '23ES', '26ES', '20ES', '23ES', '26ES', '28ES', 147],
        146: ['11DK', '13DK', '15EK', '17EK', '18EK', '18EK', '21EK', '21EK', '18EK', '20EK', '23EK', '23EK', '18ES', '', '18ES', '23ES', '25ES', '20ES', '22ES', '26ES', '27ES', 146],
        145: ['11DK', '13DK', '15EK', '17EK', '18EK', '18EK', '20EK', '20EK', '18ES', '19ES', '23ES', '23ES', '18ES', '', '18ES', '22ES', '25ES', '19ES', '22ES', '25ES', '27ES', 145],
        144: ['11DK', '13DK', '15DK', '17EK', '18EK', '18EK', '20EK', '20EK', '17EK', '19EK', '23EK', '23EK', '18ES', '', '18ES', '22ES', '25ES', '19ES', '22ES', '25ES', '27ES', 144],
        143: ['11DK', '13DK', '15DK', '16EK', '17EK', '17EK', '20EK', '20EK', '17ES', '19ES', '23ES', '23ES', '17ES', '', '17ES', '22ES', '25ES', '19ES', '22ES', '25ES', '26ES', 143],
        142: ['11CK', '13CK', '14DK', '16EK', '17DK', '17DK', '20DK', '20EK', '17EK', '19EK', '22EK', '22EK', '17ES', '', '17ES', '22ES', '24ES', '19ES', '21ES', '25ES', '26ES', 142],
        141: ['11CK', '13CK', '14DK', '16EK', '17DK', '17DK', '20DK', '20EK', '17ES', '18ES', '22ES', '22ES', '17ES', '', '17ES', '22ES', '24ES', '18ES', '21ES', '24ES', '26ES', 141],
        140: ['11CK', '12CK', '14DK', '16DK', '17DS', '17DK', '19DK', '19EK', '17DK', '18EK', '22EK', '22EK', '17DS', '', '17ES', '21ES', '24ES', '18EK', '21ES', '24ES', '26ES', 140],
        139: ['11CK', '12CK', '14DK', '16DK', '17DK', '17DS', '19DK', '19EK', '17DS', '18ES', '22ES', '21ES', '17DS', '', '17ES', '21ES', '24ES', '18ES', '21EK', '24ES', '25ES', 139],
        138: ['10CK', '12CK', '14DK', '16DK', '17DS', '17DK', '19DS', '19DK', '16DK', '18EK', '21EK', '21EK', '17DK', '', '17ES', '21ES', '23ES', '18EK', '20ES', '24ES', '25EK', 138],
        137: ['10CS', '12CK', '14CK', '15DK', '16DK', '16DS', '19DK', '19DK', '16DS', '18DS', '21DS', '21ES', '17DS', '', '16DK', '21ES', '23ES', '17ES', '20EK', '23ES', '25ES', 137],
        136: ['10CK', '12CK', '14CK', '15DK', '16DS', '16DK', '19DS', '19DS', '16DK', '17DK', '21DK', '21EK', '16DK', '', '16DS', '20EK', '23ES', '17DK', '20ES', '23EK', '24EK', 136],
        135: ['10BS', '12BK', '13CK', '15DK', '16DK', '16DS', '18DK', '18DK', '16DS', '17DS', '21DS', '20ES', '16DS', '', '16DK', '20DS', '22EK', '17DS', '20EK', '23ES', '24ES', 135],
        134: ['10BK', '12BS', '13CK', '15DK', '16DS', '16DK', '18DS', '18DS', '16DK', '17DK', '20DK', '20EK', '16DK', '', '16DS', '20DK', '22ES', '17DK', '19ES', '23EK', '24EK', 134],
        133: ['10BS', '12BK', '13CK', '15DK', '16DK', '16DS', '18DK', '18DK', '15DS', '17DS', '20DS', '20DS', '16DS', '', '16DK', '20DS', '22EK', '16DS', '19DK', '23ES', '23ES', 133],
        132: ['10BK', '12BS', '13CK', '15DK', '16CS', '16DK', '18DS', '18DS', '15DK', '16DK', '20DK', '20DK', '16DK', '', '16DS', '20DK', '22DS', '16DK', '19DS', '22EK', '23EK', 132],
        131: ['10BS', '11BK', '13CK', '14DK', '15CK', '15CS', '18CK', '17DK', '15DS', '16DS', '20DS', '19DS', '16DS', '', '16DK', '19DS', '21DK', '16DS', '19DK', '22ES', '23ES', 131],
        130: ['10BK', '11BS', '13CS', '14DK', '15CS', '15CK', '17CS', '17DS', '15CK', '16DK', '19DK', '19DK', '16CK', '', '15DK', '19DK', '21DS', '16DK', '18DK', '22EK', '23EK', 130],
        129: ['10AS', '11BK', '13CK', '14CK', '15CK', '15CS', '17CK', '17DK', '15CS', '16DS', '19DS', '19DS', '15CK', '', '15DK', '19DS', '21DS', '16DS', '18DK', '22ES', '22ES', 129],
        128: ['10AK', '11AS', '12BS', '14CK', '15CS', '15CK', '17CS', '17DS', '15CK', '16DK', '19DK', '18DK', '15CK', '', '15DS', '19DK', '21DS', '15DK', '18DS', '21EK', '22EK', 128],
        127: ['10AS', '11AK', '12BK', '14CK', '15CK', '15CS', '17CK', '17DK', '14CS', '15DS', '19DS', '18DS', '15CS', '', '15DK', '18DS', '20DK', '15DS', '18DK', '21ES', '22ES', 127],
        126: ['9AK', '11AS', '12BS', '14CS', '15CS', '15CK', '17CS', '16DS', '14CK', '15DK', '18DK', '18DK', '15CK', '', '15DS', '18DK', '20DS', '15DK', '17DS', '21EK', '21DK', 126],
        125: ['9AS', '11AK', '12BK', '13CK', '15CK', '14CS', '16CK', '16DK', '14CS', '15DS', '18DS', '18DS', '15CS', '', '15DK', '18DS', '20DK', '15DS', '17DK', '21ES', '21DS', 125],
        124: ['9AK', '11AS', '12BS', '13CS', '14CS', '14CK', '16CS', '16CS', '14CK', '15CK', '18DK', '17DK', '15CK', '', '14DS', '18DK', '20DS', '14CK', '17DS', '20DK', '21DK', 124],
        123: ['9AS', '11AK', '12BK', '13CK', '14CK', '14CS', '16CK', '16CK', '14CS', '14CS', '18DS', '17DS', '14CS', '', '14DK', '18DS', '19DK', '14CS', '17DK', '20DS', '21DS', 123],
        122: ['9AK', '10AS', '12BS', '13CS', '14BS', '14CK', '16CS', '16CS', '13CK', '14CK', '17CK', '17DK', '14CK', '', '14DS', '17DK', '19DS', '14CK', '16DS', '20DK', '20DK', 122],
        121: ['9AS', '10AK', '12BK', '13CK', '14BK', '14CS', '16CK', '15CK', '13CS', '14CS', '17CS', '17DS', '14CS', '', '14CK', '17DS', '19DK', '14CS', '16DK', '20DS', '20DS', 121],
        120: ['9AK', '10AS', '11BS', '13CS', '14BS', '14BK', '15CS', '15CS', '13CK', '14CK', '17CK', '16DK', '14CK', '', '14CS', '17DK', '18DS', '13CK', '16DS', '19DK', '20DK', 120],
        119: [9, '10AK', '11AK', '12CK', '14BK', '13BS', '15CK', '15CK', '13CS', '13CS', '16CS', '16DS', '14CS', '', '14CK', '17CS', '18DK', '13CS', '16CK', '19DS', '19DS', 119],
        118: [9, '10AS', '11AS', '12BS', '13BS', '13BK', '15CS', '15CS', '13CK', '13CK', '16CK', '16DK', '14CK', '', '13CS', '16CK', '18DS', '13CK', '15CS', '19DK', '19DK', 118],
        117: [9, '10AK', '11AK', '12BK', '13BK', '13BS', '15CK', '14CK', '13CS', '13CS', '16CS', '15DS', '14CS', '', '13CK', '16CS', '18DK', '13CS', '15CK', '19DS', '19DS', 117],
        116: [9, '10AS', '11AS', '12BS', '13BS', '13BK', '15BS', '14CS', '12CK', '13CK', '16CK', '15DK', '13CK', '', '13CS', '16CK', '17DS', '12CK', '15CS', '19DK', '18DK', 116],
        115: [9, '10AK', '11AK', '12BK', '13BK', '13BS', '14BK', '14CK', '12BS', '13CS', '15CS', '15CS', '13BS', '', '13CK', '16CS', '17DK', '12CS', '15CK', '18DS', '18DS', 115],
        114: [8, 10, '11AS', '12BS', '13AS', '13BK', '14BS', '14CS', '12BK', '12CK', '15CK', '15CK', '13BK', '', '13CS', '16CK', '17DS', '12CK', '14CS', '18DK', '18DK', 114],
        113: [8, 9, '10AK', '11BK', '13AK', '12BS', '14BK', '14CK', '12BS', '12CS', '15CS', '14CS', '13BS', '', '13CK', '15CS', '17CK', '12BS', '14CK', '18DS', '18DS', 113],
        112: [8, 9, '10AS', '11BS', '12AS', '12BK', '14BS', '13CS', '12BK', '12CK', '15CK', '14CK', '13BK', '', '13CS', '15CK', '16CS', '11BK', '14CS', '18DK', '17DK', 112],
        111: [8, 9, '10AK', '11BK', '12AK', '12BS', '14BK', '13CK', '11BS', '12CS', '14CS', '14CS', '13BS', '', '12CK', '15CS', '16CK', '11BS', '14CK', '17DS', '17DS', 111],
        110: [8, 9, '10AS', '11BS', '12AS', '12AK', '13BS', '13BS', '11BK', '11CK', '14CK', '14CK', '13BK', '', '12CS', '15CK', '16CK', '11BK', '13CS', '17DK', '17CK', 110],
        109: [8, 9, '10AK', '11BK', '12AK', '12AS', '13BK', '13BK', '11BS', '11BS', '14CS', '13CS', '12BS', '', '12CK', '14CS', '16CK', '11BS', '13BK', '17DS', '16CS', 109],
        108: [8, 9, '10AS', '11AS', '12AS', '12AK', '13BS', '13BS', '11BK', '11BK', '14CK', '13CK', '12BK', '', '12CS', '14CK', '15CS', '11BK', '13BS', '17DK', '16CK', 108],
        107: [8, 9, '10AK', '10AK', '12AK', '11AS', '13BK', '12BK', '11BS', '11BS', '13CS', '13CS', '12BS', '', '12CK', '14CS', '15CK', '10AS', '13BK', '16CS', '16CS', 107],
        106: [8, 9, '9AS', '10AS', '12AS', '11AK', '13AS', '12BS', '11BK', '11BK', '13CK', '12CK', '12BK', '', '12CS', '14CK', '15CS', '10AK', '12BS', '16CK', '15CK', 106],
        105: [8, 9, '9AK', '10AK', '11AK', '11AS', '12AK', '12BK', '10BS', '10BS', '13CS', '12CS', '12BS', '', '11BK', '14BS', '14CK', '10AS', '12BK', '16CS', '15CS', 105],
        104: [8, 8, 9, '10AS', 11, '11AK', '12AS', '12BS', '10BK', '10BK', '13BK', '12CK', '12BK', '', '11BS', '13BK', '14CS', '10AK', '12BS', '16CK', '15CK', 104],
        103: [7, 8, 9, '10AK', 11, '11AS', '12AK', '12BK', '10BS', '10BS', '12BS', '12CS', '12BS', '', '11BK', '13BS', '14CK', 9, '12BK', '15CS', '15CS', 103],
        102: [7, 8, 9, '10AS', 11, '11AK', '12AS', '11BS', '10AK', '10BK', '12BK', '11CK', '11BK', '', '11BS', '13BK', '14BS', 9, '11BS', '15CK', '14BK', 102],
        101: [7, 8, 9, '9AK', 11, 10, '12AK', '11BK', 10, '9BS', '12BS', '11CS', 11, '', '11BK', 13, 13, 9, 11, 15, 14, 101],
        100: [7, 8, 9, '9AS', 11, 10, 11, 11, 9, 9, 12, 11, 11, '', 11, 13, 13, 9, 11, 15, 14, 100],
        99: [7, 8, 8, '9AK', 10, 10, 11, 11, 9, 9, 11, 11, 11, '', 11, 12, 13, 8, 11, 15, 13, 99],
        98: [7, 8, 8, '9AS', 10, 10, 11, 10, 9, 9, 11, 10, 11, '', 10, 12, 13, 8, 10, 14, 13, 98],
        97: [7, 8, 8, '9AK', 10, 10, 11, 10, 9, 9, 11, 10, 11, '', 10, 12, 12, 8, 10, 14, 13, 97],
        96: [7, 8, 8, '9AS', 10, 10, 11, 10, 9, 8, 11, 10, 10, '', 10, 12, 12, 8, 10, 14, 13, 96],
        95: [7, 7, 8, '9AK', 10, 9, 10, 10, 9, 8, 10, 9, 10, '', 10, 11, 12, 7, 10, 14, 12, 95],
        94: [7, 7, 8, 8, 10, 9, 10, 10, 8, 8, 10, 9, 10, '', 10, 11, 12, 7, 9, 13, 12, 94],
        93: [7, 7, 8, 8, 9, 9, 10, 9, 8, 8, 10, 9, 10, '', 10, 11, 11, 7, 9, 13, 12, 93],
        92: [7, 7, 8, 8, 9, 9, 10, 9, 8, 7, 10, 9, 10, '', 9, 11, 11, 7, 9, 13, 11, 92],
        91: [6, 7, 7, 8, 9, 9, 10, 9, 8, 7, 9, 8, 10, '', 9, 11, 11, 7, 9, 13, 11, 91],
        90: [6, 7, 7, 8, 9, 9, 9, 9, 8, 7, 9, 8, 10, '', 9, 10, 10, 6, 8, 12, 11, 90],
        89: [6, 7, 7, 8, 9, 8, 9, 9, 7, 7, 9, 8, 9, '', 9, 10, 10, 6, 8, 12, 10, 89],
        88: [6, 7, 7, 7, 9, 8, 9, 8, 7, 6, 8, 8, 9, '', 9, 10, 10, 6, 8, 12, 10, 88],
        87: [6, 7, 7, 7, 9, 8, 9, 8, 7, 6, 8, 7, 9, '', 9, 10, 10, 6, 8, 12, 10, 87],
        86: [6, 7, 7, 7, 8, 8, 9, 8, 7, 6, 8, 7, 9, '', 8, 9, 9, 5, 7, 11, 10, 86],
        85: [6, 6, 7, 7, 8, 8, 8, 8, 7, 6, 8, 7, 9, '', 8, 9, 9, 5, 7, 11, 9, 85],
        84: [6, 6, 6, 7, 8, 8, 8, 7, 7, 6, 7, 6, 9, '', 8, 9, 9, 5, 7, 11, 9, 84],
        83: [6, 6, 6, 7, 8, 7, 8, 7, 6, 5, 7, 6, 9, '', 8, 9, 9, 5, 7, 11, 9, 83],
        82: [6, 6, 6, 6, 8, 7, 8, 7, 6, 5, 7, 6, 8, '', 8, 9, 8, 4, 6, 11, 8, 82],
        81: [6, 6, 6, 6, 8, 7, 8, 7, 6, 5, 7, 6, 8, '', 8, 8, 8, 4, 6, 10, 8, 81],
        80: [6, 6, 6, 6, 7, 7, 7, 7, 6, 5, 6, 5, 8, '', 8, 8, 8, 4, 6, 10, 8, 80],
        79: [5, 6, 6, 6, 7, 7, 7, 6, 6, 4, 6, 5, 8, '', 7, 8, 8, 4, 0, 10, 0, 79],
        78: [5, 6, 6, 6, 7, 7, 7, 6, 5, 4, 6, 5, 8, '', 7, 8, 7, 3, 0, 10, 0, 78],
        77: [5, 6, 5, 6, 7, 6, 7, 6, 5, 4, 6, 5, 8, '', 7, 7, 7, 3, 0, 9, 0, 77],
        76: [5, 5, 5, 5, 7, 6, 7, 6, 5, 4, 5, '4AK', 8, '', 7, 7, '6AK', 3, 0, 9, 0, 76],
        75: [5, 5, 5, 5, 7, 6, 6, 6, 5, 4, 5, '4AS', 7, '', 7, 7, 6, 3, 0, 9, 0, 75],
        74: [5, 5, 5, 5, 6, 6, 6, 5, 5, 3, 5, '4AK', 7, '', 7, 7, 6, 0, 0, 9, 0, 74],
        73: [5, 5, 5, 5, 6, 6, 6, 5, 5, 3, 5, '3AS', 7, '', 6, 7, 6, 0, 0, 8, 0, 73],
        72: [5, 5, 5, 5, 6, 6, 6, 5, 4, 3, 4, '3AK', 7, '', 6, 6, 6, 0, 0, 8, 0, 72],
        71: [5, 5, 5, 5, 6, 5, 6, 5, 4, 3, 4, 3, 7, '', 6, 6, 5, 0, 0, 8, 0, 71],
        70: [5, 5, 4, 4, 6, 5, 5, 5, 4, 2, 4, 2, 6, '', 6, 6, 5, 0, 0, 0, 0, 70],
        69: [5, 5, 4, 4, 6, 5, 5, 4, 4, 2, 4, 2, 6, '', 6, 6, 5, 0, 0, 0, 0, 69],
        68: [5, 5, 4, 4, 6, 5, 5, 4, 4, 2, 3, 2, 6, '', 6, 5, 5, 0, 0, 0, 0, 68],
        67: [4, 4, 4, 4, 5, 5, 5, 4, 3, 2, 3, 2, 6, '', 6, 5, 4, 0, 0, 0, 0, 67],
        66: [4, 4, 4, 4, 5, 4, 4, 3, 3, 0, 3, 0, 6, '', 5, 5, 4, 0, 0, 0, 0, 66],
        65: [4, 4, 4, 4, 5, 4, 4, 3, 3, 0, 3, 0, 6, '', 5, 5, 4, 0, 0, 0, 0, 65],
        64: [4, 4, 3, 3, 4, 4, 4, 3, 2, 0, 2, 0, 5, '', 5, 4, 0, 0, 0, 0, 0, 64],
        63: [4, 4, 3, 3, 4, 4, 4, 3, 2, 0, 2, 0, 5, '', 5, 4, 0, 0, 0, 0, 0, 63],
        62: [4, 4, 3, 3, 4, 4, 4, 3, 2, 0, 2, 0, 5, '', 5, 4, 0, 0, 0, 0, 0, 62],
        61: [4, 4, 3, 2, 4, 3, 3, 2, 2, 0, 0, 0, 5, '', 4, 0, 0, 0, 0, 0, 0, 61],
        60: [4, 4, 3, 2, 4, 3, 3, 2, 2, 0, 0, 0, 5, '', 4, 0, 0, 0, 0, 0, 0, 60],
        59: [4, 4, 3, 2, 4, 3, 3, 2, 2, 0, 0, 0, 5, '', 4, 0, 0, 0, 0, 0, 0, 59],
        58: [4, 4, 3, 2, 4, 3, 3, 2, 2, 0, 0, 0, 5, '', 4, 0, 0, 0, 0, 0, 0, 58],
        57: [4, 4, 3, 2, 4, 3, 3, 2, 2, 0, 0, 0, 5, '', 4, 0, 0, 0, 0, 0, 0, 57],
        56: [4, 4, 3, 2, 4, 3, 3, 2, 2, 0, 0, 0, 5, '', 4, 0, 0, 0, 0, 0, 0, 56],
        55: [3, 3, 2, 2, 3, 2, 2, 1, 0, 0, 0, 0, 4, '', 0, 0, 0, 0, 0, 0, 0, 55],
        54: [3, 3, 2, 2, 3, 2, 2, 1, 0, 0, 0, 0, 4, '', 0, 0, 0, 0, 0, 0, 0, 54],
        53: [3, 3, 2, 2, 3, 2, 2, 1, 0, 0, 0, 0, 4, '', 0, 0, 0, 0, 0, 0, 0, 53],
        52: [3, 3, 2, 2, 3, 2, 2, 1, 0, 0, 0, 0, 4, '', 0, 0, 0, 0, 0, 0, 0, 52],
        51: [3, 3, 2, 2, 3, 2, 2, 1, 0, 0, 0, 0, 4, '', 0, 0, 0, 0, 0, 0, 0, 51],
        50: [3, 2, 2, 1, 3, 2, 1, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 50],
        49: [3, 2, 2, 1, 3, 2, 1, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 49],
        48: [3, 2, 2, 1, 3, 2, 1, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 48],
        47: [3, 2, 2, 1, 3, 2, 1, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 47],
        46: [2, 2, 1, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 46],
        45: [2, 2, 1, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 45],
        44: [2, 2, 1, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 44],
        43: [2, 2, 1, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 43],
        42: [2, 2, 1, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 42],
        41: [2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 41],
        40: [2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 40],
        39: [2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 39],
        38: [2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 38],
        37: [2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 37],
        36: [2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 36],
        35: [2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 35],
        34: [2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 34],
        33: [2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 33],
        32: [2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 32],
        31: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 31],
        30: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 30],
        29: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 29],
        28: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 28],
        27: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 27],
        26: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 26],
        25: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 25],
        24: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 24],
        23: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 23],
        22: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 22],
        21: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 21],
        20: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 20],
        19: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 19],
        18: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 18],
        17: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 17],
        16: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 16],
        15: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 15],
        14: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 14],
        13: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 13],
        12: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 12],
        11: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 11],
        10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 10],
        9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 9],
        8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 8],
        7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 7],
        6: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 6],
        5: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 5],
        4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 4],
        3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 3],
        2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 2],
        1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 1],
        0: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 0]


    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = handaxeData;
}