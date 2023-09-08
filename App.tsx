import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { Home } from '@screens/Home';
import { NewTeam } from '@screens/NewTeam';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/themes'
import { Loading } from '@components/Loading';
import { StatusBar } from 'expo-status-bar';
import { Colabs } from '@screens/Colabs';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })
  return (
    <ThemeProvider theme={theme}>
   {fontsLoaded ? <Colabs /> : <Loading size={96}  />}
   <StatusBar style="light" translucent backgroundColor='transparent' />
    </ThemeProvider>
  );
}


