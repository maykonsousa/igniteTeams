import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import {ThemeProvider} from 'styled-components/native';
import theme from './src/themes'
import { Loading } from '@components/Loading';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })
  return (
    <ThemeProvider theme={theme}>
   {fontsLoaded ? <Routes /> : <Loading size={96}  />}
   <StatusBar style="light" translucent backgroundColor='transparent' />
    </ThemeProvider>
  );
}


