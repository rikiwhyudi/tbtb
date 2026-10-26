import { generateTriangle } from "./tugas-1/triangle";
import { generateSequenceNumber } from "./tugas-1/sequence_number";
import { generatePrimeNumbers } from "./tugas-1/prime_number";

function main(): void {
    const nim = "053895392";
    
    generateTriangle(nim);
    generateSequenceNumber(nim);
    generatePrimeNumbers(nim);
}

main();