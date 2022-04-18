import { StyleSheet } from 'react-native';

import { scale } from '../../Shared/utils/scale';
//import { scale } from '_utils';

//MyAccountView

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: scale(60),
  },
});
