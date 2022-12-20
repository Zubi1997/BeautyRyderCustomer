import React from "react"
import { Modal as DefaultModal, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import colors from "../assets/colors"
import { GradientCrossIcon } from "../assets/Svgs/svg_icons"
import { screenWidth } from "../assets/utils"

export const Modal = ({ children, ...props }) => {
  const { hasModalOverlay = true, hasCloseIcon = true } = props;
  return (
    <DefaultModal transparent statusBarTranslucent animationType={'fade'} {...props}>
      <View style={styles.modal}>
        {hasModalOverlay && <TouchableWithoutFeedback onPress={props.onRequestClose}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        }
        <View style={styles.modalContent}>
          {hasCloseIcon && (
            <TouchableOpacity style={{ alignSelf: 'center', marginTop: -20 }} onPress={props.onRequestClose}>
              <GradientCrossIcon />
            </TouchableOpacity>
          )}
          {children}
        </View>
      </View>
    </DefaultModal>
  )
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: screenWidth - 40,
    marginHorizontal: 20,
    backgroundColor: colors.background,
    borderColor: colors.gradient1,
    borderWidth: 1,
    borderRadius: 4,
    padding: 20,
    paddingTop: 0,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
});
