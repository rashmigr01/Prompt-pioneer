import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from './components/AppAppBar';
import Intent from './components/Intent';
import Modifiers from './components/Modifiers';
import Footer from './components/Footer';
import Descriptions from './components/Descriptions';
import Main from './components/Main';

export default function App({ exportedString2 }) {
  const [mode, setMode] = React.useState('dark');
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const [exportedString, setExportedString] = React.useState('');

  const handleExport = (str) => {
    setExportedString(str);
  };

  const [exportedString_2, setExportedString_2] = React.useState(exportedString);

  const handleExport_2 = (str) => {
    setExportedString_2(str);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Main exportedString_2={exportedString_2}/>
        <Divider />
        <Modifiers onExport={handleExport} />
        <Divider />
        <Intent exportedString={exportedString} onExport_2={handleExport_2}/>
        <Divider />
        <Descriptions />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
