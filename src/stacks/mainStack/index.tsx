import { FC } from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const { Navigator, Screen } = createSharedElementStackNavigator<SharedStackParams>();

import ListScreen from 'modules/list';
import DetailScreen from 'modules/detail';

export const MainStack: FC<{ commonStackOptions: StackNavigationOptions }> = ({ commonStackOptions }) => {
  return (
    <Navigator initialRouteName="List" screenOptions={commonStackOptions}>
      <Screen name="List" component={ListScreen} options={{ headerShown: false }} />
      <Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
        sharedElements={route => {
          const { item } = route.params;
          return [`item.${item.id}.photo`];
        }}
      />
    </Navigator>
  );
};
