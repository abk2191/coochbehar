function MadanMohan({ handleImageViewer }) {
  return (
    <>
      <div className="container">
        <div className="sagar-dighi-desc-div">
          <h2>MADAN MOHAN TEMPLE</h2>
          <div className="second-banner">
            <img
              src="./Madan2.jpg"
              alt="cob-palace"
              className="second-banner-image"
              onClick={() => handleImageViewer("./Madan2.jpg")}
            />
          </div>
          <p>
            The Madan Mohan Temple in Cooch Behar was built in the late 19th
            century during the reign of Maharaja Nripendra Narayan, dedicated to
            Lord Madan Mohan, the royal family’s beloved form of Krishna.
            Designed in the classical Bengal temple style, it became the
            spiritual heart of the kingdom and a symbol of the Koch dynasty’s
            devotion. The temple is especially known for the Raas Utsav, when
            thousands gather to celebrate with music, lights, and traditional
            rituals. Today, it remains one of Cooch Behar’s most sacred and
            culturally vibrant landmarks, preserving centuries of faith and
            tradition.
          </p>
        </div>
      </div>
    </>
  );
}

export default MadanMohan;
