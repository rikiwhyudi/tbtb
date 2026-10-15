
function generateSequenceNumber(nim: string): void {
    console.log("=== Task 2 - Sequence Number ===\n");
    const lastTwoDigits = parseInt(nim.slice(-2));
    const thirdDigitFromLast = parseInt(nim.charAt(nim.length - 3));
    const sequenceNumber = thirdDigitFromLast + 1;

    const aritMatheticSequence: number[] = [];
    let currentNumber = lastTwoDigits;
    
    for (let i = 0; i < 10; i++) {
        aritMatheticSequence.push(currentNumber);
        currentNumber += sequenceNumber;
    }

    console.log(aritMatheticSequence.join(', '));
    console.log("\n");
}

export { generateSequenceNumber };