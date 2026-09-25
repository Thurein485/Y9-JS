function search_book() {
    let search_Book = document.getElementById("search_input").value;
    search_Book = search_Book.toLowerCase().trim();
    let x = document.getElementsByClassName("book-card");
    //x = ['Science', 'ICT', 'Social Studies', 'English', 'Math', 'GP'];
    for(i = 0; i < x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(search_Book)){
            x[i].style.display="none";
    }
    else{
        x[i].style.display="block";                
    }
} 
}; 