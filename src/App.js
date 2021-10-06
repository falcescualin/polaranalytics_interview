import './App.css';

function App() {
  const months = [
    'Dec',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const days = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

  // Days in year   365
  // Weeks in year  53
  // Months in year 12

  return (
    <div
      style={{
        padding: '5rem',
      }}
    >
      <div className="container">
        <div className="container-grid">
          <div className="months">
            {months.map((month) => (
              <div>{month}</div>
            ))}
          </div>
          <div className="days">
            {days.map((day) => (
              <div>{day}</div>
            ))}
          </div>
          <div className="content">
            {Array(365)
              .fill()
              .map((day) => (
                <a
                  href="/"
                  className={`l${Math.floor(
                    Math.random() * 5
                  )}-contribution box`}
                >
                  {day}
                </a>
              ))}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: '1rem',
            paddingLeft: '3rem',
            paddingRight: '3rem',
          }}
        >
          <a
            target="_blank"
            href="/"
            style={{
              textDecoration: 'none',
            }}
            rel="noreferrer"
          >
            Learn how we count contributions.
          </a>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ marginRight: '0.5rem' }}>Less</div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div className="l0-contribution box"></div>
              <div className="l1-contribution box"></div>
              <div className="l2-contribution box"></div>
              <div className="l3-contribution box"></div>
              <div className="l4-contribution box"></div>
            </div>
            <div style={{ marginLeft: '0.5rem' }}>More</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
