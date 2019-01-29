import React from 'react';
import { Image, Text, View } from 'react-native';
import GlobalStyle from '../../../util/GlobalStyle';
import logo from '../../../assets/volleyball-logo.png';

const TitleNav = ({ props }) => (
    <View style={{ flexDirection: 'row' }}>
      <View style={GlobalStyle.centerView}>
        <Image source={logo} style={GlobalStyle.logoStyle} />
      </View>
      <View style={GlobalStyle.centerView}>
        <Text style={GlobalStyle.titleHeader}>{props.title}</Text>
      </View>
    </View>
);

export default TitleNav;
