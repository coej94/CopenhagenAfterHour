import React from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';

const Maps = () => {
  return (
    <MapView
    style={{ flex: 1 }}
    initialRegion={{
      latitude: 55.6773718,
      longitude: 12.5719012,
      latitudeDelta: 0.0230,
      longitudeDelta: 0.0140
    }}
  />
  );
};

export { Maps };
