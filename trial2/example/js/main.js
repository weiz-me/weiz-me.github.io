const panoImage = document.querySelector('.pano-image')

const panorama = new PANOLENS.ImagePanorama( '../images/1.jpg' );
const viewer = new PANOLENS.Viewer({
  container:panoImage
});
viewer.add( panorama );
