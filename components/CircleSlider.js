import React, { useRef, useState } from 'react';
import { View, StyleSheet, PanResponder } from 'react-native';

const CircleSlider = ({ value, onValueChange, size, strokeWidth, dialWidth, gradientColorFrom, gradientColorTo, maxValue }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const angle = (value / maxValue) * 360;
    const rotate = angle - 180;
    const rotateValue = `rotate(${rotate}deg)`;

    const dialStyle = {
        width: dialWidth,
        height: dialWidth,
        borderRadius: dialWidth / 2,
        backgroundColor: gradientColorFrom,
        transform: [{ rotate: rotateValue }],
        position: 'absolute',
        top: size / 2 - dialWidth / 2,
        left: strokeWidth / 2 - dialWidth / 2,
    };

    const [panResponderState, setPanResponderState] = useState({
        prevAngle: angle,
        valueAtPanStart: value,
    });

    const panResponderRef = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                setPanResponderState({
                    prevAngle: angle,
                    valueAtPanStart: value,
                });
            },
            onPanResponderMove: (_, gestureState) => {
                const { moveX, moveY } = gestureState;
                const center = size / 2;
                const xFromCenter = moveX - center;
                const yFromCenter = center - moveY;
                const angle = (Math.atan2(yFromCenter, xFromCenter) * 180) / Math.PI + 90;
                let newValue = Math.round((angle / 360) * maxValue);
                if (newValue < 0) {
                    newValue = 0;
                } else if (newValue > maxValue) {
                    newValue = maxValue;
                }
                const oldValue = panResponderState.valueAtPanStart;
                const diff = newValue - oldValue;
                let updatedValue = oldValue;
                if (Math.abs(diff) >= maxValue / 2) {
                    const direction = diff < 0 ? -1 : 1;
                    updatedValue = oldValue + direction * (maxValue - Math.abs(diff));
                } else {
                    updatedValue = oldValue + diff;
                }
                onValueChange(updatedValue);
            },
        })
    ).current;

    return (
        <View {...panResponderRef.panHandlers}>
            <View
                style={[
                    styles.progress,
                    {
                        width: size,
                        height: size,
                        borderRadius: size / 2,
                        borderWidth: strokeWidth,
                        borderColor: gradientColorTo,
                    },
                ]}
            />
            <View
                style={[
                    styles.progress,
                    {
                        width: size,
                        height: size,
                        borderRadius: size / 2,
                        borderWidth: strokeWidth,
                        borderColor: gradientColorFrom,
                        transform: [{ rotate: rotateValue }],
                    },
                ]}
            />
            <View style={dialStyle} />
        </View>
    );
};

const styles = StyleSheet.create({
    progress: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
});

export default CircleSlider;
