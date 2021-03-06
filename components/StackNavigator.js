import { Platform } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import MaterialTopTabNavigator from './MaterialTopTabNavigator'
import BottomTabNavigator from './BottomTabNavigator'
import DeckView from './DeckView'
import NewCard from './NewCard'
import Quiz from './Quiz'

// Configuration of stack navigator
const StackNavigator = createStackNavigator({
  Home: {
    screen: Platform.OS === 'ios' ? BottomTabNavigator : MaterialTopTabNavigator,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  DeckView: {
    screen: DeckView,
  },
  NewCard: {
    screen: NewCard,
  },
  Quiz: {
    screen: Quiz
  }
}, {
  headerMode: Platform.OS === 'ios' ? 'float' : 'none',
})

// Creation of stack navigator
export default StackNavigatorContainer = createAppContainer(StackNavigator)