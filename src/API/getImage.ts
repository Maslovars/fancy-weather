const body = document.body;
// Key: e603766b06c2db59dbb2b28734620817

export async function getLinkToImage() {
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
