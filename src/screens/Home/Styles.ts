import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";
import { moderateScale, scale, verticalScale } from "../../utils/responsive";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  /* SCALED */
  titleScaled: {
    fontSize: typography.h1,
    marginBottom: scale(12),
  },
  cardScaled: {
    padding: scale(16),
    borderRadius: scale(12),
    backgroundColor: colors.card,
    marginBottom: verticalScale(24),
  },
  bodyScaled: {
    fontSize: typography.body,
  },
  captionScaled: {
    fontSize: typography.caption,
    color: colors.muted,
  },

  /* NON-SCALED */
  titleNormal: {
    fontSize: 28,
    marginBottom: 12,
  },
  cardNormal: {
    padding: 16,
    backgroundColor: '#ddd',
    marginBottom: 24,
  },
  bodyNormal: {
    fontSize: 16,
  },

  button: {
    height: verticalScale(48),
    backgroundColor: colors.primary,
    borderRadius: scale(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: moderateScale(16),
    color: '#fff',
  },
  inputWrapper:{
    borderColor:'grey',
    // width: scale(200),
    height:verticalScale(40),
    borderWidth:1,
    marginBottom: verticalScale(10)
  }
});
