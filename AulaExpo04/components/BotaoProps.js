import React from 'react'
import { TouchableOpacity, Text} from 'react-native'

const BotaoProps = ({label, corFundo, msg}) => {

    const botaoStyle = {
        backgroundColor: corFundo,
        padding: 10,
        borderRadius: 5
        
    }

    const handlePress = () => {
        console.log(msg)
      }

    return (
        <TouchableOpacity onPress={handlePress} style={botaoStyle}>
            <Text>{label}</Text>
        </TouchableOpacity>
    )
}

export default BotaoProps