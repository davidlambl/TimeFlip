import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const TimeFlipCalendar: React.FC = () => {
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);

	const handleDateChange = (value: Value) => {
		setSelectedDate(value instanceof Date ? value : null);
	};

	return (
		<div>
			<h1>Event Calendar</h1>
			<Calendar onChange={handleDateChange} value={selectedDate} />
			{selectedDate && (
				<Link to={`/event/${selectedDate.toISOString().split('T')[0]}`}>
					View Details
				</Link>
			)}
		</div>
	);
};

export default TimeFlipCalendar;
