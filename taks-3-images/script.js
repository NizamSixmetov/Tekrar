const imagesWrapper = document.querySelector(".images-wrapper");
const input = document.getElementById("input-value");
const searchButton = document.querySelector(".search-button");

let inputValue;

input.addEventListener("input", (e) => {
  const { value } = e.target;
  inputValue = value;
});

searchButton.addEventListener("click", () => {
  if (input.value === "") return;

  imagesWrapper.innerHTML = "";

  const key = "24090419-925e057925ba4cc124682bb5f";
  fetch(`https://pixabay.com/api/?key=${key}&q=${inputValue}`)
    .then((res) => res.json())
    .then(({ hits }) => {
      if (hits.length === 0) {
        imagesWrapper.innerHTML = `
            <h1 class="not-found">Heç bir nəticə tapılmadı</h1>
        `;
      } else {
        hits.forEach(({ largeImageURL, tags, user, pageURL }) => {
          imagesWrapper.innerHTML += `
              <div class="image-box">
                    <img
                        src="${largeImageURL}"
                        alt="${tags}"
                    />
    
                    <div class="text-box">
                        <p>
                            <span>User :</span>
    
                            <span>${user}</span>
                        </p>
    
                        <a href="${pageURL}">Go to page</a>
                    </div>
                </div>
                `;
        });
      }

      input.value = "";
    })
    .catch((error) => console.log(error));
});
