function createTable() {
    // Get the table element by its ID
    const table = document.getElementById('myTable');
    
    // Clear any existing content in the table
    table.innerHTML = '';

    // Prompt the user to input the number of rows and columns
    const rn = prompt("Input number of rows");
    const cn = prompt("Input number of columns");

    // Validate the input to ensure they are numbers and greater than 0
    if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
        alert("Please enter valid numbers greater than 0.");
        return;
    }

    // Create rows and columns based on the input
    for (let i = 0; i < rn; i++) {
        // Create a new row
        const row = table.insertRow();

        for (let j = 0; j < cn; j++) {
            // Create a new cell in the row
            const cell = row.insertCell();
            
            // Set the text of the cell to indicate its row and column index
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
