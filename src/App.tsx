import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TimeFlipCalendar from './components/TimeFlipCalendar';

// Create a client
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (

    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<TimeFlipCalendar />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};

export default App;
