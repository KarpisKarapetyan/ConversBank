export const useConvertYear = (monthCount, scaledValue) => { 
    function getPlural(number, word) {
        return number === 1 && word.one || word.other;
    }
    let months = { one: 'ամիս', other: 'ամիս' },
        years = { one: 'տարի', other: 'տարի' },
        m = monthCount % 12,
        y = Math.floor(monthCount / 12),
        result = [];
    y && result.push(y + ' ' + getPlural(y, years));
    m && result.push(m + ' ' + getPlural(m, months));
    scaledValue = result.join(' ');
    return scaledValue
} 

