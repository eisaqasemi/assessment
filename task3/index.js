async function retry(func, maxRetries) {
    for (let i = 1; i <= maxRetries; i++) {
        try {
            return await func()
        } catch (e) {
            if (i === maxRetries) {
                throw `Tried ${i} times, ${e}`
            }
        }
    }
}