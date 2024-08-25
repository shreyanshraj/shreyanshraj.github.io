function changeTheme(){
    console.log("change theme");
    var element = document.body;
    element.classList.toggle("dark-mode");
    
}

function changeLogo(){
    document.getElementsByClassName("dk_btn").addEventListener("click", function(e){
        var target = e.target;

        e.src("/icons/white-circle.svg")
    },false);
}