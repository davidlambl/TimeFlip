import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TimeFlipCalendar from './components/Calendar';
import EventDetails from './components/EventDetails';
import 'react-calendar/dist/Calendar.css';
import './App.css';

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<TimeFlipCalendar />} />
				<Route path="/event/:date" element={<EventDetails />} />
			</Routes>
		</Router>
	);
};

export default App;
