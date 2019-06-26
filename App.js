import React from 'react';
import { StyleSheet} from 'react-native';
import {Container, Header, Tab, Tabs, ScrollableTab,Left,Body,Title,Right,Subtitle} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import General from './Screens/General';
import Technology from './Screens/Technology';
import Business from './Screens/Business';
import Sports from './Screens/Sports';
import TechCrunch from './Screens/TechCrunch';
import About from './Screens/About';
export default class App extends React.Component{
  state = {
    fontLoaded: false,
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({fontLoaded:true})
  }
  render(){
    return(
      <Container>
        { this.state.fontLoaded ? (
          <Container>
            <Header hasTabs style={{backgroundColor:'#004D40'}} span>
            <Left/>
              <Body>
                <Title style={{textAlign:'center',marginLeft:70,marginTop:30}}>NewsGo</Title>
              </Body>
            <Right>
            </Right>
            </Header>
            <Tabs renderTabBar={()=> <ScrollableTab />}>
              <Tab tabStyle={{backgroundColor:'#004D40'}} activeTabStyle={{backgroundColor:'#004D40'}} heading="General">
                <General />
              </Tab>
              <Tab tabStyle={{backgroundColor:'#004D40'}} activeTabStyle={{backgroundColor:'#004D40'}}  heading="Technology">
                <Technology />
              </Tab>
              <Tab tabStyle={{backgroundColor:'#004D40'}} activeTabStyle={{backgroundColor:'#004D40'}}  heading="Business">
                <Business />
              </Tab>
              <Tab tabStyle={{backgroundColor:'#004D40'}} activeTabStyle={{backgroundColor:'#004D40'}}  heading="Sports">
                <Sports />
              </Tab>
              <Tab tabStyle={{backgroundColor:'#004D40'}} activeTabStyle={{backgroundColor:'#004D40'}}  heading="TechCrunch">
                <TechCrunch />
              </Tab>
              <Tab tabStyle={{backgroundColor:'#004D40'}} activeTabStyle={{backgroundColor:'#004D40'}}  heading="About">
                <About />
              </Tab>
            </Tabs>
            </Container>
        ):null
        }
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
