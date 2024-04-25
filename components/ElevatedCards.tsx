import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
          <Text>more...</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>emoji</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    
      },
      container: {
          padding: 8,
      },
      card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
          width: 100,
          height: 100,
          borderRadius: 4,
          margin: 8,
          color: 'white',
      },
      cardElevated: {
          backgroundColor: 'red',
          elevation: 4,
          shadowOffset: {
              width: 1,
              height: 1
          },
          shadowColor: 'white',
          shadowOpacity: 0.25,
          shadowRadius: 4,
      }
})