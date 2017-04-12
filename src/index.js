import {
  Component
} from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class Hr extends Component {
  getStyle() {
    return StyleSheet.create({
      line: {
        backgroundColor: this.props.style.color,
        height: this.props.style.height || 1,
        flex: 1
      },
      wrapper: {
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: this.props.style.backgroundColor || 'transparent'
      }
    })
  }
  render() {
    if(!this.props.children) {
      return (
        <View style={this.getStyle().wrapper}>
          <HrLine style={this.getStyle().line}/>
        </View>
      )
    }
    return (
      <View style={this.getStyle().wrapper}>
        {
          (this.props.align === 'left') ? <View/> : <HrLine style={this.getStyle().line}/>
        }
        { this.props.children }
        {
          (this.props.align === 'right') ? <View/> : <HrLine style={this.getStyle().line}/>
        }
      </View>
    );
  }
}

Hr.defaultProps = {
  style: {
    color: 'black',
    height: 1,
    backgroundColor: 'transparent'
  }
}
class HrLine extends Component {
  render() {
    return (
      <View style={this.props.style}/>
    );
  }
}

export default Hr;
