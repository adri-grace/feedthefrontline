if(document.getElementById("search-results")){
    document.getElementById("search-results").addEventListener("click", function(e) {
        if(e.target && e.target.nodeName == "A") {
            console.log(e.target.nextElementSibling.nextElementSibling.nextElementSibling.value);
            $("#id_restaurantName").val(e.target.nextElementSibling.value);
            $("#id_address").val(e.target.previousElementSibling.innerText);
            $("#id_lat").val(e.target.nextElementSibling.nextElementSibling.nextElementSibling.value);
            $("#id_lng").val(e.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.value);
            $("label[for='id_restaurantName']").addClass("active");
            $("label[for='id_address']").addClass("active");
            $("label[for='id_lat']").addClass("active");
            $("label[for='id_lng']").addClass("active");
        }
    })
}

