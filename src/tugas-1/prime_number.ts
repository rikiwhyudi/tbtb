
function generatePrimeNumbers(nim: string): void {
    console.log("=== Task 3 - Prime Numbers ===\n");
    const lasttwoDigits = parseInt(nim.slice(-2));
    const maxLimit = lasttwoDigits + 10;
    const primeNumbers: number[] = [];

    for (let i = 2; i <= maxLimit; i++) {
        let isPrime = true;

        for (let j = 2; j < Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeNumbers.push(i);
        }
    }

    console.log(primeNumbers.join(', '));
    console.log("\n");
}

export { generatePrimeNumbers };