function modifyArray(nums) {
    return nums.map(x => x % 2 === 0 ? 2 * x : 3 * x);
}