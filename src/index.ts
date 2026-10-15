import { generateTriangle } from "./triangle";
import { generateSequenceNumber } from "./sequence_number";
import { generatePrimeNumbers } from "./prime_number";

function main(): void {
    const nim = "053895392";
    
    generateTriangle(nim);
    generateSequenceNumber(nim);
    generatePrimeNumbers(nim);
}

main();