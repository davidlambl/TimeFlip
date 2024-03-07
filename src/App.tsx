/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TimeFlipCalendar from './components/TimeFlipCalendar';
// import EventDetails from './components/EventDetails';
import './App.css';

// Create a client
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const queryClient = new QueryClient();

const App: React.FC = () => {
	useEffect(() => {
		netlifyIdentity.init();
	}, []);

	const user = netlifyIdentity.currentUser();

	return (
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		<QueryClientProvider client={queryClient}>
			<div>
				<button onClick={() => netlifyIdentity.open('login')}>Log In</button>
				<button onClick={() => netlifyIdentity.logout()}>Log Out</button>
				<p>{user && `Welcome, ${user}`}</p>
			</div>
			<Router>
				<Routes>
					<Route path="/" element={<TimeFlipCalendar />} />
					{/* <Route path="/event/:date" element={<EventDetails />} /> */}
				</Routes>
			</Router>
			{/* <ReactQueryDevtools initialIsOpen /> */}
		</QueryClientProvider>
	);
};

export default App;
