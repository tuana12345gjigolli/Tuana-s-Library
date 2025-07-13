const booksData = {
  children: [
    {
      title: "Libri i Magjishëm",
      img: "https://m.media-amazon.com/images/I/81drfTT9ZfL.jpg",
      quote: "Imagjinata është fillimi i gjithçkaje!"
    },
    {
      title: "Aventurat e Fëmijëve",
      img: "https://m.media-amazon.com/images/I/91asIC1fRwL.jpg",
      quote: "Çdo fëmijë meriton një aventurë."
    },
    {
      title: "Kopshti i Mrekullive",
      img: "kopshti i mrekullive.jfif",
      quote: "Kopshtet janë mbretëri të fshehta."
    },
    {
      title: "Balona me Ëndrra",
      img: "enderra.jfif",
      quote: "Fluturo lart me ëndrrat e tua!"
    },
    {
      title: "Ana dhe Shtëpiza Magjike",
      img: "https://m.media-amazon.com/images/I/81VStYnDGrL.jpg",
      quote: "Miqtë e vegjël sjellin gëzim të madh."
    },
    {
      title: "Kënga e Yjeve",
      img: "https://m.media-amazon.com/images/I/91SZSW8qSsL.jpg",
      quote: "Edhe yjet kanë histori për të treguar."
    },
    {
      title: "Sekreti i Pyllit",
      img: "https://m.media-amazon.com/images/I/81wgcld4wxL.jpg",
      quote: "Zbulo sekretet e natyrës."
    },
    {
      title: "Deti i Përrallave",
      img: "https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg",
      quote: "Një det me histori magjike."
    }
  ],
  teens: [
    {
      title: "Hapat e Ëndrrave",
      img: "https://m.media-amazon.com/images/I/81wgcld4wxL.jpg",
      quote: "Mos ndalo së ëndërruari."
    },
    {
      title: "Sekretet e Miqësisë",
      img: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
      quote: "Miqtë janë thesari më i çmuar."
    },
    {
      title: "Kthesa Vendimtare",
      img: "https://m.media-amazon.com/images/I/81drfTT9ZfL.jpg",
      quote: "Çdo kthesë është një mundësi e re."
    },
    {
      title: "Vera e Parë",
      img: "https://m.media-amazon.com/images/I/81VStYnDGrL.jpg",
      quote: "Vera sjell aventura të paharrueshme."
    },
    {
      title: "Shkëndija e Dashurisë",
      img: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
      quote: "Dashuria lind kur nuk e pret."
    },
    {
      title: "Horizontet e Rinj",
      img: "rruga e qumeshtit.jpg",
      quote: "Zgjero horizontet dhe ëndrrat rriten."
    },
    {
      title: "Universi i Brendshëm",
      img: "https://m.media-amazon.com/images/I/81gepf1eMqL.jpg",
      quote: "Zbulo vetveten, zbulo botën."
    },
    {
      title: "Rruga e Yjeve",
      img: "https://m.media-amazon.com/images/I/71UwSHSZRnS.jpg",
      quote: "Ndiq yjet, gjej ëndrrat e tua."
    }
  ],
  adults: [
    {
      title: "Filozofia e Jetës",
      img: "https://m.media-amazon.com/images/I/71UwSHSZRnS.jpg",
      quote: "Jeta është ajo që bëjmë prej saj."
    },
    {
      title: "Rrugët e Suksesit",
      img: "https://m.media-amazon.com/images/I/81gepf1eMqL.jpg",
      quote: "Suksesi është një udhëtim, jo një destinacion."
    },
    {
      title: "Forca e Mendjes",
      img: "https://m.media-amazon.com/images/I/71KilybDOoL.jpg",
      quote: "Mendja e fortë ndryshon botën."
    },
    {
      title: "Kujtimet",
      img: "https://m.media-amazon.com/images/I/81eB+7+CkUL.jpg",
      quote: "Kujtimet janë pasuria jonë më e madhe."
    },
    {
      title: "Pasqyra e Kohës",
      img: "pasqyra.jfif",
      quote: "Koha pasqyron jetën tonë."
    },
    {
      title: "Mendja Pa Kufij",
      img: "https://m.media-amazon.com/images/I/91SZSW8qSsL.jpg",
      quote: "Mendja pa kufij krijon realitete të reja."
    },
    {
      title: "ilaqi",
      img: "ilaqi.jfif",
      quote: "Ilaçi më i mirë është shpresa — kur shpirti beson, trupi shërohet."
    },
    {
      title: "Horizonti i Ri",
      img: "https://m.media-amazon.com/images/I/91asIC1fRwL.jpg",
      quote: "Shiko përtej për të gjetur veten."
    }
  ]
};

// Fshi gjithçka kur klikon Home
function showHome() {
  document.getElementById('booksGrid').innerHTML = '';
  document.getElementById('quote').innerText = '';
}

// Shfaq kategori sipas zgjedhjes
function showCategory(category) {
  const booksGrid = document.getElementById('booksGrid');
  const quote = document.getElementById('quote');
  booksGrid.innerHTML = '';
  quote.innerText = '';

  booksData[category].forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.innerHTML = `<img src="${book.img}" alt="${book.title}"><h3>${book.title}</h3>`;
    card.addEventListener('click', () => {
      quote.innerText = `"${book.quote}"`;
    });
    booksGrid.appendChild(card);
  });
}

// Nis faqja bosh
showHome();
