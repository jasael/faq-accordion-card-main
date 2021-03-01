$(".accordion-titulo").click(function () {

    let contenido = $(this).next(".accordion-content");
    let toggleIcon = $(this).children('.toggle-icon');
    if (contenido.css("display") == "none") { //open		
        contenido.slideDown(250);
        $(this).addClass("open");
        toggleIcon.html(`<svg width="10" height="7" viewBox="0 0 10 7" fill="transparent" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6.20099L5 2.20099L1 6.20099" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd" />
</svg >
`)
    }
    else { //close		
        contenido.slideUp(250);
        $(this).removeClass("open");
        toggleIcon.html(`<svg width="10" height="7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>`)
    }

});