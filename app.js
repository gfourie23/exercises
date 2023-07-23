const $giphyImg = $("#giphy-img");
const $searchInput = $("#search");

function getGiphy(res) {
    let numResults = res.data.length;
    if (numResults) {
      let randomIdx = Math.floor(Math.random() * numResults);
      let $newArea = $("<div>", {class: "col-md-4 col-12 mb-4" });
      let $newGif = $("<img>", {
        src: res.data[randomIdx].images.original.url });
        $newArea.append($newGif);
        $gifArea.append($newArea); 
      }
    }

    $("form").on("submit", async function(evt) {
        evt.preventDefault();

        let searchTerm = $searchInput.val();
        $searchInput.val("");
    

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchTerm,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIyym"
        }
    });
    getGiphy(response.data);
});
   
    // const img = document.querySelector('#giphyImg');
    // img.src = res.data.message;



console.log("Let's get this party started!");

// const btn = document.querySelector('#submit');
// btn.addEventListener('click', function (e) {
//     const input = document.querySelector('#search');
//     e.preventDefault();
//     getGiphy(input.value);
//     input.value = '';
// });

$("#removebtn").on("click", function() {
    $giphyImg.empty();
});