import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query'; // Import QueryClient and QueryClientProvider
import store from './store/store';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.render(
  <Provider store={store}>
    {/* Wrap the App component with both Provider and QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>,
  document.getElementById('root')
);
