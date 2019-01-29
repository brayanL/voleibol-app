import React, { Component } from 'react';
import TitleNav from '../../main/components/TitleNav';
import GlobalStyle from '../../../util/GlobalStyle';

export const HeaderNav = (props) => ({
  headerTintColor: '#fff',
  headerTitle: <TitleNav props={{ title: props.title }} />,
  headerStyle: GlobalStyle.headerBar,
  headerLeft: props.left
});
