import Svg, { Circle, Path } from 'react-native-svg';
export default function GaleriaCamera({ color, size }) {
return (
<>
<Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path
d="M19.5,0H4.5A4.505,4.505,0,0,0,0,4.5v15A4.505,4.505,0,0,0,4.5,24h15A4.505,4.505,0,0,0,24,19.5V4.5A4.505,4.505,0,0,0,19.5,0ZM4.5,3h15A1.5,1.5,0,0,1,21,4.5v15a1.492,1.492,0,0,1-.44,1.06l-8.732-8.732a4,4,0,0,0-5.656,0L3,15V4.5A1.5,1.5,0,0,1,4.5,3Z"
fill={color}

/>
<Path
d="M13 6V5C13 2.79086 11.2091 1 9 1V1C6.79086 1 5 2.79086 5 5V6"
/>
<Circle cx="15.5" cy="7.5" r="2.5"
fill={color}

/>

</Svg>
</>
);
}