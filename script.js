const penCalendar = {
    september: 10,
    october: 9,
    november: 8,
    december: 7,
    january: 6,
    febuary: 5,
    march: 4,
    april: 3,
    may: 2,
    june: 1,
};
const topPen = '  /\\ \n /__\\ '
const eraser = ' |  | '

function drawMyPen(month){
    let monthPenSize = chooseMonthInCalendar(month);
    let index = 0;

    console.log(topPen);

    while (monthPenSize > index) {
        console.log(' |||| ');
        index++;
    }
    console.log(' |__| ')
    if (monthPenSize > 4) {
        console.log(eraser)
    }
    console.log(' |__| ')
}

function chooseMonthInCalendar(month){
    switch (month) {
        case 'september':
            monthPenSize = penCalendar.september;
            return monthPenSize;
        case 'october':
            monthPenSize = penCalendar.october;
            return monthPenSize;
        case 'november':
            monthPenSize = penCalendar.november;
            return monthPenSize;
        case 'december':
            monthPenSize = penCalendar.december;
            return monthPenSize;
        case 'january':
            monthPenSize = penCalendar.january;
            return monthPenSize;
        case 'febuary':
            monthPenSize = penCalendar.febuary;
            return monthPenSize;
        case 'march':
            monthPenSize = penCalendar.march;
            return monthPenSize;
        case 'april':
            monthPenSize = penCalendar.april;
            return monthPenSize;
        case 'may':
            monthPenSize = penCalendar.may;
            return monthPenSize;
        case 'june':
            monthPenSize = penCalendar.june;
            return monthPenSize;
    }
}

drawMyPen('febuary');

    // /\
    // /__\
    // ||||
    // ||||
    // ||||
    // ||||
    // ||||
    // ||||
    // ||||
    // ||||
    // ||||
    // ||||
    // |__|
    // |  |
    // |__|