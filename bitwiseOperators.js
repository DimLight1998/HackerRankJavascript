function getMaxLessThanK(n, k) {
    let curMax = 0;
    for (let i = 0; i <= n - 1; i++)
        for (let j = i + 1; j <= n; j++)
            if (((i & j) > curMax) && ((i & j) < k)) curMax = i & j;
    return curMax;
}