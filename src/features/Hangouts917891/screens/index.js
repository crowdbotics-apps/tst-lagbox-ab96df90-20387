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
      <View style={styles.View_283_729}>
        <View style={styles.View_283_731} />
        <View style={styles.View_283_737} />
        <View style={styles.View_283_738}>
          <View style={styles.View_283_739}>
            <View style={styles.View_283_767} />
          </View>
        </View>
        <View style={styles.View_283_849}>
          <View style={styles.View_283_850}>
            <View style={styles.View_283_851}>
              <View style={styles.View_283_852}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a45e/7853/8c76202e12291a2f451e2ef660a3081e"
                  }}
                  style={styles.ImageBackground_283_853}
                />
              </View>
              <View style={styles.View_283_857} />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ff8/ec4e/4baa611ce2c9cf1ad406c6394ba94c97"
              }}
              style={styles.ImageBackground_283_871}
            />
          </View>
          <View style={styles.View_283_872}>
            <View style={styles.View_283_873}>
              <Text style={styles.Text_283_873}>
                Roger blue 5 members · 3 online
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_283_874} />
      <View style={styles.View_283_876}>
        <Text style={styles.Text_283_876}>Grill</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b33d/3e23/402e7b837c7c6a38147c9f39acd8d723"
        }}
        style={styles.ImageBackground_283_877}
      />
      <View style={styles.View_283_878}>
        <View style={styles.View_283_880} />
        <View style={styles.View_283_886} />
        <View style={styles.View_283_887}>
          <View style={styles.View_283_888}>
            <View style={styles.View_283_916} />
          </View>
        </View>
        <View style={styles.View_283_998}>
          <View style={styles.View_283_999}>
            <View style={styles.View_283_1000}>
              <View style={styles.View_283_1001}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a45e/7853/8c76202e12291a2f451e2ef660a3081e"
                  }}
                  style={styles.ImageBackground_283_1002}
                />
              </View>
              <View style={styles.View_283_1006} />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2498/47b1/8394b91f0b27f01218118a9e2bd887bf"
              }}
              style={styles.ImageBackground_283_1020}
            />
          </View>
          <View style={styles.View_283_1021}>
            <View style={styles.View_283_1022}>
              <Text style={styles.Text_283_1022}>
                On the rocks 12 members · 3 online
              </Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f25c/33f2/30d69cea9b03a5ab6caa69289a113ba8"
          }}
          style={styles.ImageBackground_283_1023}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4275/1142/b4675f7140550123313153ada4b3df40"
        }}
        style={styles.ImageBackground_283_1093}
      />
      <View style={styles.View_283_1035}>
        <View style={styles.View_283_1037}>
          <Text style={styles.Text_283_1037}>My groups</Text>
        </View>
      </View>
      <View style={styles.View_283_1040} />
      <View style={styles.View_283_1041}>
        <View style={styles.View_283_1042}>
          <Text style={styles.Text_283_1042}>Add group</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9c9/ad77/afe7c08cae287f66cc88159547910194"
          }}
          style={styles.ImageBackground_283_1043}
        />
      </View>
      <View style={styles.View_283_1051}>
        <View style={styles.View_283_1052} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1af/ff75/40f5df368ba3f4a1816ff8bfe36ff603"
          }}
          style={styles.ImageBackground_283_1054}
        />
        <View style={styles.View_283_1056}>
          <View style={styles.View_283_1058} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63bd/bfe5/5a2d3544c2a398795038e473fb14382a"
          }}
          style={styles.ImageBackground_283_1061}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b22f/903b/8e2a9c4c941e8e831ae87b986526fa1f"
          }}
          style={styles.ImageBackground_283_1064}
        />
        <View style={styles.View_283_1069}>
          <View style={styles.View_283_1070} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/282e/7726/4e9d233dab46818eb4240355d3c2aea4"
            }}
            style={styles.ImageBackground_283_1071}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e276/9748/36796217a8926d608877d2f1e878a6cb"
          }}
          style={styles.ImageBackground_283_1074}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b48/83d1/6fca36517b0e9d3333bd10edae131c91"
          }}
          style={styles.ImageBackground_283_1078}
        />
      </View>
      <View style={styles.View_283_1083}>
        <View style={styles.View_283_1084} />
        <View style={styles.View_283_1085}>
          <Text style={styles.Text_283_1085}>Grill</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b33d/3e23/402e7b837c7c6a38147c9f39acd8d723"
          }}
          style={styles.ImageBackground_283_1086}
        />
        <View style={styles.View_283_1087}>
          <View style={styles.View_283_1088}>
            <Text style={styles.Text_283_1088}>News &amp; updates</Text>
          </View>
          <View style={styles.View_283_1089}>
            <Text style={styles.Text_283_1089}>Hangouts</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/305b/6dfb/30bd7a5ad2f5affdf67af9b6b2b5978b"
            }}
            style={styles.ImageBackground_283_1090}
          />
        </View>
      </View>
      <View style={styles.View_313_324}>
        <View style={styles.View_313_325}>
          <View style={styles.View_313_326} />
          <View style={styles.View_313_327}>
            <View style={styles.View_313_328} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc96/bb06/04f8ec2b38013fd2116d1bb6c2b39332"
              }}
              style={styles.ImageBackground_313_329}
            />
            <View style={styles.View_313_330} />
          </View>
          <View style={styles.View_313_331}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d16a/ea59/af3b43a3d1442ed44b8f478721d47850"
              }}
              style={styles.ImageBackground_313_332}
            />
          </View>
          <View style={styles.View_313_336}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_313_337}
            />
          </View>
          <View style={styles.View_313_342}>
            <Text style={styles.Text_313_342}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_283_729: {
    flexGrow: 1,
    width: wp("100%"),
    height: 92,
    minHeight: 92,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 288,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_283_731: {
    width: wp("100%"),
    height: 92,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)",
    opacity: 0.7200000286102295
  },
  View_283_737: {
    width: wp("14.251207729468598%"),
    minWidth: wp("14.251207729468598%"),
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.932367149758454%"),
    top: 55,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_283_738: {
    width: wp("94.68599033816425%"),
    minWidth: wp("94.68599033816425%"),
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.657004830917874%"),
    top: 52
  },
  View_283_739: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.92270531400966%"),
    top: 0
  },
  View_283_767: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_283_849: {
    width: wp("58.212560386473434%"),
    minWidth: wp("58.212560386473434%"),
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 15,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_283_850: {
    width: wp("14.492753623188406%"),
    minWidth: wp("14.492753623188406%"),
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_283_851: {
    width: wp("14.492753623188406%"),
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_283_852: {
    width: wp("14.492753623188406%"),
    minWidth: wp("14.492753623188406%"),
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  ImageBackground_283_853: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    height: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover",
    borderTopLeftRadius: 99,
    borderTopRightRadius: 99,
    borderBottomLeftRadius: 99,
    borderBottomRightRadius: 99
  },
  View_283_857: {
    width: wp("14.492753623188406%"),
    minWidth: wp("14.492753623188406%"),
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  ImageBackground_283_871: {
    width: wp("14.492753623188406%"),
    minWidth: wp("14.492753623188406%"),
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_283_872: {
    width: wp("39.85507246376812%"),
    minWidth: wp("39.85507246376812%"),
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.357487922705314%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_283_873: {
    flexGrow: 1,
    width: wp("35.02415458937198%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980713%"),
    top: 10
  },
  Text_283_873: {
    color: "rgba(35, 35, 38, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_283_874: {
    width: wp("100%"),
    height: 92,
    top: 380,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)",
    opacity: 0.7200000286102295
  },
  View_283_876: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.96135265700483%"),
    top: 69
  },
  Text_283_876: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_283_877: {
    width: wp("6.763285024154589%"),
    height: 28,
    top: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.43961352657004%")
  },
  View_283_878: {
    flexGrow: 1,
    width: wp("100%"),
    height: 92,
    minHeight: 92,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 196,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_283_880: {
    width: wp("100%"),
    height: 92,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)",
    opacity: 0.7200000286102295
  },
  View_283_886: {
    width: wp("14.251207729468598%"),
    minWidth: wp("14.251207729468598%"),
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.932367149758454%"),
    top: 55,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_283_887: {
    width: wp("94.68599033816425%"),
    minWidth: wp("94.68599033816425%"),
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.657004830917874%"),
    top: 52
  },
  View_283_888: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.92270531400966%"),
    top: 0
  },
  View_283_916: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_283_998: {
    width: wp("60.6280193236715%"),
    minWidth: wp("60.6280193236715%"),
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 15,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_283_999: {
    width: wp("14.492753623188406%"),
    minWidth: wp("14.492753623188406%"),
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_283_1000: {
    width: wp("14.492753623188406%"),
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_283_1001: {
    width: wp("14.492753623188406%"),
    minWidth: wp("14.492753623188406%"),
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  ImageBackground_283_1002: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    height: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover",
    borderTopLeftRadius: 99,
    borderTopRightRadius: 99,
    borderBottomLeftRadius: 99,
    borderBottomRightRadius: 99
  },
  View_283_1006: {
    width: wp("14.492753623188406%"),
    minWidth: wp("14.492753623188406%"),
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  ImageBackground_283_1020: {
    width: wp("14.492753623188406%"),
    minWidth: wp("14.492753623188406%"),
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_283_1021: {
    width: wp("42.270531400966185%"),
    minWidth: wp("42.270531400966185%"),
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.357487922705314%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_283_1022: {
    flexGrow: 1,
    width: wp("37.43961352657005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980713%"),
    top: 10
  },
  Text_283_1022: {
    color: "rgba(35, 35, 38, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_283_1023: {
    width: wp("99.7584541062802%"),
    minWidth: wp("99.7584541062802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 91.5
  },
  ImageBackground_283_1093: {
    width: wp("100%"),
    minWidth: wp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 163
  },
  View_283_1035: {
    width: wp("19.32367149758454%"),
    minWidth: wp("19.32367149758454%"),
    height: 19,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 169
  },
  View_283_1037: {
    width: wp("19.32367149758454%"),
    minWidth: wp("19.32367149758454%"),
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_283_1037: {
    color: "rgba(78, 86, 80, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_283_1040: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 92,
    minHeight: 92,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 380,
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(232, 232, 232, 1)",
    borderWidth: 1
  },
  View_283_1041: {
    width: wp("31.40096618357488%"),
    minWidth: wp("31.40096618357488%"),
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 405,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_283_1042: {
    width: wp("20.28985507246377%"),
    minWidth: wp("20.28985507246377%"),
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: 10
  },
  Text_283_1042: {
    color: "rgba(15, 98, 78, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  ImageBackground_283_1043: {
    width: wp("3.864734299516908%"),
    height: 16,
    top: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.1207729468599%")
  },
  View_283_1051: {
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
  View_283_1052: {
    width: wp("100%"),
    height: 83,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 250, 1)"
  },
  ImageBackground_283_1054: {
    width: wp("100%"),
    height: 0,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_283_1056: {
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
  View_283_1058: {
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
  ImageBackground_283_1061: {
    width: wp("9.66183574879227%"),
    height: 40,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%")
  },
  ImageBackground_283_1064: {
    width: wp("9.66183574879227%"),
    height: 40,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.91304347826087%")
  },
  View_283_1069: {
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
  View_283_1070: {
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
  ImageBackground_283_1071: {
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
  ImageBackground_283_1074: {
    width: wp("9.66183574879227%"),
    height: 40,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.90821256038647%")
  },
  ImageBackground_283_1078: {
    width: wp("9.66183574879227%"),
    height: 40,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.5072463768116%")
  },
  View_283_1083: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 161.5,
    minHeight: 161.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_283_1084: {
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
  View_283_1085: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.96135265700483%"),
    top: 69
  },
  Text_283_1085: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_283_1086: {
    width: wp("6.763285024154589%"),
    height: 28,
    top: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.43961352657004%")
  },
  View_283_1087: {
    width: wp("56.28019323671497%"),
    minWidth: wp("56.28019323671497%"),
    height: 25.5,
    minHeight: 25.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 136
  },
  View_283_1088: {
    width: wp("28.019323671497588%"),
    minWidth: wp("28.019323671497588%"),
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_283_1088: {
    color: "rgba(126, 139, 131, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_283_1089: {
    width: wp("16.908212560386474%"),
    minWidth: wp("16.908212560386474%"),
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.371980676328505%"),
    top: 0
  },
  Text_283_1089: {
    color: "rgba(15, 98, 78, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_283_1090: {
    width: wp("16.908212560386474%"),
    minWidth: wp("16.908212560386474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.371980676328505%"),
    top: 25.5
  },
  View_313_324: {
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
  View_313_325: {
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
  View_313_326: {
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
  View_313_327: {
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
  View_313_328: {
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
  ImageBackground_313_329: {
    width: wp("0.3220612012245805%"),
    height: 4,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555557%")
  },
  View_313_330: {
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
  View_313_331: {
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
  ImageBackground_313_332: {
    width: wp("3.703703626918332%"),
    height: 11,
    top: 1.33331298828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.644142040307969%")
  },
  View_313_336: {
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
  ImageBackground_313_337: {
    width: wp("4.1062801932367154%"),
    height: 10.666666984558105,
    top: 0.66668701171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16105025286836394%")
  },
  View_313_342: {
    width: wp("13.043478260869565%"),
    minWidth: wp("13.043478260869565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 12
  },
  Text_313_342: {
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
