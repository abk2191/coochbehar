function KochDynasty({ handleImageViewer }) {
  return (
    <>
      <div className="container">
        <div className="sagar-dighi-desc-div">
          <h2>THE KOCH DYNASTY</h2>
          <div className="second-banner">
            <img
              src="./koch.png"
              alt="cob-palace"
              className="second-banner-image"
              onClick={() => handleImageViewer("./koch.png")}
            />
          </div>
          <p>
            The chart shows a genealogical flow of the Koch Dynasty of Cooch
            Behar, beginning with Maharaja Vishwa Singha (c.1515–1540),
            recognized as the dynasty’s founder. His successors branch primarily
            through Naranarayan and Lakshminarayan, whose descendants split into
            multiple parallel lines over several generations. The tree maps
            rulers such as Pran Narayan, Mahendra Narayan, Mod Narayan, Devendra
            Narayan, and Dhairendra Narayan, showing how the lineage repeatedly
            divided and rejoined across different family branches. It concludes
            with Maharaja Nripendra Narayan (c.1863–1911), marked as the last
            ruling Maharaja of Cooch Behar. The entire flow visually illustrates
            centuries of succession through fathers, sons, and multiple
            collateral lines within the royal house.
          </p>
        </div>
      </div>
    </>
  );
}

export default KochDynasty;
