// Select all box elements
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        // Deselect all boxes and hide dropdowns
        boxes.forEach(b => {
            b.classList.remove('expanded');
            const optionInputs = b.querySelector('.option-inputs');
            const secondoptionInputs = b.querySelector('.second-option-inputs');
            const optionLabels = b.querySelector('.option-labels');

            // Check existence before setting display
            if (optionInputs) optionInputs.style.display = 'none';
            if (secondoptionInputs) secondoptionInputs.style.display = 'none';
            if (optionLabels) optionLabels.style.display = 'none';

            // Uncheck the radio in all other boxes
            const radio = b.querySelector('input[type="radio"]');
            if (radio) radio.checked = false;
        });

        // Expand the clicked box and show the input options
        box.classList.add('expanded');
        const optionInputs = box.querySelector('.option-inputs');
        const secondoptionInputs = box.querySelector('.second-option-inputs');
        const optionLabels = box.querySelector('.option-labels');

        if (optionInputs) optionInputs.style.display = 'flex';
        if (secondoptionInputs) secondoptionInputs.style.display = 'flex';
        if (optionLabels) optionLabels.style.display = 'flex';

        // Check the radio button for the selected box
        const radio = box.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
    });
});

