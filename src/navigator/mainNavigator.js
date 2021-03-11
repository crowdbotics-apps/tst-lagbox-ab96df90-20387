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

const AppNavigator = {
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
