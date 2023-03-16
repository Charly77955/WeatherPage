
import './App.css';
import TodayWeather from './pages/todayWeather/todayWeather';
import WeekWeather from './pages/weekWeather/weekWeather';

function App() {
  return (
    <div className="App">
      <TodayWeather/>
      <WeekWeather/>
    </div>
  );
}

export default App;
