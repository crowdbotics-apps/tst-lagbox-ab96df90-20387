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
      <View style={styles.View_173_1129} />
      <View style={styles.View_173_1130}>
        <View style={styles.View_173_1131}>
          <Text style={styles.Text_173_1131}>Set up your game</Text>
        </View>
        <View style={styles.View_173_1132}>
          <Text style={styles.Text_173_1132}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam
            eu amet eleifend tellus feugiat adipiscing.
          </Text>
        </View>
      </View>
      <View style={styles.View_173_1133}>
        <View style={styles.View_173_1134}>
          <Text style={styles.Text_173_1134}>
            How many rounds will you play?
          </Text>
        </View>
        <View style={styles.View_173_1135}>
          <View style={styles.View_173_1136} />
          <View style={styles.View_173_1139}>
            <Text style={styles.Text_173_1139}>2</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b03/e49c/17e2e2227b06805516291d6352d1f08e"
            }}
            style={styles.ImageBackground_173_1143}
          />
        </View>
      </View>
      <View style={styles.View_173_1146}>
        <Text style={styles.Text_173_1146}>Set level-ground</Text>
      </View>
      <View style={styles.View_173_1147} />
      <View style={styles.View_173_1148}>
        <View style={styles.View_173_1149}>
          <Text style={styles.Text_173_1149}>
            What kind of game will you be playing?
          </Text>
        </View>
        <View style={styles.View_173_1150}>
          <View style={styles.View_173_1154}>
            <View style={styles.View_173_1155} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adac/6e92/1d8f9a918968e1f5d6c6db7ddb81c488"
              }}
              style={styles.ImageBackground_173_1156}
            />
          </View>
          <View style={styles.View_322_0}>
            <View style={styles.View_322_1} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f90e/c0ff/ad7a2aca3514d00672bce037cbc9b3f3"
              }}
              style={styles.ImageBackground_322_2}
            />
          </View>
        </View>
        <View style={styles.View_173_1157}>
          <View style={styles.View_173_1158}>
            <View style={styles.View_173_1159}>
              <Text style={styles.Text_173_1159}>Putting</Text>
            </View>
            <View style={styles.View_173_1160}>
              <Text style={styles.Text_173_1160}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
          </View>
          <View style={styles.View_173_1161}>
            <View style={styles.View_173_1162}>
              <Text style={styles.Text_173_1162}>Chipping</Text>
            </View>
            <View style={styles.View_173_1163}>
              <Text style={styles.Text_173_1163}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_173_1164}>
        <View style={styles.View_173_1165}>
          <Text style={styles.Text_173_1165}>Start game</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a13d/40ae/937327bbc2b0f7d8af655be2d8df3b61"
        }}
        style={styles.ImageBackground_237_3599}
      />
      <View style={styles.View_237_3568}>
        <View style={styles.View_237_3569} />
        <View style={styles.View_237_3570} />
        <View style={styles.View_237_3571} />
        <View style={styles.View_237_3572} />
        <View style={styles.View_237_3573} />
        <View style={styles.View_237_3574}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d37d/def5/ab7bf4b7c9445191dedb0de01661a61b"
            }}
            style={styles.ImageBackground_237_3575}
          />
          <View style={styles.View_237_3576}>
            <Text style={styles.Text_237_3576}>Left</Text>
          </View>
        </View>
        <View style={styles.View_237_3577}>
          <View style={styles.View_237_3578}>
            <Text style={styles.Text_237_3578}>Right</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1e0/bba8/439091f69aefcf40ddf2e8f665840cb9"
            }}
            style={styles.ImageBackground_237_3579}
          />
        </View>
        <View style={styles.View_237_3580}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d784/13c7/3054ae45d957af7f95811b09a2b19602"
            }}
            style={styles.ImageBackground_237_3581}
          />
          <View style={styles.View_237_3582}>
            <Text style={styles.Text_237_3582}>Up</Text>
          </View>
        </View>
        <View style={styles.View_237_3583}>
          <View style={styles.View_237_3584}>
            <Text style={styles.Text_237_3584}>Straight</Text>
          </View>
        </View>
        <View style={styles.View_237_3585}>
          <View style={styles.View_237_3586}>
            <Text style={styles.Text_237_3586}>Down</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d97/e08e/caee26a3b1158a0da46088985d47fa5d"
            }}
            style={styles.ImageBackground_237_3587}
          />
        </View>
      </View>
      <View style={styles.View_313_58}>
        <View style={styles.View_313_59}>
          <View style={styles.View_313_60} />
          <View style={styles.View_313_61}>
            <View style={styles.View_313_62} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be87/0522/8afce41614904f40e8a5aae3f25c7f5c"
              }}
              style={styles.ImageBackground_313_63}
            />
            <View style={styles.View_313_64} />
          </View>
          <View style={styles.View_313_65}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d92f/d629/073a1b06f45f39a6c369ef3e42b5ffae"
              }}
              style={styles.ImageBackground_313_66}
            />
          </View>
          <View style={styles.View_313_70}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aa9/4417/73f7a08665c5ca698f6fa7337640bfcc"
              }}
              style={styles.ImageBackground_313_71}
            />
          </View>
          <View style={styles.View_313_76}>
            <Text style={styles.Text_313_76}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_173_1129: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 575,
    minHeight: 575,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160,
    borderColor: "rgba(254, 186, 12, 1)",
    borderWidth: 4
  },
  View_173_1130: {
    width: wp("67.3913043478261%"),
    minWidth: wp("67.3913043478261%"),
    height: 112,
    minHeight: 112,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 111,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_173_1131: {
    width: wp("48.792270531400966%"),
    minWidth: wp("48.792270531400966%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_173_1131: {
    color: "rgba(24, 38, 29, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_1132: {
    width: wp("67.3913043478261%"),
    minWidth: wp("67.3913043478261%"),
    minHeight: 76,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 36
  },
  Text_173_1132: {
    color: "rgba(78, 86, 80, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_1133: {
    width: wp("60.38647342995169%"),
    minWidth: wp("60.38647342995169%"),
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 253,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_173_1134: {
    width: wp("60.38647342995169%"),
    minWidth: wp("60.38647342995169%"),
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_173_1134: {
    color: "rgba(27, 35, 30, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_1135: {
    width: wp("26.32850241545894%"),
    minWidth: wp("26.32850241545894%"),
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 35,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_173_1136: {
    flexGrow: 1,
    width: wp("26.32850241545894%"),
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(247, 247, 250, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_173_1139: {
    flexGrow: 1,
    width: wp("19.082125603864732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6231884057971016%"),
    top: 11
  },
  Text_173_1139: {
    color: "rgba(35, 35, 38, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  ImageBackground_173_1143: {
    width: wp("5.797101449275362%"),
    height: 24,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.115942028985508%")
  },
  View_173_1146: {
    width: wp("31.642512077294686%"),
    minWidth: wp("31.642512077294686%"),
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 698
  },
  Text_173_1146: {
    color: "rgba(27, 35, 30, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_1147: {
    width: wp("42.99516908212561%"),
    minWidth: wp("42.99516908212561%"),
    height: 178,
    minHeight: 178,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 398,
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(245, 237, 48, 1)",
    borderWidth: 3,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_173_1148: {
    width: wp("89.85507246376811%"),
    minWidth: wp("89.85507246376811%"),
    height: 306,
    minHeight: 306,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 363,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_173_1149: {
    width: wp("73.67149758454107%"),
    minWidth: wp("73.67149758454107%"),
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_173_1149: {
    color: "rgba(27, 35, 30, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_1150: {
    width: wp("89.85507246376811%"),
    minWidth: wp("89.85507246376811%"),
    height: 178,
    minHeight: 178,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 35,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_173_1154: {
    width: wp("42.99516908212561%"),
    minWidth: wp("42.99516908212561%"),
    height: 178,
    minHeight: 178,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_173_1155: {
    width: wp("42.99516908212561%"),
    minWidth: wp("42.99516908212561%"),
    height: 178,
    minHeight: 178,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_173_1156: {
    width: wp("42.99516908212561%"),
    minWidth: wp("42.99516908212561%"),
    height: 178,
    minHeight: 178,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_322_0: {
    width: wp("42.99516908212561%"),
    minWidth: wp("42.99516908212561%"),
    height: 178,
    minHeight: 178,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.85990338164251%"),
    top: 0
  },
  View_322_1: {
    width: wp("42.99516908212561%"),
    minWidth: wp("42.99516908212561%"),
    height: 178,
    minHeight: 178,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(15, 98, 78, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_322_2: {
    width: wp("42.99516908212561%"),
    minWidth: wp("42.99516908212561%"),
    height: 178,
    minHeight: 178,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_173_1157: {
    width: wp("89.85507246376811%"),
    minWidth: wp("89.85507246376811%"),
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 229,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_173_1158: {
    width: wp("42.99516908212561%"),
    minWidth: wp("42.99516908212561%"),
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_173_1159: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_173_1159: {
    color: "rgba(27, 35, 30, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_1160: {
    width: wp("42.99516908212561%"),
    minWidth: wp("42.99516908212561%"),
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 26
  },
  Text_173_1160: {
    color: "rgba(126, 139, 131, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_1161: {
    width: wp("42.99516908212561%"),
    minWidth: wp("42.99516908212561%"),
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.85990338164251%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_173_1162: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_173_1162: {
    color: "rgba(27, 35, 30, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_1163: {
    width: wp("42.99516908212561%"),
    minWidth: wp("42.99516908212561%"),
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 26
  },
  Text_173_1163: {
    color: "rgba(126, 139, 131, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_1164: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: 1013,
    backgroundColor: "rgba(15, 98, 78, 1)"
  },
  View_173_1165: {
    width: wp("28.019323671497588%"),
    minWidth: wp("28.019323671497588%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.125603864734295%"),
    top: 18
  },
  Text_173_1165: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_237_3599: {
    width: wp("6.763285024154589%"),
    height: 28,
    top: 67,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772946%")
  },
  View_237_3568: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: 196,
    minHeight: 196,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 757
  },
  View_237_3569: {
    width: wp("29.227053140096622%"),
    minWidth: wp("29.227053140096622%"),
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 67,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(15, 98, 78, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_237_3570: {
    width: wp("29.468599033816425%"),
    minWidth: wp("29.468599033816425%"),
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.434782608695656%"),
    top: 67,
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(15, 98, 78, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_237_3571: {
    width: wp("29.468599033816425%"),
    minWidth: wp("29.468599033816425%"),
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.434782608695656%"),
    top: 134,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(15, 98, 78, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_237_3572: {
    width: wp("29.468599033816425%"),
    minWidth: wp("29.468599033816425%"),
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.434782608695656%"),
    top: 0,
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(15, 98, 78, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_237_3573: {
    width: wp("29.227053140096622%"),
    minWidth: wp("29.227053140096622%"),
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.111111111111114%"),
    top: 67,
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(15, 98, 78, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_237_3574: {
    width: wp("14.975845410628018%"),
    minWidth: wp("14.975845410628018%"),
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.589371980676329%"),
    top: 84,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_237_3575: {
    width: wp("6.763285024154589%"),
    height: 28,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_237_3576: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033815%"),
    top: 4.5
  },
  Text_237_3576: {
    color: "rgba(15, 98, 78, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_237_3577: {
    width: wp("17.391304347826086%"),
    minWidth: wp("17.391304347826086%"),
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.14975845410628%"),
    top: 84,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_237_3578: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 4.5
  },
  Text_237_3578: {
    color: "rgba(15, 98, 78, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_237_3579: {
    width: wp("6.763285024154589%"),
    height: 28,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671495%")
  },
  View_237_3580: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.78743961352657%"),
    top: 5,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_237_3581: {
    width: wp("6.763285024154589%"),
    height: 28,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_237_3582: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594146%"),
    top: 32
  },
  Text_237_3582: {
    color: "rgba(15, 98, 78, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_237_3583: {
    width: wp("14.492753623188406%"),
    minWidth: wp("14.492753623188406%"),
    height: 19,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.92270531400966%"),
    top: 89,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_237_3584: {
    width: wp("14.492753623188406%"),
    minWidth: wp("14.492753623188406%"),
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_237_3584: {
    color: "rgba(15, 98, 78, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_237_3585: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.09661835748792%"),
    top: 139,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_237_3586: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_237_3586: {
    color: "rgba(15, 98, 78, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_237_3587: {
    width: wp("6.763285024154589%"),
    height: 28,
    top: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8115942028985543%")
  },
  View_313_58: {
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
  View_313_59: {
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
  View_313_60: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980675%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_313_61: {
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
  View_313_62: {
    width: wp("5.314009661835748%"),
    height: 11.333333015441895,
    top: 0.3333740234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(27, 35, 30, 1)",
    borderColor: "rgba(27, 35, 30, 1)",
    borderWidth: 1
  },
  ImageBackground_313_63: {
    width: wp("0.3220612012245805%"),
    height: 4,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555557%")
  },
  View_313_64: {
    width: wp("4.3478260869565215%"),
    height: 7.333333492279053,
    top: 2.3333740234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    backgroundColor: "rgba(27, 35, 30, 1)",
    borderColor: "rgba(27, 35, 30, 1)",
    borderWidth: 1
  },
  View_313_65: {
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
  ImageBackground_313_66: {
    width: wp("3.703703626918332%"),
    height: 11,
    top: 1.3333740234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6440830691425106%")
  },
  View_313_70: {
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
  ImageBackground_313_71: {
    width: wp("4.1062801932367154%"),
    height: 10.666666984558105,
    top: 0.6666259765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16099128170289134%")
  },
  View_313_76: {
    width: wp("13.043478260869565%"),
    minWidth: wp("13.043478260869565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 12
  },
  Text_313_76: {
    color: "rgba(27, 35, 30, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_2: { height: 1131 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
