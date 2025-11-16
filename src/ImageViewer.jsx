function ImageViewer({ imagename, handleImageViewerClose }) {
  return (
    <>
      <div
        className="image-viewer"
        style={{ backgroundImage: `url(${imagename})` }}
        onClick={handleImageViewerClose}
      ></div>
    </>
  );
}

export default ImageViewer;
