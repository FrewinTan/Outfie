import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View, Text } from "react-native";

import { icons } from "./../../../assets/constants";

const TabIcon = ({source, focused}) => 
    (
    <View className={`h-24 w-24 items-center`}>
        <Image
            source={source}
            className="w-16 h-16 absolute justify-center items-center"
            tintColor={focused ? "#8FABE5" : "#737373"}
            resizeMode="contain"
        />
    </View>
);

const Layout = () => {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontFamily: "openSans",
          fontWeight: 500,
          fontSize: 10,
          height: 20,
          marginTop: 1,
        },
        tabBarStyle: {
          backgroundColor: "white",
          paddingBottom: 0, // ios only
          overflow: "hidden",
          height: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          position: "relative",
        },
        tabBarActiveTintColor: "#8FABE5",
        tabBarInactiveTintColor: "#737373",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="outfit"
        options={{
          title: "Outfit",
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.outfit} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="closet"
        options={{
          title: "Closet",
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.closet} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="myself"
        options={{
          title: "Myself",
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.myself} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;