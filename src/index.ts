const body = document.body;
const refreshButton = document.querySelector('.header__refresh-btn');
// Key: e603766b06c2db59dbb2b28734620817

async function getLinkToImage() {
  try {
    const randomNumber = Math.floor(Math.random() * 100);
    const url =
      'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e603766b06c2db59dbb2b28734620817&tags=nature,spring,morning&tag_mode=all&extras=url_h&format=json&nojsoncallback=1';
    const res = await fetch(url);
    const data = await res.json();
    console.log('pic', data.photos.photo[randomNumber].url_h);
    if (data.photos.photo[randomNumber].url_h) {
      body.style.background = `url(${data.photos.photo[randomNumber].url_h}) no-repeat`;
    } else {
      body.style.background = `url(${data.photos.photo[1].url_h}) no-repeat`;
    }
    body.style.backgroundSize = 'cover';
  } catch (error) {
    console.log(error);
  }
}

getLinkToImage();

refreshButton!.addEventListener('click', getLinkToImage);

// API KEY 66D3316E86916E3DEDD65436F5E5987D https://api.ip2location.io/?key=66D3316E86916E3DEDD65436F5E5987D&ip=37.214.55.175&format=json
// token 7294e3d66a4e34 https://ipinfo.io?callback=callback&token=7294e3d66a4e34
async function getLocation() {
  try {
    const url = 'https://ipinfo.io?token=7294e3d66a4e34';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getLocation();
