import { createTheme, ThemeProvider } from '@material-ui/core';
import type { AppProps } from 'next/app'
import { customTheme } from '../src/styles/Theme';

const theme = createTheme({
  custom: customTheme
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ theme }>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp
