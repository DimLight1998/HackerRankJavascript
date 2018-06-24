function getSecondLargest(nums) {
    let copy = Array.from(new Set(nums.slice()));
    copy.sort((x, y) => x < y);
    return copy[1];
}