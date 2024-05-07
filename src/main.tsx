import { extendTheme } from '@chakra-ui/react'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from "@chakra-ui/react"
import App from './App.tsx';
import './index.css';
import './DatePickerStyles.css';

async function startServiceWorkerInDev() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./mocks/browser');
    return worker.start();
  }
}

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#5a96a8;",
        color: "#202224;",
      },
    },
  },
});

void startServiceWorkerInDev().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  );
});
