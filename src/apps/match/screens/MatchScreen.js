import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Text } from 'native-base';

import { HeaderNav } from '../../main/components/HeaderNav';
import { TITLE_APP } from '../../../util/Constants';

export default class MatchScreen extends Component {
  static navigationOptions = HeaderNav({
    title: TITLE_APP, color: '#ffff'
  });

  render() {
    return (
        <Container>
          <Content padder>
            <View style={{ flex: 1 }}>
              <Text>Match Screen Here</Text>
            </View>
          </Content>
        </Container>
    );
  }
}
