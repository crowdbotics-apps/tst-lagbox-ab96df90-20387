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
      <View style={styles.View_277_88}>
        <View style={styles.View_277_89}>
          <View style={styles.View_277_90}>
            <View style={styles.View_277_91} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5764/6e18/82d0b12132750efa2242ccf55fc2027c"
              }}
              style={styles.ImageBackground_277_92}
            />
          </View>
          <View style={styles.View_277_93}>
            <View style={styles.View_277_94}>
              <Text style={styles.Text_277_94}>
                Tiger: opportunity to play a match{" "}
              </Text>
            </View>
            <View style={styles.View_277_95}>
              <Text style={styles.Text_277_95}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_277_96}>
          <View style={styles.View_277_97}>
            <View style={styles.View_277_98} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/693e/33a3/b12928a8e7fdaf1b6fae59a4a1de7b77"
              }}
              style={styles.ImageBackground_277_99}
            />
          </View>
          <View style={styles.View_277_100}>
            <View style={styles.View_277_101}>
              <Text style={styles.Text_277_101}>
                Lorem ipsum dolor sit amet{" "}
              </Text>
            </View>
            <View style={styles.View_277_102}>
              <Text style={styles.Text_277_102}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_283_383}>
          <View style={styles.View_283_417}>
            <View style={styles.View_283_418} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c32d/840a/cfaedae2eddc3de05ee562ec3754a1dd"
              }}
              style={styles.ImageBackground_283_406}
            />
          </View>
          <View style={styles.View_283_387}>
            <View style={styles.View_283_388}>
              <Text style={styles.Text_283_388}>
                Lorem ipsum dolor sit amet{" "}
              </Text>
            </View>
            <View style={styles.View_283_389}>
              <Text style={styles.Text_283_389}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_283_408}>
          <View style={styles.View_283_409} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e9c/ea06/0122c7397f6697dff93c458b635dd24c"
            }}
            style={styles.ImageBackground_283_404}
          />
        </View>
        <View style={styles.View_283_390}>
          <View style={styles.View_283_394}>
            <View style={styles.View_283_395}>
              <Text style={styles.Text_283_395}>
                Lorem ipsum dolor sit amet{" "}
              </Text>
            </View>
            <View style={styles.View_283_396}>
              <Text style={styles.Text_283_396}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_283_397}>
          <View style={styles.View_283_411}>
            <View style={styles.View_283_412} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc9a/f3b9/3877abc2ca7c3468d2a646fbd68ae5aa"
              }}
              style={styles.ImageBackground_283_407}
            />
          </View>
          <View style={styles.View_283_401}>
            <View style={styles.View_283_402}>
              <Text style={styles.Text_283_402}>
                Lorem ipsum dolor sit amet{" "}
              </Text>
            </View>
            <View style={styles.View_283_403}>
              <Text style={styles.Text_283_403}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_283_420}>
          <View style={styles.View_283_414}>
            <View style={styles.View_283_415} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3588/882e/4e7e2e31e576ce743ac8d311311f2b95"
              }}
              style={styles.ImageBackground_283_405}
            />
          </View>
          <View style={styles.View_283_424}>
            <View style={styles.View_283_425}>
              <Text style={styles.Text_283_425}>
                Lorem ipsum dolor sit amet{" "}
              </Text>
            </View>
            <View style={styles.View_283_426}>
              <Text style={styles.Text_283_426}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_309_1} />
      <View style={styles.View_283_429} />
      <View style={styles.View_283_428}>
        <View style={styles.View_277_56} />
        <View style={styles.View_277_57}>
          <Text style={styles.Text_277_57}>Grill</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b33d/3e23/402e7b837c7c6a38147c9f39acd8d723"
          }}
          style={styles.ImageBackground_277_58}
        />
        <View style={styles.View_277_103}>
          <View style={styles.View_277_104}>
            <Text style={styles.Text_277_104}>News &amp; updates</Text>
          </View>
          <View style={styles.View_277_105}>
            <Text style={styles.Text_277_105}>Hangouts</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/debd/fdd4/dc773fa4b6631d69078271dfe0cebdfc"
            }}
            style={styles.ImageBackground_277_106}
          />
        </View>
      </View>
      <View style={styles.View_277_59}>
        <View style={styles.View_277_60} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1af/ff75/40f5df368ba3f4a1816ff8bfe36ff603"
          }}
          style={styles.ImageBackground_277_62}
        />
        <View style={styles.View_277_64}>
          <View style={styles.View_277_66} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63bd/bfe5/5a2d3544c2a398795038e473fb14382a"
          }}
          style={styles.ImageBackground_277_69}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b22f/903b/8e2a9c4c941e8e831ae87b986526fa1f"
          }}
          style={styles.ImageBackground_277_72}
        />
        <View style={styles.View_277_77}>
          <View style={styles.View_277_78} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/282e/7726/4e9d233dab46818eb4240355d3c2aea4"
            }}
            style={styles.ImageBackground_277_79}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e276/9748/36796217a8926d608877d2f1e878a6cb"
          }}
          style={styles.ImageBackground_277_82}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b48/83d1/6fca36517b0e9d3333bd10edae131c91"
          }}
          style={styles.ImageBackground_277_86}
        />
      </View>
      <View style={styles.View_313_305}>
        <View style={styles.View_313_306}>
          <View style={styles.View_313_307} />
          <View style={styles.View_313_308}>
            <View style={styles.View_313_309} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc96/bb06/04f8ec2b38013fd2116d1bb6c2b39332"
              }}
              style={styles.ImageBackground_313_310}
            />
            <View style={styles.View_313_311} />
          </View>
          <View style={styles.View_313_312}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d16a/ea59/af3b43a3d1442ed44b8f478721d47850"
              }}
              style={styles.ImageBackground_313_313}
            />
          </View>
          <View style={styles.View_313_317}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_313_318}
            />
          </View>
          <View style={styles.View_313_323}>
            <Text style={styles.Text_313_323}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_277_88: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 1769,
    minHeight: 1769,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 163,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_277_89: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 291,
    minHeight: 291,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_90: {
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
  View_277_91: {
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
  ImageBackground_277_92: {
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
  View_277_93: {
    width: wp("78.01932367149759%"),
    minWidth: wp("78.01932367149759%"),
    height: 69,
    minHeight: 69,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 222,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_94: {
    width: wp("73.18840579710145%"),
    minWidth: wp("73.18840579710145%"),
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 0
  },
  Text_277_94: {
    color: "rgba(27, 35, 30, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_95: {
    width: wp("68.84057971014492%"),
    minWidth: wp("68.84057971014492%"),
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 35
  },
  Text_277_95: {
    color: "rgba(126, 139, 131, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_96: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 274,
    minHeight: 274,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 311,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_97: {
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
  View_277_98: {
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
  ImageBackground_277_99: {
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
  View_277_100: {
    width: wp("95.41062801932367%"),
    minWidth: wp("95.41062801932367%"),
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 222,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_101: {
    width: wp("66.90821256038647%"),
    minWidth: wp("66.90821256038647%"),
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 0
  },
  Text_277_101: {
    color: "rgba(27, 35, 30, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_102: {
    width: wp("90.57971014492753%"),
    minWidth: wp("90.57971014492753%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 35
  },
  Text_277_102: {
    color: "rgba(126, 139, 131, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_283_383: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 274,
    minHeight: 274,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 605,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_283_417: {
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
  View_283_418: {
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
  ImageBackground_283_406: {
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
  View_283_387: {
    width: wp("95.41062801932367%"),
    minWidth: wp("95.41062801932367%"),
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 222,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_283_388: {
    width: wp("66.90821256038647%"),
    minWidth: wp("66.90821256038647%"),
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 0
  },
  Text_283_388: {
    color: "rgba(27, 35, 30, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_283_389: {
    width: wp("90.57971014492753%"),
    minWidth: wp("90.57971014492753%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 35
  },
  Text_283_389: {
    color: "rgba(126, 139, 131, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_283_408: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 899
  },
  View_283_409: {
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
  ImageBackground_283_404: {
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
  View_283_390: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 1129,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_283_394: {
    width: wp("95.41062801932367%"),
    minWidth: wp("95.41062801932367%"),
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_283_395: {
    width: wp("66.90821256038647%"),
    minWidth: wp("66.90821256038647%"),
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 0
  },
  Text_283_395: {
    color: "rgba(27, 35, 30, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_283_396: {
    width: wp("90.57971014492753%"),
    minWidth: wp("90.57971014492753%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 35
  },
  Text_283_396: {
    color: "rgba(126, 139, 131, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_283_397: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 274,
    minHeight: 274,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 1201,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_283_411: {
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
  View_283_412: {
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
  ImageBackground_283_407: {
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
  View_283_401: {
    width: wp("95.41062801932367%"),
    minWidth: wp("95.41062801932367%"),
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 222,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_283_402: {
    width: wp("66.90821256038647%"),
    minWidth: wp("66.90821256038647%"),
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 0
  },
  Text_283_402: {
    color: "rgba(27, 35, 30, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_283_403: {
    width: wp("90.57971014492753%"),
    minWidth: wp("90.57971014492753%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 35
  },
  Text_283_403: {
    color: "rgba(126, 139, 131, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_283_420: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 274,
    minHeight: 274,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 1495,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_283_414: {
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
  View_283_415: {
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
  ImageBackground_283_405: {
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
  View_283_424: {
    width: wp("95.41062801932367%"),
    minWidth: wp("95.41062801932367%"),
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 222,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_283_425: {
    width: wp("66.90821256038647%"),
    minWidth: wp("66.90821256038647%"),
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 0
  },
  Text_283_425: {
    color: "rgba(27, 35, 30, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_283_426: {
    width: wp("90.57971014492753%"),
    minWidth: wp("90.57971014492753%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 35
  },
  Text_283_426: {
    color: "rgba(126, 139, 131, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_309_1: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 98,
    minHeight: 98,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 1947,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_283_429: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 126,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_283_428: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 162,
    minHeight: 162,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_277_56: {
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
  View_277_57: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.96135265700483%"),
    top: 69
  },
  Text_277_57: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_277_58: {
    width: wp("6.763285024154589%"),
    height: 28,
    top: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.43961352657004%")
  },
  View_277_103: {
    width: wp("56.28019323671497%"),
    minWidth: wp("56.28019323671497%"),
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 136
  },
  View_277_104: {
    width: wp("28.019323671497588%"),
    minWidth: wp("28.019323671497588%"),
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_277_104: {
    color: "rgba(15, 98, 78, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_105: {
    width: wp("16.908212560386474%"),
    minWidth: wp("16.908212560386474%"),
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.371980676328505%"),
    top: 0
  },
  Text_277_105: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_277_106: {
    width: wp("28.019323671497588%"),
    minWidth: wp("28.019323671497588%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 26
  },
  View_277_59: {
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
  View_277_60: {
    width: wp("100%"),
    height: 83,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 250, 1)"
  },
  ImageBackground_277_62: {
    width: wp("100%"),
    height: 0,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_277_64: {
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
  View_277_66: {
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
  ImageBackground_277_69: {
    width: wp("9.66183574879227%"),
    height: 40,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%")
  },
  ImageBackground_277_72: {
    width: wp("9.66183574879227%"),
    height: 40,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.91304347826087%")
  },
  View_277_77: {
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
  View_277_78: {
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
  ImageBackground_277_79: {
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
  ImageBackground_277_82: {
    width: wp("9.66183574879227%"),
    height: 40,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.90821256038647%")
  },
  ImageBackground_277_86: {
    width: wp("9.66183574879227%"),
    height: 40,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.5072463768116%")
  },
  View_313_305: {
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
  View_313_306: {
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
  View_313_307: {
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
  View_313_308: {
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
  View_313_309: {
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
  ImageBackground_313_310: {
    width: wp("0.3220612012245805%"),
    height: 4,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555557%")
  },
  View_313_311: {
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
  View_313_312: {
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
  ImageBackground_313_313: {
    width: wp("3.703703626918332%"),
    height: 11,
    top: 1.33331298828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.644142040307969%")
  },
  View_313_317: {
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
  ImageBackground_313_318: {
    width: wp("4.1062801932367154%"),
    height: 10.666666984558105,
    top: 0.66668701171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16105025286836394%")
  },
  View_313_323: {
    width: wp("13.043478260869565%"),
    minWidth: wp("13.043478260869565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 12
  },
  Text_313_323: {
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
