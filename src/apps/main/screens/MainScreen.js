import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Text,
  Button,
  Form,
  Label,
  Input,
  Item,
  Toast,
  Spinner
} from 'native-base';

import { HeaderNav } from '../components/HeaderNav';
import GlobalStyle from '../../../util/GlobalStyle';
import { TITLE_APP, REGISTER_TEAM_VALIDATIONS } from '../../../util/Constants';
import { startGame } from '../actions/start_game_actions';

class MainScreen extends Component {
  // Define Header Options
  static navigationOptions = HeaderNav({
    title: TITLE_APP, color: '#ffff'
  });

  state = { team1: '', team2: '' };

  componentDidUpdate() {
    if (this.props.startGameReducer.error === false) {
      this.props.navigation.navigate('MatchScreen');
    }
  }
  /**
   * Validate and Send Data for teams registration.
   * */
  onButtonPress() {
    if (!this.state.team1 || !this.state.team2) {
      Toast.show({
        text: REGISTER_TEAM_VALIDATIONS,
        buttonText: 'Ok',
        type: 'warning'
      });
    } else {
      this.props.startGame({ team1: this.state.team1, team2: this.state.team2 });
    }
  }

  renderStartGameButton() {
    if (this.props.startGameReducer.waiting) {
      return (
          <Button
              full rounded warning style={GlobalStyle.buttonStyle}
          >
            <Spinner color='white' />
          </Button>
      );
    }
    return (
        <Button
            full rounded warning style={GlobalStyle.buttonStyle}
            onPress={() => this.onButtonPress()}
        >
          <Text>Iniciar Juego</Text>
        </Button>
    );
  }

  render() {
    console.log('Response:', this.props.startGameReducer);
    return (
        <Container>
          <Content padder>
            <View style={GlobalStyle.centerStyle}>
              <Text style={GlobalStyle.texHeaderStyle}>Registro de Equipos</Text>
            </View>
            <Form>
              <View style={GlobalStyle.viewRegularInput}>
                <Label>Equipo 1</Label>
                <Item regular>
                  <Input
                      value={this.state.team1}
                      onChangeText={value => this.setState({ team1: value })}
                      maxLength={100}
                  />
                </Item>
              </View>
              <View style={GlobalStyle.viewRegularInput}>
                <Label>Equipo 2</Label>
                <Item regular>
                  <Input
                      value={this.state.team2}
                      onChangeText={value => this.setState({ team2: value })}
                      maxLength={100}
                  />
                </Item>
              </View>
              {this.renderStartGameButton()}
            </Form>
          </Content>
        </Container>
    );
  }
}

const mapStateToProps = ({ startGameReducer }) => ({ startGameReducer });

export default connect(mapStateToProps, { startGame })(MainScreen);
