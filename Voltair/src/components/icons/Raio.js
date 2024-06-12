import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';

export default function Raio({ color, size, margin }) {
  return (
    <View style={{ margin: margin }}>
      <Svg width={size} height={size} viewBox="0 0 61.3 95.51" fill="none">
        <Path 
          d="M60.83,4.01l-20.55,29.43c-1.18,1.7.03,4.02,2.1,4.01l15.68-.06c2.21,0,3.39,2.61,1.91,4.25L12.58,94.64c-1.95,2.18-5.43-.09-4.23-2.75l13.07-28.99c.77-1.7-.49-3.62-2.36-3.6l-16.48.2c-1.82.02-3.08-1.82-2.4-3.51L22.2,1.73c.39-.96,1.32-1.59,2.36-1.59L58.73,0c2.07,0,3.29,2.32,2.1,4.01Z" 
          fill={color} 
        />
      </Svg>
    </View>
  );
}
