/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>

      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.elevatedCards]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
          <Text>and</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
          <Text>it</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
          <Text>more...</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 8,
  },
  container: {},
  card: {
    width: 100,
    height: 100,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  elevatedCards: {
    backgroundColor: '#ffd57a',
    elevation: 4,
  },
});
