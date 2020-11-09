const btn = document.querySelector('button'),
      overlay = document.querySelector(".overlay");



btn.addEventListener('click', (e) => {
    alert('Click');
});

const deleteTarget = (e) => {
    e.target.remove();
};

btn.addEventListener('click', deleteTarget);
btn.removeEventListener('click', deleteTarget);

// когда элементы вложенные происходят события от вложенного к родителю


$(() => {
    $(document.body).on('click', 'a', (event) => {
        event.preventDefault();
        console.log('Vasek');
    });
});

