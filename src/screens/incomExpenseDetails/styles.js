import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/theme';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentView: {
    margin: 18,
  },
  submitButton: {
    height: 52,
    width: '40%',
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 22,
  },
  submitText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
  },
});
