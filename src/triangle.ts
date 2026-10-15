
function generateTriangle(nim: string): void {
    console.log("=== Task 1 - Triangle ===\n");
    const triangleHeight = parseInt(nim.charAt(nim.length - 1));

    for (let i = 1; i <= triangleHeight; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j + ' ';
        }
        console.log(row.trim());
    }
    console.log("\n");
}

export { generateTriangle };