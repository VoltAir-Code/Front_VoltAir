import React, { useEffect, useState } from 'react';
import { Circle, Svg } from 'react-native-svg';
import { ContainerTimer } from './Style';
import { ReText } from 'react-native-redash';
import Animated, { useSharedValue, withTiming, useAnimatedProps, useDerivedValue } from 'react-native-reanimated';

const Timer = ({ progressValue, duration }) => {
    const BACKGROUND_COLOR = '#ebe7dd';
    const STROKE_COLOR = '#F2732E';
    const CIRCLE_LENGTH = 200;
    const R = CIRCLE_LENGTH / (2 * Math.PI);
    const AnimatedCircle = Animated.createAnimatedComponent(Circle);




    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: Math.floor(CIRCLE_LENGTH * (1 - progressValue))
    }));

    const progressText = useDerivedValue(() => {
        return `${Math.floor(progressValue * 100)}`;
    },[progressValue]);

    return (
        <ContainerTimer>
            <Svg style={{ position: 'absolute' }} width={R * 2 + 60} height={R * 2 + 60}>
                <Circle
                    cx={R + 30}
                    cy={R + 30}
                    r={R}
                    stroke={BACKGROUND_COLOR}
                    strokeWidth={5}
                />
                <AnimatedCircle
                    cx={R + 30}
                    cy={R + 30}
                    r={R}
                    stroke={STROKE_COLOR}
                    strokeWidth={5}
                    strokeDasharray={CIRCLE_LENGTH}
                    animatedProps={animatedProps}
                    strokeLinecap={'round'}
                />
            </Svg>
            <ReText style={{ color: 'white' }} text={progressText} />
        </ContainerTimer>
    );
};

export default Timer;
