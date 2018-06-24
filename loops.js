function vowelsAndConsonants(s) {
    for (let c of s)
        if ('aeiou'.indexOf(c) !== -1) console.log(c);
    for (let c of s)
        if ('aeiou'.indexOf(c) === -1) console.log(c);
}