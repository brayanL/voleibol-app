import React, { Component } from 'react';
import { Modal, View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Button, Text } from 'native-base';

import { closeGameSetModal } from '../actions/modal_actions';
import GlobalStyle from '../../../util/GlobalStyle';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../util/Constants';

/**
 * Modal to show the winner of a Set.
 * */
class GameSetModal extends Component {

  render() {
    return (
        <Modal
            transparent
            animationType={'fade'}
            visible={this.props.showGameSetModalReducer.gameSetModalIsOpen}
            onRequestClose={() => this.props.closeGameSetModal()}
        >
          <View style={styles.modalStyle}>
            <View style={styles.centerStyle}>
              <View style={styles.containerStyle}>
                <Container>
                  <Content>
                    <View style={[GlobalStyle.centerView, { padding: 20 }]}>
                      <Text
                          uppercase
                          style={styles.headerTextStyle}
                      >
                        Ganador del Set {this.props.annotationsReducer.set - 1}
                      </Text>
                    </View>
                    <View style={[GlobalStyle.centerView, styles.winnerTextStyle]}>
                      <Text style={styles.winnerTextStyle}>{this.props.annotationsReducer.winner_team_name}</Text>
                    </View>
                  </Content>
                  <Button full light onPress={() => this.props.closeGameSetModal()}>
                    <Text>Cerrar</Text>
                  </Button>
                </Container>
              </View>
            </View>
          </View>
        </Modal>
    );
  }
}

const styles = {
  modalStyle: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  centerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerStyle: {
    flex: 1,
    maxHeight: SCREEN_HEIGHT * 0.3,
    width: SCREEN_WIDTH * 0.8,
    backgroundColor: 'white',
    borderRadius: 15
  },
  headerTextStyle: {
    color: '#716c6e',
    fontWeight: 'bold',
    fontSize: 20
  },
  winnerTextStyle: {
    color: '#19854a',
    fontWeight: 'bold',
    fontSize: 50
  }
};

const mapStateToProps = ({ annotationsReducer, showGameSetModalReducer }) =>
    ({ annotationsReducer, showGameSetModalReducer });

export default connect(mapStateToProps, { closeGameSetModal })(GameSetModal);
