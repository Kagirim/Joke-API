// // check if browser supports service worker and register it
// const registerServiceWorker = async () => {
//     if ("serviceWorker" in navigator) {
//       await navigator.serviceWorker.register("sw.js");
      
//     }
//   };
  
// registerServiceWorker();

// define function to make the api calls
function send_request() {
    //declare the urls
    let random_url, search_url, categories_url, categories_search_url;
    [random_url, search_url, categories_url, categories_search_url] = ["https://api.chucknorris.io/jokes/random", "https://api.chucknorris.io/jokes/search?query=animal", "https://api.chucknorris.io/jokes/categories", "https://api.chucknorris.io/jokes/random?category=animal"]

    //Create an XMLHttpRequest object
    xhr = new XMLHttpRequest();

    // change response type to json
    // xhr.responseType = 'json';

    // Define a callback function to manipulate data
    if (this.readyState == 4 && this.status == 200) {
        xhr.onreadystatechange = function() {
            $("#getJoke").click(function () {
                xhr.open("GET", random_url, true);
                const search_jokes = JSON.parse(xhr.responseText).result[5]["value"]
                $("#joke").html(search_jokes);
                
            });
            return false;
        };
        
        //Send request
        xhr.send();

    };

    // //Define random joke callback function
    // $("#getSearch").click(function () {
    //     $("#searchJoke").html(JSON.parse(xhr.responseText).value);
        
    // });

    // var data = xhr.responseText.replace(/\[|\]/g,"").split(',');

    // // Loop through the categories and append the categories to the select element
    // for (var i = 0; i < data.length; i++) {
    //     $("#categories").append("<option value=" + data[i] + ">" + data[i] + "</option>");

    // };

    // //Set the category fields with category search result
    // $("#categories").change(function () {
    //     $("#categoryJoke").html(JSON.parse(xhr.responseText).value);
    //     return false
    // });
        // }
}

//Add search terms if found in input field
function jokeTerm() {
    $("#search").val() ? search_url = "https://api.chucknorris.io/jokes/search?query=" + $("#search").val() : {}
}

function categoryTerm (cat_term) {
    cat_term ? categories_search_url = "https://api.chucknorris.io/jokes/random?category=" + cat_term : {}
    
}


// Send the Api requests via the call back functions
send_request();
