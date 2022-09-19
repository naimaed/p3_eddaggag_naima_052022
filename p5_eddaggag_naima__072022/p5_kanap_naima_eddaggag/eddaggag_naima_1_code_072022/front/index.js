// Récupérer les informations depuis l’Api
fetch("http://localhost:3000/api/products")
	// au format JSON
	.then((data) => {
		return data.json();
	})
	// afficher de manière dynamique les infos produits
	.then((completedata) => {
		let data = "";
		completedata.map((values) => {
			data += `<a href="./product.html?id=${values._id}">
        <article>
          <img src=${values.imageUrl} alt=${values.altTxt}>
          <h3 class="productName">${values.name}</h3>
          <p class="productDescription">${values.description}</p>
        </article>
      </a>`;
		});
		document.getElementById("items").innerHTML = data;
	})
	.catch((err) => {
		console.log(err);
	});
