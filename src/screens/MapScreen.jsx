import { useRoute } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen() {
  const {
    params: { latitude, longitude },
  } = useRoute();

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{ latitude, longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
      mapType="standard"
    >
      <Marker coordinate={{ latitude, longitude }} />
    </MapView>
  );
}
