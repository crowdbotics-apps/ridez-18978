import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile79795Navigator from '../features/UserProfile79795/navigator';
import Maps79776Navigator from '../features/Maps79776/navigator';
import Settings79754Navigator from '../features/Settings79754/navigator';
import Settings79739Navigator from '../features/Settings79739/navigator';
import NotificationList79738Navigator from '../features/NotificationList79738/navigator';
import Maps79737Navigator from '../features/Maps79737/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile79795: { screen: UserProfile79795Navigator },
Maps79776: { screen: Maps79776Navigator },
Settings79754: { screen: Settings79754Navigator },
Settings79739: { screen: Settings79739Navigator },
NotificationList79738: { screen: NotificationList79738Navigator },
Maps79737: { screen: Maps79737Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
