function getLetter(s) {
    let first = s.charAt(0);
    let ret = null;
    switch (first) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            ret = 'A';
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            ret = 'B';
            break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            ret = 'C';
            break;
        default:
            ret = 'D';
            break;
    }
    return ret;
}