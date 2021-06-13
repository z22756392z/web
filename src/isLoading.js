const isLoading = {};

isLoading.html = `
<p>Loading...<p>
`

isLoading.show = () =>{
    main.innerHTML = isLoading.html;
}
