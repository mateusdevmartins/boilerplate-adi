import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { decrease, increase } from '../store';
import { styles } from './styles';

export const MyAccountView = () => {
  const counter = useSelector((state: RootState) => state.accountReducer.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => dispatch(decrease())}>
        -
      </Text>
      <Text style={styles.text}>{counter}</Text>
      <Text style={styles.text} onPress={() => dispatch(increase())}>
        +
      </Text>
    </View>
  );
};
