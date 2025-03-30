let grid = document.querySelector('.grid');
let dropdown = document.querySelector('#myDropdown');
gridSize(4);

for (i = 2; i <= 100; i++) {
    let option = document.createElement('option');
    option.textContent = i;
    dropdown.appendChild(option);
}

dropdown.addEventListener('change', function() {
    let selectedOption = dropdown.value;
    gridSize(selectedOption);

});

function gridSize(size) {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    for (i = 0; i < (size); i++) {
        let row = document.createElement("div");
        row.classList.add('row');
        for (j = 0; j < (size); j++) {
            let width = 45 / size;
            let box = document.createElement("div")
            box.style.minWidth = width + 'vw';
            box.style.minHeight = width + 'vw';
            box.style.maxWidth = width + 'vw';
            box.style.maxHeight = width + 'vw';
            row.appendChild(box);

            box.addEventListener("mouseover", function() {
                box.style.backgroundColor = "black";
            });
        }
        grid.appendChild(row);        
    }
    
}


