const error = {};

error.fatalError = (message) => {
    main.innerHTML = `<p>`+message+`</p>`;
}

error.message = (message) => {
    console.log(message);
}
