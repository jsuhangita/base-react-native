import React,{Component} from 'react';
import {Container, Icon} from "../components/base";
import {View} from 'react-native';
import {getData} from "../requests/Test.request";


export default class TestScreen extends Component{

  async componentDidMount() {
     const data = await getData();
     console.log(data);
  }

  render() {
    return (
      <Container>
        <View/>
      </Container>
    );
  }
}
