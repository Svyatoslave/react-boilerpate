import React from 'react';

import './App.css';

const formatDate = (date) => date.toLocaleString();

const App = () => {
  const [currentDate, setDate] = React.useState(formatDate(new Date()));

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDate(formatDate(new Date()));
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Welcome to React App</h1>
      <h3>Date: {currentDate}</h3>
    </div>
  );
};

export default App;
