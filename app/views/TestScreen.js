import React,{Component} from 'react';
import {Container, Icon} from "../components/base";
import {View} from 'react-native';


export default class TestScreen extends Component{
  render() {
    return (
      <Container>
        <View>
          <Icon color={'red'} size={20} name={'ellipsis-h'}/>
        </View>
      </Container>
    );
  }
}
