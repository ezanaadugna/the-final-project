import { Text, View } from 'react-native';
import MapStyles from '../styles/mapStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';


const BulidingComponent = () => {
  return (
    <TouchableOpacity style={MapStyles.buildBox}>
      <Text style={MapStyles.boxText}>box</Text>
    </TouchableOpacity>
  );

}

export default BulidingComponent
