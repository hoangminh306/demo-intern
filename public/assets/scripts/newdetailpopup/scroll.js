function scrollFunction() {
    const scrollValue = parseInt($("#myModal").scrollTop());
    // console.log(scrollValue)
    if (scrollValue > 400) {
        $('.show-content').removeClass('hide');
    } 
    // else if (scrollValue >1000) {
    //     $('.show-content').removeClass('hide');}
        else{
            $('.show-content').addClass('hide');
        }
        // $('.show-content').addClass('hide');
    // }
}

