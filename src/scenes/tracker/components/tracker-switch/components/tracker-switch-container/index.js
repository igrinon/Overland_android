import React from 'react';
import { StyleSheet } from 'react-native';
import Container from '../../../../../../components/container';

const TrackerSwitchContainer = props => {
  return <Container style={styles.container}>{props.children}</Container>;
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default TrackerSwitchContainer;
