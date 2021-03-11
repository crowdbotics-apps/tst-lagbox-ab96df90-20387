import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion

/**
 * new navigators can be imported here
 */ import PlanGame117883 from "../features/PlanGame117883/navigator"
import SplashScreen217884 from "../features/SplashScreen217884/navigator"
import TheClubhouse317885 from "../features/TheClubhouse317885/navigator"
import TheProShop617888 from "../features/TheProShop617888/navigator"
import TheGrill717889 from "../features/TheGrill717889/navigator"

const AppNavigator = {
  TheGrill717889: { screen: TheGrill717889 },
  TheProShop617888: { screen: TheProShop617888 },
  TheClubhouse317885: { screen: TheClubhouse317885 },
  SplashScreen217884: { screen: SplashScreen217884 },
  PlanGame117883: { screen: PlanGame117883 },
  //@BlueprintNavigationInsertion

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
