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
      <View style={styles.View_277_1}>
        <Text style={styles.Text_277_1}>Todays deals</Text>
      </View>
      <View style={styles.View_277_2}>
        <View style={styles.View_277_3}>
          <View style={styles.View_277_4}>
            <View style={styles.View_277_5} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed89/09b7/54c33ee374c38c17d9ce2fd2d76969ed"
              }}
              style={styles.ImageBackground_277_6}
            />
          </View>
          <View style={styles.View_277_7}>
            <View style={styles.View_277_8}>
              <Text style={styles.Text_277_8}>2019 Ping strata set</Text>
            </View>
            <View style={styles.View_277_9}>
              <Text style={styles.Text_277_9}>20% off retail price</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_283_344}>
          <View style={styles.View_283_345} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/217d/3437/5fd8267aba309049a32fb68e98646793"
            }}
            style={styles.ImageBackground_283_340}
          />
        </View>
        <View style={styles.View_283_318}>
          <View style={styles.View_283_322}>
            <View style={styles.View_283_323}>
              <Text style={styles.Text_283_323}>Ping Rudolf putter</Text>
            </View>
            <View style={styles.View_283_324}>
              <Text style={styles.Text_283_324}>40% off retail price</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_283_334}>
          <View style={styles.View_283_335} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70df/5d0f/a22e40d44df811e33b858f29008e180d"
            }}
            style={styles.ImageBackground_283_333}
          />
        </View>
        <View style={styles.View_277_10}>
          <View style={styles.View_277_14}>
            <View style={styles.View_277_15}>
              <Text style={styles.Text_277_15}>2020 Callaway Strata set</Text>
            </View>
            <View style={styles.View_277_16}>
              <Text style={styles.Text_277_16}>40% off retail price</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_277_17}>
          <View style={styles.View_277_11}>
            <View style={styles.View_277_12} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/902d/634c/40aaf5d26464affcdea5b4d795015700"
              }}
              style={styles.ImageBackground_277_13}
            />
          </View>
          <View style={styles.View_277_21}>
            <View style={styles.View_277_22}>
              <Text style={styles.Text_277_22}>
                Titleist Scotty Cameron Putter
              </Text>
            </View>
            <View style={styles.View_277_23}>
              <Text style={styles.Text_277_23}>40% off retail price</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_283_325}>
          <View style={styles.View_283_337}>
            <View style={styles.View_283_338} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7362/3002/12170ac0e3a5dad36b37448c3a298502"
              }}
              style={styles.ImageBackground_283_343}
            />
          </View>
          <View style={styles.View_283_329}>
            <View style={styles.View_283_330}>
              <Text style={styles.Text_283_330}>
                TaylorMade Spider Tour 20 Black #3 Putter
              </Text>
            </View>
            <View style={styles.View_283_331}>
              <Text style={styles.Text_283_331}>40% off retail price</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_283_1508}>
        <View style={styles.View_277_24} />
        <View style={styles.View_277_25}>
          <Text style={styles.Text_277_25}>Pro shop</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b33d/3e23/402e7b837c7c6a38147c9f39acd8d723"
          }}
          style={styles.ImageBackground_277_26}
        />
      </View>
      <View style={styles.View_313_286}>
        <View style={styles.View_313_287}>
          <View style={styles.View_313_288} />
          <View style={styles.View_313_289}>
            <View style={styles.View_313_290} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc96/bb06/04f8ec2b38013fd2116d1bb6c2b39332"
              }}
              style={styles.ImageBackground_313_291}
            />
            <View style={styles.View_313_292} />
          </View>
          <View style={styles.View_313_293}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d16a/ea59/af3b43a3d1442ed44b8f478721d47850"
              }}
              style={styles.ImageBackground_313_294}
            />
          </View>
          <View style={styles.View_313_298}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_313_299}
            />
          </View>
          <View style={styles.View_313_304}>
            <Text style={styles.Text_313_304}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_277_27}>
        <View style={styles.View_277_28} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1af/ff75/40f5df368ba3f4a1816ff8bfe36ff603"
          }}
          style={styles.ImageBackground_277_30}
        />
        <View style={styles.View_277_32}>
          <View style={styles.View_277_34} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63bd/bfe5/5a2d3544c2a398795038e473fb14382a"
          }}
          style={styles.ImageBackground_277_37}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b2c/8a97/7643df3b64f0a639cd8e2ab6192bd0f4"
          }}
          style={styles.ImageBackground_277_40}
        />
        <View style={styles.View_277_45}>
          <View style={styles.View_277_46} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/282e/7726/4e9d233dab46818eb4240355d3c2aea4"
            }}
            style={styles.ImageBackground_277_47}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6beb/5166/bbc8308484d3440125ba1a82b2fd572e"
          }}
          style={styles.ImageBackground_277_50}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8681/9582/c92d4dbd25155d6b955563fd6d9984af"
          }}
          style={styles.ImageBackground_277_54}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_277_1: {
    width: wp("30.434782608695656%"),
    minWidth: wp("30.434782608695656%"),
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.78260869565217%"),
    top: 154
  },
  Text_277_1: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_2: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 1461,
    minHeight: 1461,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.24154589371980675%"),
    top: 206,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 273,
    minHeight: 273,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_4: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_277_5: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_277_6: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_277_7: {
    width: wp("48.06763285024155%"),
    minWidth: wp("48.06763285024155%"),
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 222,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_8: {
    width: wp("43.23671497584541%"),
    minWidth: wp("43.23671497584541%"),
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 0
  },
  Text_277_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_9: {
    width: wp("28.019323671497588%"),
    minWidth: wp("28.019323671497588%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 35
  },
  Text_277_9: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_283_344: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 293
  },
  View_283_345: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_283_340: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_283_318: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 523,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_283_322: {
    width: wp("43.71980676328502%"),
    minWidth: wp("43.71980676328502%"),
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_283_323: {
    width: wp("38.88888888888889%"),
    minWidth: wp("38.88888888888889%"),
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 0
  },
  Text_283_323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_283_324: {
    width: wp("28.019323671497588%"),
    minWidth: wp("28.019323671497588%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 35
  },
  Text_283_324: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_283_334: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 594
  },
  View_283_335: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_283_333: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_277_10: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 824,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_14: {
    width: wp("58.69565217391305%"),
    minWidth: wp("58.69565217391305%"),
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_15: {
    width: wp("53.864734299516904%"),
    minWidth: wp("53.864734299516904%"),
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 0
  },
  Text_277_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_16: {
    width: wp("28.019323671497588%"),
    minWidth: wp("28.019323671497588%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 35
  },
  Text_277_16: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_17: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 273,
    minHeight: 273,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 895,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_11: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_277_12: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_277_13: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_277_21: {
    width: wp("69.08212560386472%"),
    minWidth: wp("69.08212560386472%"),
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 222,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_22: {
    width: wp("64.25120772946859%"),
    minWidth: wp("64.25120772946859%"),
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 0
  },
  Text_277_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_23: {
    width: wp("28.019323671497588%"),
    minWidth: wp("28.019323671497588%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 35
  },
  Text_277_23: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_283_325: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 273,
    minHeight: 273,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 1188,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_283_337: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_283_338: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_283_343: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_283_329: {
    width: wp("96.85990338164251%"),
    minWidth: wp("96.85990338164251%"),
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 222,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_283_330: {
    width: wp("92.02898550724638%"),
    minWidth: wp("92.02898550724638%"),
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 0
  },
  Text_283_330: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_283_331: {
    width: wp("28.019323671497588%"),
    minWidth: wp("28.019323671497588%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 35
  },
  Text_283_331: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_283_1508: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 126,
    minHeight: 126,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_277_24: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 126,
    minHeight: 126,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(15, 98, 78, 1)"
  },
  View_277_25: {
    width: wp("25.845410628019323%"),
    minWidth: wp("25.845410628019323%"),
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.95652173913043%"),
    top: 69
  },
  Text_277_25: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_277_26: {
    width: wp("6.763285024154589%"),
    height: 28,
    top: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.43961352657004%")
  },
  View_313_286: {
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
  View_313_287: {
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
  View_313_288: {
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
    opacity: 0.25
  },
  View_313_289: {
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
  View_313_290: {
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
  ImageBackground_313_291: {
    width: wp("0.3220612012245805%"),
    height: 4,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555557%")
  },
  View_313_292: {
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
  View_313_293: {
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
  ImageBackground_313_294: {
    width: wp("3.703703626918332%"),
    height: 11,
    top: 1.33331298828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.644142040307969%")
  },
  View_313_298: {
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
  ImageBackground_313_299: {
    width: wp("4.1062801932367154%"),
    height: 10.666666984558105,
    top: 0.66668701171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16105025286836394%")
  },
  View_313_304: {
    width: wp("13.043478260869565%"),
    minWidth: wp("13.043478260869565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 12
  },
  Text_313_304: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_277_27: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 83,
    minHeight: 83,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 813,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_28: {
    width: wp("100%"),
    height: 83,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 250, 1)"
  },
  ImageBackground_277_30: {
    width: wp("100%"),
    height: 0,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_277_32: {
    width: wp("24.00000014742791%"),
    minWidth: wp("24.00000014742791%"),
    height: 84.85281372070312,
    minHeight: 84.85281372070312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.164251207729464%"),
    top: -17.426406860351562
  },
  View_277_34: {
    width: wp("14.492753623188406%"),
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.620272871376812%"),
    top: 12.426406860351562,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(209, 207, 215, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 99,
    borderTopRightRadius: 99,
    borderBottomLeftRadius: 99,
    borderBottomRightRadius: 99
  },
  ImageBackground_277_37: {
    width: wp("9.66183574879227%"),
    height: 40,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%")
  },
  ImageBackground_277_40: {
    width: wp("9.66183574879227%"),
    height: 40,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.91304347826087%")
  },
  View_277_45: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.410628019323674%"),
    top: 5
  },
  View_277_46: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_277_47: {
    width: wp("6.27606433370839%"),
    minWidth: wp("6.27606433370839%"),
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2386893304649718%"),
    top: 4
  },
  ImageBackground_277_50: {
    width: wp("9.66183574879227%"),
    height: 40,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.90821256038647%")
  },
  ImageBackground_277_54: {
    width: wp("9.66183574879227%"),
    height: 40,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.5072463768116%")
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
