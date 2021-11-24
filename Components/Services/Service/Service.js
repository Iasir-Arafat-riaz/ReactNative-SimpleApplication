import React from 'react'
import { View, Text, Image,StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      color: "red",
      textAlign:"center"
    },
    serviceImage:{
        borderRadius:10
    }

  });
  

export default function Service({service}) {
    const {model,price,prod_id,image}=service
    return (
        <View>
                    <Image style={styles.serviceImage}
          source={{
            uri: `data:image/jpeg;base64,${image}`,
          }}
          style={{ width: 200, height: 200 }}
        />

            <Text style={styles.container}>{model}</Text>
        </View>
    )
}
