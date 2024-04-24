let text = document.getElementById("search");
let medList = document.querySelector("#med-list");
const dataBase = [
  {
    title: "VENTOLINE ",
    price: "10 $",
    Dosage: "100 mg",
    image:
      "https://images.dokteronline.com/images/products/dokteronline-ventolin-418-2-1352465102.jpg",
  },
  {
    title: "AUGMENTIN",
    price: "15 $",
    Dosage: "1 mg",
    image:
      " https://www.myhealthshop.ch/media/f4/9f/61/1649761921/1793959_PICBACK3D_F.jpg",
  },
  {
    title: "TRAMADOL",
    price: "13 $",
    Dosage: "50 mg",
    image:
      "https://www.francetvinfo.fr/pictures/Re9PqjfNYveSYLuDAIiz09STS8c/1200x900/2024/04/11/067-357937-66170f018ed6e278778006.jpg",
  },
  {
    title: "PANADOL",
    price: "16 $",
    Dosage: "500 mg",
    image:
      "https://dolanschemist.ie/wp-content/uploads/2021/09/Panadol-500mg-Film-Coated-Tablets.jpg",
  },
  {
    title: "IMODIUM",
    price: "11 $",
    Dosage: "2 mg",
    image: "https://storage.googleapis.com/hpi-media/img/products/31465.jpeg",
  },
  {
    title: "SOLUPRED",
    price: " 10 $",
    Dosage: "20 mg",
    image: "https://pharmapics.el-dokan.com/103688.jpg",
  },
  {
    title: "IMOVANE",
    price: "13 $",
    Dosage: " 7.5 mg",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/7/322626539/EW/WY/QZ/191842402/23-imovane-7-5mg-movane-7-5mg-10-x-10-tables.jpeg",
  },

  {
    title: "VITRAKVI",
    price: "12 $",
    Dosage: "100 mg",
    image:
      "https://www.indianpharmanetwork.in/wp-content/uploads/elementor/thumbs/Vitrakvi-q7lqgfi8ncz778tw8ogc9m9mc4yhf04j1g2jaqhmv4.jpg",
  },
  {
    title: "GLUCOVANCE",
    price: "10 $",
    Dosage: "500 mg",
    image:
      "https://cdn.sehat.com.pk/product_images/b/010/Picture-191__75472_zoom.jpg",
  },
];

text.onkeyup = (e) => {
  if (e.target.value !== "") {
    const arr = dataBase.filter((elt) => {
      return elt.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    console.log(arr);
    medList.innerHTML = arr.map((elt) => {
      return `
                <img src="${elt.image}" alt="" width="100px" />
                <h1 id="med-title"> ${elt.title} </h1>
                <h5 id="med-price"> ${elt.price} </h5>
                <h5 id="med-dosage">${elt.Dosage}</h5>
                `;
    });
  } else {
    medList.innerHTML = "";
  }
};
