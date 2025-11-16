function KochDynasty() {
  const familyTree = [
    {
      id: 1,
      name: "Chila Rai (Sisto)",
      reign: "c. Early 16th Century",
      description: "Founder of the Koch dynasty",
      children: [2],
    },
    {
      id: 2,
      name: "Viswa Singha",
      reign: "1515–1540",
      description: "Consolidator of the Koch kingdom",
      children: [3],
    },
    {
      id: 3,
      name: "Nara Narayan",
      reign: "1540–1587",
      description: "Golden age ruler",
      children: [4, 5],
    },
    {
      id: 4,
      name: "Lakshmi Narayan",
      reign: "1587–1621",
      description: "First partition with Mughals",
      children: [6],
    },
    {
      id: 5,
      name: "Chilarai (Shukladhwaj)",
      reign: "Military General",
      description: "Legendary general and brother of Nara Narayan",
      children: [],
    },
    {
      id: 6,
      name: "Bir Narayan",
      reign: "1621–1626",
      children: [7],
    },
    {
      id: 7,
      name: "Prana Narayan",
      reign: "1626–1665",
      children: [8, 9],
    },
    {
      id: 8,
      name: "Moda Narayan",
      reign: "1665–1680",
      children: [],
    },
    {
      id: 9,
      name: "Vasanta Narayan",
      reign: "1680–1682",
      children: [10],
    },
    {
      id: 10,
      name: "Mahindra Narayan",
      reign: "1682–1693",
      children: [11, 12, 13],
    },
    {
      id: 11,
      name: "Rupa Narayan",
      reign: "1693–1714",
      children: [],
    },
    {
      id: 12,
      name: "Upendra Narayan",
      reign: "1714–1763",
      children: [],
    },
    {
      id: 13,
      name: "Debendra Narayan",
      reign: "1763–1765",
      children: [14],
    },
    {
      id: 14,
      name: "Dhairjendra Narayan",
      reign: "1765–1770",
      children: [15],
    },
    {
      id: 15,
      name: "Rajendra Narayan",
      reign: "1770–1772",
      children: [16],
    },
    {
      id: 16,
      name: "Dharendra Narayan",
      reign: "1772–1775",
      children: [17],
    },
    {
      id: 17,
      name: "Bijendra Narayan",
      reign: "1775–1783",
      children: [18],
    },
    {
      id: 18,
      name: "Harendra Narayan",
      reign: "1783–1839",
      description: "First to use title 'Maharaja'",
      children: [19],
    },
    {
      id: 19,
      name: "Shivendra Narayan",
      reign: "1839–1847",
      children: [20],
    },
    {
      id: 20,
      name: "Narendra Narayan",
      reign: "1847–1863",
      children: [21],
    },
    {
      id: 21,
      name: "Sir Nripendra Narayan",
      reign: "1863–1911",
      description: "Modernizer and prominent British India figure",
      children: [22, 23],
    },
    {
      id: 22,
      name: "Raj Rajendra Narayan",
      reign: "1911–1913",
      children: [],
    },
    {
      id: 23,
      name: "Jitendra Narayan",
      reign: "1913–1922",
      children: [24],
    },
    {
      id: 24,
      name: "Jagaddipendra Narayan",
      reign: "1922–1947",
      description: "Last ruling Maharaja",
      children: [],
    },
  ];

  const getMemberById = (id) => {
    return familyTree.find((member) => member.id === id);
  };

  const renderFlowChart = (memberId, level = 0) => {
    const member = getMemberById(memberId);
    if (!member) return null;

    return (
      <div key={member.id} className="flow-level">
        <div className="member-node">
          <div className="member-content">
            <h4 className="member-name">{member.name}</h4>
            <p className="member-reign">{member.reign}</p>
            {member.description && (
              <p className="member-description">{member.description}</p>
            )}
          </div>
        </div>

        {member.children && member.children.length > 0 && (
          <div className="children-flow">
            <div className="connector-line"></div>
            <div className="children-container">
              {member.children.map((childId) =>
                renderFlowChart(childId, level + 1)
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="container">
        <div className="sagar-dighi-desc-div">
          <h2>KOCH DYNASTY FAMILY TREE</h2>
          <div className="second-banner">
            <img
              src="./koch-dynasty-banner.jpg"
              alt="Koch Dynasty Family Tree"
              className="second-banner-image"
            />
          </div>

          <p>
            The royal lineage of Cooch Behar spans over four centuries, from the
            founding of the dynasty in the early 16th century to the merger with
            independent India in 1949. This flow chart shows the direct lineage
            of succession from father to son, illustrating the unbroken chain of
            rulers who shaped the region's history and heritage.
          </p>

          <div className="flow-chart-container">{renderFlowChart(1)}</div>

          <div className="dynasty-legacy">
            <h3 style={{ color: "rgb(216, 206, 62)", textAlign: "center" }}>
              Dynasty Legacy
            </h3>
            <div className="legacy-grid">
              <div className="legacy-item">
                <i className="fa-solid fa-crown"></i>
                <span>24 Rulers</span>
              </div>
              <div className="legacy-item">
                <i className="fa-solid fa-clock"></i>
                <span>400+ Years</span>
              </div>
              <div className="legacy-item">
                <i className="fa-solid fa-landmark"></i>
                <span>Cooch Behar Palace</span>
              </div>
              <div className="legacy-item">
                <i className="fa-solid fa-temple"></i>
                <span>Madan Mohan Temple</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default KochDynasty;
