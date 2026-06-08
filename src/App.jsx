const parks = [
  {
    id: 1,
    name: "Crater Lake National Park",
    location: "Southern Oregon",
    bestTime: "July - September",
    attraction: "Deepest lake in the U.S., stunning blue water",
    fee: "$30 per vehicle",
    activities: ["Hiking", "Scenic drives", "Boat tours"]
  },
  {
    id: 2,
    name: "Mount Rainier National Park",
    location: "Pierce County, WA",
    bestTime: "July - August",
    attraction: "Iconic 14,410 ft volcano with glaciers",
    fee: "$30 per vehicle",
    activities: ["Hiking", "Wildflower viewing", "Climbing"]
  },
  // ... add the other 8 parks the same way
];
function App() {
  return (
    <div className="App">
      
      {/* HEADER */}
      <header className="header">
        <h1>Mossy Trails & Mountain Tales</h1>
        <p>Your Guide to Oregon & Washington's Best Parks</p>
      </header>

      {/* CARDS SECTION - we'll add this next */}
      
    </div>
  );
}

<div className="App">
  
  <header className="header">
    <h1>Mossy Trails & Mountain Tales</h1>
    <p>Your Guide to Oregon & Washington's Best Parks</p>
  </header>

  {/* CARDS GRID */}
  <div className="card-grid">
    {parks.map((park) => (
      <div className="card" key={park.id}>
        <h2>{park.name}</h2>
        <p className="location">📍 {park.location}</p>
        <p className="best-time">🌞 Best Time: {park.bestTime}</p>
        <p className="attraction">{park.attraction}</p>
        <p className="fee">💰 {park.fee}</p>
        <div className="activities">
          {park.activities.map((activity, index) => (
            <span key={index} className="activity-tag">{activity}</span>
          ))}
        </div>
      </div>
    ))}
  </div>

</div>
export default App;