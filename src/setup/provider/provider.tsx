import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { store } from '../store/store';
import theme from '../mui-theme/theme';

type ProvidersProps = {
  children: React.ReactNode;
};

function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
}

export default Providers;
