import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';

export default function Volante({ color, size, margin }) {
  return (
    <View style={{ margin: margin }}>
      <Svg width={size} height={size} viewBox="0 0 61.3 95.51" fill="none">
        <Path 
          d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,3a9.012,9.012,0,0,1,8.306,5.536L14.024,9.793a10.705,10.705,0,0,1-4.19,0L3.683,8.562A9.013,9.013,0,0,1,12,3ZM3.006,12.307l3.154.631a4,4,0,0,1,2.733,2.018l.625,1.153a4.006,4.006,0,0,1,.482,1.9v2.763A9.017,9.017,0,0,1,3.006,12.307ZM14,20.776V18.013a4.006,4.006,0,0,1,.482-1.9l.625-1.153a4,4,0,0,1,2.733-2.018l3.154-.631A9.017,9.017,0,0,1,14,20.776Z" 
          fill={color} 
        />
      </Svg>
    </View>
  );
}
