import React from 'react'
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native'
import {useDeviceOrientation} from '@react-native-community/hooks'

interface VideoPlayerParams {
  supplementaryView?: React.ReactElement
  containerStyle?: StyleProp<ViewStyle>
}

const Video = View

export const VideoPlayer = React.memo<VideoPlayerParams>((props) => {
  return (
    <View
      style={
        useDeviceOrientation().landscape
          ? [styles.fullScreenContainer, props.containerStyle]
          : [styles.container, props.containerStyle]
      }>
      <Video style={styles.video}>
        <Text style={styles.videoText}>Actual Video will be played here</Text>
      </Video>
      {props.supplementaryView}
    </View>
  )
})

const styles = StyleSheet.create({
  fullScreenContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 10000
  },
  container: {
    aspectRatio: 16 / 9,
    backgroundColor: 'purple'
  },
  video: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  videoText: {
    color: '#fff'
  }
})
