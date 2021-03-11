import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_173_714}>
        <View style={styles.View_173_715} />
        <View style={styles.View_173_716}>
          <Text style={styles.Text_173_716}>
            It’s time to step up your short game
          </Text>
        </View>
        <View style={styles.View_173_717}>
          <Text style={styles.Text_173_717}>Sign in to continue</Text>
        </View>
      </View>
      <View style={styles.View_173_718}>
        <Text style={styles.Text_173_718}>Sign up</Text>
      </View>
      <View style={styles.View_173_719}>
        <Text style={styles.Text_173_719}>forgot password</Text>
      </View>
      <View style={styles.View_173_720}>
        <View style={styles.View_173_721}>
          <Text style={styles.Text_173_721}>Email address</Text>
        </View>
        <View style={styles.View_173_722} />
      </View>
      <View style={styles.View_173_723}>
        <View style={styles.View_173_724}>
          <Text style={styles.Text_173_724}>Password</Text>
        </View>
        <View style={styles.View_173_725} />
      </View>
      <View style={styles.View_173_726}>
        <View style={styles.View_173_727}>
          <Text style={styles.Text_173_727}>Sign in</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37cf/c360/1bfc7f56f0fa4edab7f8fcd8b4632c25"
        }}
        style={styles.ImageBackground_173_728}
      />
      <View style={styles.View_313_438}>
        <View style={styles.View_313_439}>
          <View style={styles.View_313_440} />
          <View style={styles.View_313_441}>
            <View style={styles.View_313_442} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc96/bb06/04f8ec2b38013fd2116d1bb6c2b39332"
              }}
              style={styles.ImageBackground_313_443}
            />
            <View style={styles.View_313_444} />
          </View>
          <View style={styles.View_313_445}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d16a/ea59/af3b43a3d1442ed44b8f478721d47850"
              }}
              style={styles.ImageBackground_313_446}
            />
          </View>
          <View style={styles.View_313_450}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_313_451}
            />
          </View>
          <View style={styles.View_313_456}>
            <Text style={styles.Text_313_456}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_173_714: {
    width: wp("88.16425120772948%"),
    minWidth: wp("88.16425120772948%"),
    height: 149,
    minHeight: 149,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%"),
    top: 341,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_173_715: {
    width: wp("11.594202898550725%"),
    minWidth: wp("11.594202898550725%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(15, 98, 78, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_173_716: {
    width: wp("88.16425120772948%"),
    minWidth: wp("88.16425120772948%"),
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 60
  },
  Text_173_716: {
    color: "rgba(24, 38, 29, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_717: {
    width: wp("50.72463768115942%"),
    minWidth: wp("50.72463768115942%"),
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 130
  },
  Text_173_717: {
    color: "rgba(24, 38, 29, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_718: {
    width: wp("12.318840579710146%"),
    minWidth: wp("12.318840579710146%"),
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 834
  },
  Text_173_718: {
    color: "rgba(88, 95, 91, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_719: {
    width: wp("26.32850241545894%"),
    minWidth: wp("26.32850241545894%"),
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.08212560386472%"),
    top: 834
  },
  Text_173_719: {
    color: "rgba(88, 95, 91, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_720: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: 82,
    minHeight: 82,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 518,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_173_721: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_173_721: {
    color: "rgba(88, 95, 91, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_722: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: 59,
    minHeight: 59,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 23,
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(169, 167, 167, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_173_723: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: 82,
    minHeight: 82,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 616,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_173_724: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_173_724: {
    color: "rgba(88, 95, 91, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_725: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: 59,
    minHeight: 59,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 23,
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(169, 167, 167, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_173_726: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 726,
    backgroundColor: "rgba(15, 98, 78, 1)"
  },
  View_173_727: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.16425120772947%"),
    top: 18
  },
  Text_173_727: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_173_728: {
    width: wp("146.6183574879227%"),
    minWidth: wp("146.6183574879227%"),
    height: 332,
    minHeight: 332,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-13.768115942028986%"),
    top: -11,
    resizeMode: "cover"
  },
  View_313_438: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_313_439: {
    flexGrow: 1,
    width: wp("100%"),
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_313_440: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980675%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.44999998807907104
  },
  View_313_441: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    height: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.33816425120773%"),
    top: 16,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_313_442: {
    width: wp("5.314009661835748%"),
    height: 11.333333015441895,
    top: 0.33331298828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  ImageBackground_313_443: {
    width: wp("0.3220612012245805%"),
    height: 4,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555557%")
  },
  View_313_444: {
    width: wp("4.3478260869565215%"),
    height: 7.333333492279053,
    top: 2.33331298828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_313_445: {
    width: wp("5.072463768115942%"),
    minWidth: wp("5.072463768115942%"),
    height: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.78260869565217%"),
    top: 15,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_313_446: {
    width: wp("3.703703626918332%"),
    height: 11,
    top: 1.33331298828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6441272975166044%")
  },
  View_313_450: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    height: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.95169082125604%"),
    top: 16,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_313_451: {
    width: wp("4.1062801932367154%"),
    height: 10.666666984558105,
    top: 0.66668701171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16103551007698513%")
  },
  View_313_456: {
    width: wp("13.043478260869565%"),
    minWidth: wp("13.043478260869565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 12
  },
  Text_313_456: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_2: { height: 896 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
