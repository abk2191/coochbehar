function ImageViewer({ imagename, handleImageViewerClose }) {
  return (
    <>
      <div className="image-viewer-backdrop" onClick={handleImageViewerClose}>
        <div className="image-viewer" onClick={(e) => e.stopPropagation()}>
          <img src={imagename} alt="image" className="image-in-view" />
        </div>
      </div>
    </>
  );
}

export default ImageViewer;
