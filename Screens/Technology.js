import React from 'react';
import {StyleSheet,View,Text,FlatList,ActivityIndicator,TouchableOpacity,Linking,RefreshControl} from 'react-native';
import Axios from 'axios';
import {AdMobInterstitial,AdMobBanner} from 'expo-ads-admob';
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button, Icon} from 'native-base';
console.disableYellowBox = true
export default class Technology extends React.Component{
    state={
        data:[],
        isLoading : true,
        refreshing:false
    }
    loadnews = () => {
        Axios.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=100&apiKey=b2fe096b9727464c8d5f42f48c1614a6')
        .then((response)=>{
            console.log(response)
            this.setState({data:response.data.articles,isLoading:false})
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    componentDidMount(){
        this.loadnews()
    }
    _onRefresh=()=>{
        this.setState({refreshing:true});
        this.loadnews()
        this.setState({refreshing:false})
    }
    render(){
        if(this.state.isLoading)
        {
            return(
            <Container style={{alignItems:'center',justifyContent:'center'}}>
                <ActivityIndicator size='large' color='black'/>
            </Container>
            )
        }
        else
        {
            return(
            <View>
            <FlatList
            data={this.state.data}
            renderItem={({item})=>{
                return(
                        <List>
                            <ListItem thumbnail>
                            <Left>
                                <Thumbnail  circle large  source={{ uri: item.urlToImage != null ? item.urlToImage : 'https://cdn.websites.hibu.com/0f92e2eef0b541429848745325123af7/dms3rep/multi/mobile/Placeholder-625x300.jpg'}} />
                            </Left>
                            <Body>
                                <Text numberOfLines={4} style={{fontWeight:'bold'}}>{item.title}</Text>  
                            </Body>
                            <Right>
                                <Button onPress={()=>{Linking.openURL(item.url)}} transparent>
                                    <Icon name="ios-navigate"></Icon>
                                </Button>
                            </Right>
                            </ListItem>
                        </List>
                )
            }}
            keyExtractor={(index)=>index.publishedAt}
            refreshControl={
                <RefreshControl
                refreshing = {this.state.refreshing}
                onRefresh={this._onRefresh}/>
            }/>
            
            </View>
            )
        }
    }
}