
import { Component } from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';

import Hr from '../dist/index'

class HrExample extends Component {
  render() {
    <View>
      <Text style={{paddingTop:20}}>Basic HR Tag</Text>

      <Hr/>

      <Hr>
        <Text>Hr with default center aligned text</Text>
      </Hr>

      <Hr align="left" style={{color:'red'}}>
        <Text>Hr with text algined left and red line</Text>
      </Hr>

      <Hr align="right">
        <Text>Hr with text aligned right and default line color</Text>
      </Hr>

      <Hr style={{color:'red', backgroundColor:'yellow'}}>
        <Text>HR with text and image and style</Text>
        <Image source={{uri:'https://random.cat/i/l1YDL.jpg'}} style={{height:50, width:50}}/>
      </Hr>
    </View>
  }
}
