import React from 'react'
import { View, StyleSheet } from 'react-native'

import BotaoProps from './components/BotaoProps'

const App = () => {
 
  return (
    <View style={styles.container}>
      <BotaoProps corFundo={'#fff'} msg={'Botão 1'} label={'Botão'}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App;

