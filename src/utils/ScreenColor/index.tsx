import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector} from 'react-redux';
import {RootState} from '../../Redux/store';
const isDarkMode = useSelector(
  (state: RootState) => state.rootReducer.DarkTheme,
);
export const backgroundStyle = {
  backgroundColor: isDarkMode.isDarkMode ? Colors.darker : Colors.lighter,
};
