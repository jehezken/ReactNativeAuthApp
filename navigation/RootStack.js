import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import UserStack from "./UserStack";

export default function RootStack() {
  const isAuth = true;

  return <NavigationContainer>{!isAuth ? <AuthStack /> : <UserStack />}</NavigationContainer>;
}
