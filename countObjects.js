function getCount(objects) {
    let ret = 0;
    objects.forEach(obj => { if (obj.x === obj.y) ret++; });
    return ret;
}