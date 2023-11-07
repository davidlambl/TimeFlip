import React, { useState } from 'react';
import Calendar from 'react-calendar';
import EventDetails from './EventDetails';
import './TimeFlipCalendar.css';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const TimeFlipCalendar: React.FC = () => {
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);

	const handleDateChange = (value: Value) => {
		setSelectedDate(value instanceof Date ? value : null);
	};

	return (
		<>
			<div className="upper-half">
				<Calendar onChange={handleDateChange} value={selectedDate} />
			</div>
			<div className="lower-half">
				<EventDetails selectedDate={selectedDate} />
			</div>
		</>
	);
};

export default TimeFlipCalendar;
