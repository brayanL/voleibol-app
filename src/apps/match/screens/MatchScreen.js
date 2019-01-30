import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Text, Segment, Button } from 'native-base';

import { HeaderNav } from '../../main/components/HeaderNav';
import { SCREEN_WIDTH, TITLE_APP } from '../../../util/Constants';
import GlobalStyle from '../../../util/GlobalStyle';
import { addAnnotation } from '../actions';

class MatchScreen extends Component {
  static navigationOptions = HeaderNav({
    title: TITLE_APP, color: '#ffff'
  });

  /**
   * Add points to the team you scored.
   * @param team to which points will be added.
   * */
  addAnnotations(team) {
    this.props.addAnnotation(team);
  }

  render() {
    const gameData = this.props.annotationsReducer;
    console.log('Another Screen: ',
        this.props.annotationsReducer,
        this.props.startGameReducer);
    return (
        <Container>
          <Content padder>
            <View style={styles.mainContainerStyle}>
              <View style={styles.headerStyle}>
                <Text>Marcador</Text>
              </View>
              <View style={[styles.contentStyle, GlobalStyle.centerView]}>
                <View style={[styles.circleStyle, GlobalStyle.centerView]}>
                  <Text style={styles.textStyle}>{this.props.annotationsReducer.teams[0].points}</Text>
                </View>
                <View style={[styles.circleStyle, GlobalStyle.centerView]}>
                  <Text style={styles.textStyle}>{this.props.annotationsReducer.teams[1].points}</Text>
                </View>
              </View>
            </View>
            <View style={styles.mainContainerStyle}>
              <View style={styles.headerStyle}>
                <Text>Servicio</Text>
              </View>
              <View style={[styles.contentStyle, GlobalStyle.centerView]}>
                <Segment>
                  <Button style={{ width: SCREEN_WIDTH * 0.45 }} first active={this.props.annotationsReducer.teams[0].service}><Text>{gameData.teams[0].name}</Text></Button>
                  <Button style={{ width: SCREEN_WIDTH * 0.45 }} last active={this.props.annotationsReducer.teams[1].service}><Text>{gameData.teams[1].name}</Text></Button>
                </Segment>
              </View>
            </View>
            <View style={styles.mainContainerStyle}>
              <View style={styles.headerStyle}>
                <Text>Puntos</Text>
              </View>
              <View style={[styles.contentStyle, GlobalStyle.centerView]}>
                <Button
                    light
                    style={styles.buttonStyle}
                    onPress={() => this.addAnnotations(gameData.teams[0])}
                >
                  <Text>{gameData.teams[0].name}</Text>
                </Button>
                <Button
                    light
                    style={styles.buttonStyle}
                    onPress={() => this.addAnnotations(gameData.teams[1])}
                >
                  <Text>{gameData.teams[1].name}</Text>
                </Button>
              </View>
            </View>
          </Content>
        </Container>
    );
  }
}
const mapStateToProps = ({ startGameReducer, annotationsReducer }) =>
    ({ startGameReducer, annotationsReducer });

export default connect(mapStateToProps, { addAnnotation })(MatchScreen);

const styles = {
  mainContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
    width: SCREEN_WIDTH * 0.94
  },
  headerStyle: {
    backgroundColor: 'skyblue',
    padding: 10
  },
  contentStyle: {
    borderWidth: 1,
    borderColor: 'powderblue',
    flexDirection: 'row'
  },
  circleStyle: {
    border: 5,
    backgroundColor: '#ffcd42',
    width: SCREEN_WIDTH * 0.4,
    height: SCREEN_WIDTH * 0.4,
    borderRadius: 100,
    margin: 10
  },
  textStyle: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 70
  },
  buttonStyle: {
    width: SCREEN_WIDTH * 0.43,
    margin: 5
  }
};

