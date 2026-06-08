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
  {
    id: 3,
    name: "Olympic National Park",
    location: "Olympic Peninsula, WA",
    bestTime: "June - September",
    attraction: "Diverse ecosystems from rainforests to beaches",
    fee: "$30 per vehicle",
    activities: ["Hiking", "Tide pooling", "Wildlife viewing"]
  },
  {
    id: 4,
    name: "North Cascades National Park",
    location: "Northern Washington",
    bestTime: "July - September",
    attraction: "Rugged peaks and over 300 glaciers",
    fee: "Free",
    activities: ["Backpacking", "Mountaineering", "Photography"]
  },
  {
    id: 5,
    name: "Columbia River Gorge",
    location: "Oregon/Washington Border",
    bestTime: "April - October",
    attraction: "Waterfalls and dramatic canyon views",
    fee: "Free (parking fees vary)",
    activities: ["Hiking", "Windsurfing", "Waterfall tours"]
  },
  {
    id: 6,
    name: "Smith Rock State Park",
    location: "Central Oregon",
    bestTime: "March - May, September - November",
    attraction: "World-class rock climbing destination",
    fee: "$5 per vehicle",
    activities: ["Rock climbing", "Hiking", "Mountain biking"]
  },
  {
    id: 7,
    name: "Cannon Beach",
    location: "Northern Oregon Coast",
    bestTime: "June - September",
    attraction: "Iconic Haystack Rock and sandy beaches",
    fee: "Free",
    activities: ["Beach walking", "Tide pooling", "Photography"]
  },
  {
    id: 8,
    name: "Silver Falls State Park",
    location: "Sublimity, Oregon",
    bestTime: "Year-round",
    attraction: "Trail of Ten Falls with walkable waterfalls",
    fee: "$5 per vehicle",
    activities: ["Hiking", "Camping", "Photography"]
  },
  {
    id: 9,
    name: "Multnomah Falls",
    location: "Columbia River Gorge, OR",
    bestTime: "Year-round",
    attraction: "Oregon's tallest waterfall at 620 feet",
    fee: "Free (parking permit required)",
    activities: ["Hiking", "Sightseeing", "Photography"]
  },
  {
    id: 10,
    name: "Deception Pass State Park",
    location: "Whidbey Island, WA",
    bestTime: "May - September",
    attraction: "Dramatic bridge and rugged coastline",
    fee: "$10 per vehicle (Discover Pass)",
    activities: ["Hiking", "Kayaking", "Beach exploration"]
  }
];

function App() {
  return (
    <div className="App">
      
      {/* HEADER */}
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
  );
}

export default App;