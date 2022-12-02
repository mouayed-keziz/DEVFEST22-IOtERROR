import React, { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, Container } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);



function Application() {
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <Container py={"lg"} size="xs" style={{
          height: "100vh",
        }}>
          < App />
        </Container>
      </MantineProvider>
    </ColorSchemeProvider >
  );
}