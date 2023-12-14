/* eslint-disable prettier/prettier */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>

      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.text}>First</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.text}>Second</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.text}>Third</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
  },
  cardOne: {
    backgroundColor: '#6fe3be',
  },
  cardTwo: {
    backgroundColor: '#75e36f',
  },
  cardThree: {
    backgroundColor: '#b56fe3',
  },
});

export default FlatCard;
