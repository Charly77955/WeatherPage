
import './App.css';
import TodayWeather from './pages/todayWeather/todayWeather';
import WeekWeather from './pages/weekWeather/weekWeather';
import Hightlights from './pages/hightlights/hightlights';

function App() {
  return (
    <div className="App">
      <TodayWeather/>
      <WeekWeather/>
      <Hightlights/>
    </div>
  );
}

export default App;
