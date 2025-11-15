function CityStats() {
  return (
    <>
      <div className="city-stats-wrapper">
        <div className="city-stats">
          <div className="city-stats-container">
            <div className="city-stats-heading">
              <h1>CITY AT A GLANCE</h1>
            </div>
            <div className="city-stats-details">
              <div className="city-stats-details-container">
                <p>
                  <i class="fa-regular fa-map"></i> Area:{" "}
                  <span style={{ color: "gray" }}>3387 sq km</span>
                </p>
                <p>
                  <i class="fa-solid fa-user-group"></i> Population:{" "}
                  <span style={{ color: "gray" }}>28,19,086</span>
                </p>
                <p>
                  <i class="fa-solid fa-book"></i> Literacy rate:{" "}
                  <span style={{ color: "gray" }}>65.64%</span>
                </p>
                <p>
                  <i class="fa-solid fa-building-columns"></i> Municipality:{" "}
                  <span style={{ color: "gray" }}>6</span>
                </p>
                <p>
                  <i class="fa-solid fa-chart-area"></i> Block:{" "}
                  <span style={{ color: "gray" }}>12</span>
                </p>
                <p>
                  <i class="fa-solid fa-people-line"></i> Gram Panchayat:{" "}
                  <span style={{ color: "gray" }}>128</span>
                </p>
                <p>
                  <i class="fa-solid fa-house"></i> Villages:{" "}
                  <span style={{ color: "gray" }}>1188</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CityStats;
