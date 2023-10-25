import { View, Text } from 'react-native'
import React from 'react'
import SpinningTS from './SpinningTS'

const Heading = ({text1="", text2=""}) => {
  return (
    <View style={{ paddingTop: 30 }}>
    <View
      style={{
        flexDirection: "column",
        paddingHorizontal: 75,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 25, alignSelf: "center" }}>
        <SpinningTS />
      </Text>

      <Text style={{ fontSize: 20, fontWeight: "900" }}>{text1}</Text>
      <Text style={{ fontSize: 20, fontWeight: "900" }}>{text2}</Text>
    </View>
  </View>
  )
}

export default Heading