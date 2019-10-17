import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import { inject, observer } from 'mobx-react'
import { Navigation } from 'react-native-navigation'
import LinearGradient from 'react-native-linear-gradient'
import Button from '../theme/ButtonView'
import { Icons, Images } from '../../styles/theme'
import styles from '../../styles/routes/HomeViewStyles'
import {Categories, CategoriesById, getSingle,getWisdomList, getNew} from "../../api/Controllers";

@inject('appState')
@inject('MainStore')
@observer
export default class HomeView extends Component {
  static options() {
    return {
      _statusBar: {
        backgroundColor: 'transparent',
        style: 'dark',
        drawBehind: true,
      },
      topBar: {
        title: {
          text: 'Home',
        },
        largeTitle: {
          visible: true,
        },
        drawBehind: true,
        visible: true,
        animate: true,
      }
    };
  }

  componentDidMount(){
    console.log("Fetch ==>>");
    this.props.MainStore.getWisdomRequest()
    const cat =this.props.MainStore.getCategory
    console.log("cat -->>", cat);
    
    
  }
  render() {
    
    return (
      <View style={styles.bar}>
        <LinearGradient
          colors={['#fac0fa', '#ffdea6', '#b9ecaf']}
          locations={[0.15, 0.48, 1]}
          style={styles.root}
        >
          <Image source={Images.logo}/> 
          <Button title='Switch to tab based app' onPress={this.onClickSwitchToTabs} />
          <Button title='Register' onPress={this.onClickPush('App.Register')} />
          <Button title='Login' onPress={this.onClickPush('App.Login')} />
          <Button title='Show Modal' onPress={this.showModal} />
          <Text style={styles.footer}>{`this.props.componentId = ${this.props.componentId}`}</Text>
          {this.props.text ? (<Text style={styles.footer}>{this.props.text}</Text>) : false}
        </LinearGradient>
      </View>
    );
  }



  showModal = async () => {
    await Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'App.Home',
            }
          }
        ]
      }
    });
  }
}