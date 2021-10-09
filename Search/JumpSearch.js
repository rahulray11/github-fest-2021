function jumpSearch(arrayToSearch, valueToSearch) {
    var length = arrayToSearch.length;
    var step = Math.floor(Math.sqrt(length));
    var index = Math.min(step, length) - 1;
    var lowerBound = 0;
    while (arrayToSearch[Math.min(step, length) - 1] < valueToSearch) {
        lowerBound = step;
        step += step;
        if (lowerBound >= length) {
            return -1;
        }
    }
    var upperBound = Math.min(step, length);
    while (arrayToSearch[lowerBound] < valueToSearch) {
        lowerBound++;
        if (lowerBound == upperBound) {
            return -1;
        }
    }
    if (arrayToSearch[lowerBound] == valueToSearch) {
        return lowerBound;
    }
    return -1;
}