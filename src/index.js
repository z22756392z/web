const main = document.querySelector('main');
const navbar = document.getElementById('Navbar');

var commentData = [
    {
        "Title": "Hello",
        "Body": "You can leave a comment here click on the top right \" Comment \".\nWatch out! It would be gone once the page is refreshed!",
        "Author": "Brian",
        "id": 1
    }
];

function init(){
    //fetch the json data we need
    
    /*
    setTimeout(() => {//just want to see the loading screen
        Fetch()
        .then(newData => {//sucess
            commentData = newData.comment;
            navbar.show();
            Home.show();
        }).catch(err => {//failed
            error.fatalError(err);
    })},1000);
    */
    setTimeout(( () => {
        navbar.show();
        Home.show();
    }), 1000);
    
    isLoading.show();
}
