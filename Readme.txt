After yarn or npm install
you have to edit some index.js files as we have used some components of depreceated react-native

1- Goto node_modules/react-native-percentage-circle/index.js  and search for 
componentWillReceiveProps and replace it with 
 UNSAFE_componentWillReceiveProps 
and just change class PercentageCircle extends Component  propTypes to this
and ctrl+s

import PropTypes from 'prop-types';  // add this on top
+

static propTypes= {
    color: PropTypes.string,
    bgcolor: PropTypes.string,
    innerColor: PropTypes.string,
    radius: PropTypes.number,
    percent: PropTypes.number,
    borderWidth: PropTypes.number,
    textStyle: PropTypes.array,
    disabled: PropTypes.bool,
  }


2- Goto node_modules/react-native-flip-view/index.js 
// Alter var by adding ViewPropTypes
var {
  View,
  Easing,
  StyleSheet,
  Animated,ViewPropTypes
  } = ReactNative;
+

import PropTypes from 'prop-types';  //add this on top
+

//-------Change those things-------
class FlipView extends Component {
  static propTypes = {
    style: ViewPropTypes.style,
    flipDuration: PropTypes.number,
    flipEasing: PropTypes.func,
    flipAxis: PropTypes.oneOf(['x', 'y']),
    front: PropTypes.object,
    back: PropTypes.object,
    perspective: PropTypes.number,
    onFlip: PropTypes.func,
    onFlipped: PropTypes.func,
    isFlipped: PropTypes.bool,
  };


3- *first  $ npm install deprecated-react-native-prop-types
Then Goto node_modules/react-native/index.js search for  // Deprecated Prop Types 
comment 
and just copy this and replace it in file and save

 // Deprecated Prop Types
  get ColorPropType(): $FlowFixMe {
    console.warn(
        false,

      'ColorPropType has been removed from React Native. Migrate to '
    ); return require('deprecated-react-native-prop-types').ColorPropType; 
  },
  get EdgeInsetsPropType(): $FlowFixMe {
    console.warn(
      'EdgeInsetsPropType has been removed from React Native. Migrate to ' 
    ); return require('deprecated-react-native-prop-types').EdgeInsetsPropType;
  },
  get PointPropType(): $FlowFixMe {
    console.warn(
      
      'PointPropType has been removed from React Native. Migrate to '
    );return require('deprecated-react-native-prop-types').PointPropType;
   },
  get ViewPropTypes(): $FlowFixMe {
    console.warn(
      'ViewPropTypes has been removed from React Native. Migrate to ' 
    ); return require('deprecated-react-native-prop-types').ViewPropTypes;

  },
};

