/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'
import {VideoPlayer} from './VideoPlayer'

const VideoOverlay = React.memo((props: {layout: LayoutType}) => {
  const videoOverlayStyle = ((type: LayoutType) => {
    switch (type) {
      case LayoutType.SLIDE_LEFT:
        return styles.leftVideoLayout
      case LayoutType.SLIDE_LEFT_OVERLAY:
        return styles.leftOverlayVideoLayout
      case LayoutType.SLIDE_RIGHT:
        return styles.rightVideoLayout
      case LayoutType.SLIDE_RIGHT_OVERLAY:
        return styles.rightOverlayVideoLayout
      case LayoutType.OVERLAY:
        return styles.overlayVideoLayout
      default:
        return styles.noneVideoLayout
    }
  })(props.layout)
  return (
    <View style={[styles.videoOverlay, videoOverlayStyle]}>
      <Text>{props.layout}</Text>
    </View>
  )
})

enum LayoutType {
  NONE = 'NONE',
  SLIDE_LEFT = 'SLIDE_LEFT',
  SLIDE_LEFT_OVERLAY = 'SLIDE_LEFT_OVERLAY',
  SLIDE_RIGHT = 'SLIDE_RIGHT',
  SLIDE_RIGHT_OVERLAY = 'SLIDE_RIGHT_OVERLAY',
  OVERLAY = 'OVERLAY'
}

const App = () => {
  const [layout, setLayout] = useState(LayoutType.NONE)
  const handleClick = (type: LayoutType) => {
    setLayout(type)
  }

  const videoContainerStyle = ((type: LayoutType) => {
    switch (type) {
      case LayoutType.SLIDE_LEFT:
        return styles.leftLayout
      case LayoutType.SLIDE_LEFT_OVERLAY:
        return styles.leftOverlayLayout
      case LayoutType.SLIDE_RIGHT:
        return styles.rightLayout
      case LayoutType.SLIDE_RIGHT_OVERLAY:
        return styles.rightOverlayLayout
      case LayoutType.OVERLAY:
        return styles.overlayLayout
      default:
        return {}
    }
  })(layout)
  return (
    <View style={styles.container}>
      <VideoPlayer
        supplementaryView={<VideoOverlay layout={layout} />}
        containerStyle={videoContainerStyle}
      />
      <View style={styles.contentContainer}>
        <Button
          color={'black'}
          title={'Slide from Left'}
          onPress={handleClick.bind(null, LayoutType.SLIDE_LEFT)}
        />
        <Button
          color={'black'}
          title={'Slide from Left Overlay'}
          onPress={handleClick.bind(null, LayoutType.SLIDE_LEFT_OVERLAY)}
        />
        <Button
          color={'black'}
          title={'Slide from Right'}
          onPress={handleClick.bind(null, LayoutType.SLIDE_RIGHT)}
        />
        <Button
          color={'black'}
          title={'Slide from Right Overlay'}
          onPress={handleClick.bind(null, LayoutType.SLIDE_RIGHT_OVERLAY)}
        />
        <Button
          color={'black'}
          title={'Complete Overlay'}
          onPress={handleClick.bind(null, LayoutType.OVERLAY)}
        />
        <Button
          color={'black'}
          title={'None'}
          onPress={handleClick.bind(null, LayoutType.NONE)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  safeArea: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'green'
  },
  videoOverlay: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftLayout: {
    flexDirection: 'row-reverse'
  },
  leftVideoLayout: {
    height: '100%',
    width: 100,
    backgroundColor: 'pink'
  },
  leftOverlayLayout: {},
  leftOverlayVideoLayout: {
    position: 'absolute',
    width: '50%',
    height: '100%',
    backgroundColor: '#ffffff80'
  },
  rightLayout: {
    flexDirection: 'row'
  },
  rightVideoLayout: {
    height: '100%',
    width: 100,
    backgroundColor: 'pink'
  },
  rightOverlayLayout: {},
  rightOverlayVideoLayout: {
    position: 'absolute',
    right: 0,
    width: '50%',
    height: '100%',
    backgroundColor: '#ffffff80'
  },
  overlayLayout: {},
  overlayVideoLayout: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff80'
  },
  noneVideoLayout: {
    height: 0
  }
})

export default App
