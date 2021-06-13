const main = document.querySelector('main');
const navbar = document.getElementById('Navbar');

var commentData;

function init(){
    //fetch the json data we need
    
    
    setTimeout( () => {//just want to see the loading screen
        Fetch()
        .then(newData => {//sucess
            commentData = newData.comment;
            navbar.show();
            Home.show();
        }).catch(err => {//failed
            error.fatalError(err);
    })},1000);
    
    isLoading.show();
}
