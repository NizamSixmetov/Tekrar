const key = "24090419-925e057925ba4cc124682bb5f";

// fetch(`https://pixabay.com/api/?key=${key}&q=${input.value}`)
//   .then((res) => res.json())
//   .then(({ hits }) => {
//     console.log(hits);
//   });

const input = document.querySelector("#input-value");
const button = document.querySelector(".search-button");
const imgWrap = document.querySelector(".images-wrapper");

//  const search = addEventListener
// function clickButton() {
//   console.log("click");
// }

button.addEventListener("click", () => {
  fetch(`https://pixabay.com/api/?key=${key}&q=${input.value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.hits.forEach((element) => {
        imgWrap.innerHTML += `<div class="image-box">
        <img
          src= "${element.largeImageURL}"
          alt=""
        />

        <div class="text-box">
          <p>
            <span>User :</span>

            <span>username</span>
          </p>

          <a href="${element.pageURL}">Go to page</a>
        </div>
      </div>`;
      });
      input.value = "";
    })
    .catch((error) => console.log(error));
});
