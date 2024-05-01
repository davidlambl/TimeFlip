import React from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (

    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};

export default App;
