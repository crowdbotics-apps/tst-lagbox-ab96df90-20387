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
      <View style={styles.View_173_762} />
      <View style={styles.View_173_763}>
        <View style={styles.View_173_764}>
          <Text style={styles.Text_173_764}>Practice match</Text>
        </View>
        <View style={styles.View_173_765}>
          <Text style={styles.Text_173_765}>Thursday 05/14/2020</Text>
        </View>
      </View>
      <View style={styles.View_173_766} />
      <View style={styles.View_173_767}>
        <Text style={styles.Text_173_767}>Tendencies</Text>
      </View>
      <View style={styles.View_173_768}>
        <Text style={styles.Text_173_768}>Latest round</Text>
      </View>
      <View style={styles.View_173_769}>
        <Text style={styles.Text_173_769}>VS.</Text>
      </View>
      <View style={styles.View_173_772}>
        <View style={styles.View_173_773}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62f4/e5c8/f36a2925372390c0d793ba628f9c5200"
            }}
            style={styles.ImageBackground_173_774}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d5a/5e60/575c18aa75bb12cff17545c4fb93a69e"
            }}
            style={styles.ImageBackground_173_775}
          />
          <View style={styles.View_173_776}>
            <Text style={styles.Text_173_776}>75%</Text>
          </View>
        </View>
        <View style={styles.View_173_777}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e3f/1657/3485194116a3dd990726a2e37645906e"
            }}
            style={styles.ImageBackground_173_778}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f18/7f97/4e8b688da715b77b421346ce76daa314"
            }}
            style={styles.ImageBackground_173_779}
          />
          <View style={styles.View_173_780}>
            <Text style={styles.Text_173_780}>25%</Text>
          </View>
        </View>
        <View style={styles.View_173_781}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6162/0ac4/d206b796ce6e58789860a86fe9527ba2"
            }}
            style={styles.ImageBackground_173_782}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c46/69d6/faf8f15d6135dcb5765dc2ec0ee8d23a"
            }}
            style={styles.ImageBackground_173_783}
          />
          <View style={styles.View_173_784}>
            <Text style={styles.Text_173_784}>35%</Text>
          </View>
        </View>
        <View style={styles.View_173_785}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a85/da50/5923591a759f9b5bf3e2bc88d686b517"
            }}
            style={styles.ImageBackground_173_786}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be37/ec21/b769115f6356ca8e21db144bbcec4503"
            }}
            style={styles.ImageBackground_173_787}
          />
          <View style={styles.View_173_788}>
            <Text style={styles.Text_173_788}>80%</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_173_789}>
        <Text style={styles.Text_173_789}>Left</Text>
      </View>
      <View style={styles.View_173_790}>
        <Text style={styles.Text_173_790}>Right</Text>
      </View>
      <View style={styles.View_173_791}>
        <Text style={styles.Text_173_791}>In CZ</Text>
      </View>
      <View style={styles.View_173_792}>
        <Text style={styles.Text_173_792}>IN LB</Text>
      </View>
      <View style={styles.View_173_793} />
      <View style={styles.View_173_794}>
        <View style={styles.View_173_795}>
          <Text style={styles.Text_173_795}>56</Text>
        </View>
        <View style={styles.View_173_796}>
          <Text style={styles.Text_173_796}>Points</Text>
        </View>
      </View>
      <View style={styles.View_173_797}>
        <View style={styles.View_173_798} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83ff/924e/134f80eed0a4c365f8376c8b9b2088a3"
          }}
          style={styles.ImageBackground_173_799}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45d0/bf2a/bd9203b4dad4be503cab9e65f46f5222"
          }}
          style={styles.ImageBackground_173_800}
        />
      </View>
      <View style={styles.View_173_801}>
        <Text style={styles.Text_173_801}>you</Text>
      </View>
      <View style={styles.View_173_802}>
        <View style={styles.View_173_803} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7773/6826/e817463c2b1123c8ad31c8e5ef184418"
          }}
          style={styles.ImageBackground_173_804}
        />
        <View style={styles.View_173_805} />
      </View>
      <View style={styles.View_173_806}>
        <Text style={styles.Text_173_806}>Patrick Reed</Text>
      </View>
      <View style={styles.View_173_807}>
        <View style={styles.View_173_808} />
        <View style={styles.View_173_809} />
        <View style={styles.View_173_810}>
          <Text style={styles.Text_173_810}> 72%</Text>
        </View>
        <View style={styles.View_173_811}>
          <Text style={styles.Text_173_811}>In lag box</Text>
        </View>
      </View>
      <View style={styles.View_173_812}>
        <View style={styles.View_173_813} />
        <View style={styles.View_173_814} />
        <View style={styles.View_173_815}>
          <Text style={styles.Text_173_815}> 88%</Text>
        </View>
        <View style={styles.View_173_816}>
          <Text style={styles.Text_173_816}>In lag box</Text>
        </View>
      </View>
      <View style={styles.View_173_817}>
        <View style={styles.View_173_818} />
        <View style={styles.View_173_819} />
        <View style={styles.View_173_820}>
          <Text style={styles.Text_173_820}> 28%</Text>
        </View>
        <View style={styles.View_173_821}>
          <Text style={styles.Text_173_821}>In CZ</Text>
        </View>
      </View>
      <View style={styles.View_173_822}>
        <View style={styles.View_173_823} />
        <View style={styles.View_173_824} />
        <View style={styles.View_173_825}>
          <Text style={styles.Text_173_825}> 36pts</Text>
        </View>
        <View style={styles.View_173_826}>
          <Text style={styles.Text_173_826}>Avg. points</Text>
        </View>
      </View>
      <View style={styles.View_173_827}>
        <View style={styles.View_173_828} />
        <View style={styles.View_173_829} />
        <View style={styles.View_173_830}>
          <Text style={styles.Text_173_830}> 36%</Text>
        </View>
        <View style={styles.View_173_831}>
          <Text style={styles.Text_173_831}>In CZ</Text>
        </View>
      </View>
      <View style={styles.View_173_832}>
        <View style={styles.View_173_833} />
        <View style={styles.View_173_834} />
        <View style={styles.View_173_835}>
          <Text style={styles.Text_173_835}>73pts</Text>
        </View>
        <View style={styles.View_173_836}>
          <Text style={styles.Text_173_836}>Avg points</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4275/1142/b4675f7140550123313153ada4b3df40"
        }}
        style={styles.ImageBackground_173_865}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4275/1142/b4675f7140550123313153ada4b3df40"
        }}
        style={styles.ImageBackground_173_866}
      />
      <View style={styles.View_309_0} />
      <View style={styles.View_173_837}>
        <View style={styles.View_173_838} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1af/ff75/40f5df368ba3f4a1816ff8bfe36ff603"
          }}
          style={styles.ImageBackground_173_840}
        />
        <View style={styles.View_173_842}>
          <View style={styles.View_173_844} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00d2/1726/f6ba14248d3be36c6cfb4911c05247f6"
          }}
          style={styles.ImageBackground_173_847}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b2c/8a97/7643df3b64f0a639cd8e2ab6192bd0f4"
          }}
          style={styles.ImageBackground_173_850}
        />
        <View style={styles.View_173_855}>
          <View style={styles.View_173_856} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/282e/7726/4e9d233dab46818eb4240355d3c2aea4"
            }}
            style={styles.ImageBackground_173_857}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e276/9748/36796217a8926d608877d2f1e878a6cb"
          }}
          style={styles.ImageBackground_173_860}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b48/83d1/6fca36517b0e9d3333bd10edae131c91"
          }}
          style={styles.ImageBackground_173_864}
        />
      </View>
      <View style={styles.View_173_876}>
        <View style={styles.View_173_760} />
        <View style={styles.View_173_761}>
          <Text style={styles.Text_173_761}>Clubhouse</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b33d/3e23/402e7b837c7c6a38147c9f39acd8d723"
          }}
          style={styles.ImageBackground_173_771}
        />
      </View>
      <View style={styles.View_313_248}>
        <View style={styles.View_313_249}>
          <View style={styles.View_313_250} />
          <View style={styles.View_313_251}>
            <View style={styles.View_313_252} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc96/bb06/04f8ec2b38013fd2116d1bb6c2b39332"
              }}
              style={styles.ImageBackground_313_253}
            />
            <View style={styles.View_313_254} />
          </View>
          <View style={styles.View_313_255}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d16a/ea59/af3b43a3d1442ed44b8f478721d47850"
              }}
              style={styles.ImageBackground_313_256}
            />
          </View>
          <View style={styles.View_313_260}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_313_261}
            />
          </View>
          <View style={styles.View_313_266}>
            <Text style={styles.Text_313_266}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_173_762: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 208,
    backgroundColor: "rgba(253, 253, 253, 1)",
    borderColor: "rgba(232, 232, 232, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_173_763: {
    width: wp("34.54106280193236%"),
    minWidth: wp("34.54106280193236%"),
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.352657004830919%"),
    top: 230,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_173_764: {
    width: wp("25.120772946859905%"),
    minWidth: wp("25.120772946859905%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_173_764: {
    color: "rgba(24, 38, 29, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_765: {
    width: wp("34.54106280193236%"),
    minWidth: wp("34.54106280193236%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 29
  },
  Text_173_765: {
    color: "rgba(88, 95, 91, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_766: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 188,
    minHeight: 188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 363,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_173_767: {
    width: wp("23.91304347826087%"),
    minWidth: wp("23.91304347826087%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.352657004830919%"),
    top: 326
  },
  Text_173_767: {
    color: "rgba(24, 38, 29, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_768: {
    width: wp("26.32850241545894%"),
    minWidth: wp("26.32850241545894%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.352657004830919%"),
    top: 168
  },
  Text_173_768: {
    color: "rgba(24, 38, 29, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_769: {
    width: wp("8.937198067632849%"),
    minWidth: wp("8.937198067632849%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.893719806763286%"),
    top: 644
  },
  Text_173_769: {
    color: "rgba(24, 38, 29, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_772: {
    width: wp("90.57971014492753%"),
    minWidth: wp("90.57971014492753%"),
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 434,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_173_773: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  ImageBackground_173_774: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  ImageBackground_173_775: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_173_776: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275361%"),
    top: 31
  },
  Text_173_776: {
    color: "rgba(15, 15, 68, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_777: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.91304347826087%"),
    top: 0
  },
  ImageBackground_173_778: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  ImageBackground_173_779: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_173_780: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275356%"),
    top: 31
  },
  Text_173_780: {
    color: "rgba(24, 38, 29, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_781: {
    width: wp("18.84057971014493%"),
    minWidth: wp("18.84057971014493%"),
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.82608695652174%"),
    top: 0
  },
  ImageBackground_173_782: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2415458937198025%"),
    top: 0
  },
  ImageBackground_173_783: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_173_784: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275367%"),
    top: 31
  },
  Text_173_784: {
    color: "rgba(24, 38, 29, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_785: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.98067632850241%"),
    top: 0
  },
  ImageBackground_173_786: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  ImageBackground_173_787: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_173_788: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.79710144927536%"),
    top: 31
  },
  Text_173_788: {
    color: "rgba(24, 38, 29, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_789: {
    width: wp("6.280193236714976%"),
    minWidth: wp("6.280193236714976%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.11111111111111%"),
    top: 403
  },
  Text_173_789: {
    color: "rgba(24, 38, 29, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_790: {
    width: wp("8.454106280193237%"),
    minWidth: wp("8.454106280193237%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.05797101449276%"),
    top: 403
  },
  Text_173_790: {
    color: "rgba(24, 38, 29, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_791: {
    width: wp("8.695652173913043%"),
    minWidth: wp("8.695652173913043%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.729468599033815%"),
    top: 403
  },
  Text_173_791: {
    color: "rgba(24, 38, 29, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_792: {
    width: wp("8.695652173913043%"),
    minWidth: wp("8.695652173913043%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.64251207729468%"),
    top: 403
  },
  Text_173_792: {
    color: "rgba(24, 38, 29, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_793: {
    width: wp("16.908212560386474%"),
    minWidth: wp("16.908212560386474%"),
    height: 74,
    minHeight: 74,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.32850241545893%"),
    top: 216,
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(15, 98, 78, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_173_794: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.46859903381642%"),
    top: 224
  },
  View_173_795: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_173_795: {
    color: "rgba(15, 98, 78, 1)",
    fontSize: 32,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_796: {
    width: wp("9.903381642512077%"),
    minWidth: wp("9.903381642512077%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594359%"),
    top: 43
  },
  Text_173_796: {
    color: "rgba(15, 98, 78, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_797: {
    width: wp("38.164251207729464%"),
    minWidth: wp("38.164251207729464%"),
    height: 144,
    minHeight: 144,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 584
  },
  View_173_798: {
    width: wp("38.164251207729464%"),
    minWidth: wp("38.164251207729464%"),
    height: 144,
    minHeight: 144,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(253, 253, 253, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_173_799: {
    width: wp("38.164251207729464%"),
    minWidth: wp("38.164251207729464%"),
    height: 144,
    minHeight: 144,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_173_800: {
    width: wp("38.164251207729464%"),
    minWidth: wp("38.164251207729464%"),
    height: 43,
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 101
  },
  View_173_801: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.048309178743963%"),
    top: 697
  },
  Text_173_801: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_802: {
    width: wp("38.164251207729464%"),
    minWidth: wp("38.164251207729464%"),
    height: 144,
    minHeight: 144,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.00483091787439%"),
    top: 584
  },
  View_173_803: {
    width: wp("38.164251207729464%"),
    minWidth: wp("38.164251207729464%"),
    height: 144,
    minHeight: 144,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(244, 245, 245, 1)",
    borderColor: "rgba(180, 187, 183, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_173_804: {
    width: wp("38.164251207729464%"),
    minWidth: wp("38.164251207729464%"),
    height: 144,
    minHeight: 144,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_173_805: {
    width: wp("38.164251207729464%"),
    minWidth: wp("38.164251207729464%"),
    height: 43,
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 101,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_173_806: {
    width: wp("23.18840579710145%"),
    minWidth: wp("23.18840579710145%"),
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.4927536231884%"),
    top: 697
  },
  Text_173_806: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_807: {
    flexGrow: 1,
    width: wp("36.95652173913043%"),
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995169%"),
    top: 757,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_173_808: {
    flexGrow: 1,
    width: wp("36.473429951690825%"),
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.483091787439613%"),
    top: 32,
    backgroundColor: "rgba(15, 98, 78, 1)",
    opacity: 0.25,
    borderTopLeftRadius: 99,
    borderTopRightRadius: 99,
    borderBottomLeftRadius: 99,
    borderBottomRightRadius: 99
  },
  View_173_809: {
    flexGrow: 1,
    width: wp("21.497584541062803%"),
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32,
    backgroundColor: "rgba(15, 98, 78, 1)",
    borderTopLeftRadius: 99,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 99
  },
  View_173_810: {
    flexGrow: 1,
    width: wp("36.95652173913043%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 2
  },
  Text_173_810: {
    color: "rgba(119, 118, 126, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_173_811: {
    flexGrow: 1,
    width: wp("36.95652173913043%"),
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_173_811: {
    color: "rgba(35, 35, 38, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_173_812: {
    flexGrow: 1,
    width: wp("36.95652173913043%"),
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.212560386473434%"),
    top: 757,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_173_813: {
    flexGrow: 1,
    width: wp("36.473429951690825%"),
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396121%"),
    top: 32,
    backgroundColor: "rgba(15, 98, 78, 1)",
    opacity: 0.25,
    borderTopLeftRadius: 99,
    borderTopRightRadius: 99,
    borderBottomLeftRadius: 99,
    borderBottomRightRadius: 99
  },
  View_173_814: {
    flexGrow: 1,
    width: wp("33.091787439613526%"),
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32,
    backgroundColor: "rgba(15, 98, 78, 1)",
    borderTopLeftRadius: 99,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 99
  },
  View_173_815: {
    flexGrow: 1,
    width: wp("36.95652173913043%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 2
  },
  Text_173_815: {
    color: "rgba(119, 118, 126, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_173_816: {
    flexGrow: 1,
    width: wp("36.95652173913043%"),
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_173_816: {
    color: "rgba(35, 35, 38, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_173_817: {
    flexGrow: 1,
    width: wp("38.164251207729464%"),
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 821,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_173_818: {
    flexGrow: 1,
    width: wp("37.68115942028986%"),
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.483091787439613%"),
    top: 32,
    backgroundColor: "rgba(15, 98, 78, 1)",
    opacity: 0.25,
    borderTopLeftRadius: 99,
    borderTopRightRadius: 99,
    borderBottomLeftRadius: 99,
    borderBottomRightRadius: 99
  },
  View_173_819: {
    flexGrow: 1,
    width: wp("7.971014492753622%"),
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32,
    backgroundColor: "rgba(15, 98, 78, 1)",
    borderTopLeftRadius: 99,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 99
  },
  View_173_820: {
    flexGrow: 1,
    width: wp("38.164251207729464%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 2
  },
  Text_173_820: {
    color: "rgba(119, 118, 126, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_173_821: {
    flexGrow: 1,
    width: wp("38.164251207729464%"),
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_173_821: {
    color: "rgba(35, 35, 38, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_173_822: {
    flexGrow: 1,
    width: wp("38.164251207729464%"),
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 885,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_173_823: {
    flexGrow: 1,
    width: wp("37.68115942028986%"),
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.483091787439613%"),
    top: 32,
    backgroundColor: "rgba(15, 98, 78, 1)",
    opacity: 0.25,
    borderTopLeftRadius: 99,
    borderTopRightRadius: 99,
    borderBottomLeftRadius: 99,
    borderBottomRightRadius: 99
  },
  View_173_824: {
    flexGrow: 1,
    width: wp("12.077294685990339%"),
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32,
    backgroundColor: "rgba(15, 98, 78, 1)",
    borderTopLeftRadius: 99,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 99
  },
  View_173_825: {
    flexGrow: 1,
    width: wp("38.164251207729464%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 2
  },
  Text_173_825: {
    color: "rgba(119, 118, 126, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_173_826: {
    flexGrow: 1,
    width: wp("38.164251207729464%"),
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_173_826: {
    color: "rgba(35, 35, 38, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_173_827: {
    flexGrow: 1,
    width: wp("38.164251207729464%"),
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.00483091787439%"),
    top: 821,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_173_828: {
    flexGrow: 1,
    width: wp("37.68115942028986%"),
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    top: 32,
    backgroundColor: "rgba(15, 98, 78, 1)",
    opacity: 0.25,
    borderTopLeftRadius: 99,
    borderTopRightRadius: 99,
    borderBottomLeftRadius: 99,
    borderBottomRightRadius: 99
  },
  View_173_829: {
    flexGrow: 1,
    width: wp("14.734299516908212%"),
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32,
    backgroundColor: "rgba(15, 98, 78, 1)",
    borderTopLeftRadius: 99,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 99
  },
  View_173_830: {
    flexGrow: 1,
    width: wp("38.164251207729464%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 2
  },
  Text_173_830: {
    color: "rgba(119, 118, 126, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_173_831: {
    flexGrow: 1,
    width: wp("38.164251207729464%"),
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_173_831: {
    color: "rgba(35, 35, 38, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_173_832: {
    flexGrow: 1,
    width: wp("38.164251207729464%"),
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.00483091787439%"),
    top: 885,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_173_833: {
    flexGrow: 1,
    width: wp("37.68115942028986%"),
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    top: 32,
    backgroundColor: "rgba(15, 98, 78, 1)",
    opacity: 0.25,
    borderTopLeftRadius: 99,
    borderTopRightRadius: 99,
    borderBottomLeftRadius: 99,
    borderBottomRightRadius: 99
  },
  View_173_834: {
    flexGrow: 1,
    width: wp("28.26086956521739%"),
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32,
    backgroundColor: "rgba(15, 98, 78, 1)",
    borderTopLeftRadius: 99,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 99
  },
  View_173_835: {
    flexGrow: 1,
    width: wp("38.164251207729464%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 2
  },
  Text_173_835: {
    color: "rgba(119, 118, 126, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_173_836: {
    flexGrow: 1,
    width: wp("38.164251207729464%"),
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_173_836: {
    color: "rgba(35, 35, 38, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  ImageBackground_173_865: {
    width: wp("100%"),
    minWidth: wp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 363
  },
  ImageBackground_173_866: {
    width: wp("100%"),
    minWidth: wp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 551
  },
  View_309_0: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 117,
    minHeight: 117,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 945,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_173_837: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 83,
    minHeight: 83,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 814,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_173_838: {
    width: wp("100%"),
    height: 83,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 250, 1)"
  },
  ImageBackground_173_840: {
    width: wp("100%"),
    height: 0,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_173_842: {
    width: wp("24.00000014742791%"),
    minWidth: wp("24.00000014742791%"),
    height: 84.85281372070312,
    minHeight: 84.85281372070312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.16423646493811%"),
    top: -17.426406860351562
  },
  View_173_844: {
    width: wp("14.492753623188406%"),
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.62028761416817%"),
    top: 12.426406860351562,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(209, 207, 215, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 99,
    borderTopRightRadius: 99,
    borderBottomLeftRadius: 99,
    borderBottomRightRadius: 99
  },
  ImageBackground_173_847: {
    width: wp("9.66183574879227%"),
    height: 40,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%")
  },
  ImageBackground_173_850: {
    width: wp("9.66183574879227%"),
    height: 40,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.91304347826087%")
  },
  View_173_855: {
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
  View_173_856: {
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
  ImageBackground_173_857: {
    width: wp("6.27606433370839%"),
    minWidth: wp("6.27606433370839%"),
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2387040732563435%"),
    top: 4
  },
  ImageBackground_173_860: {
    width: wp("9.66183574879227%"),
    height: 40,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.90821256038647%")
  },
  ImageBackground_173_864: {
    width: wp("9.66183574879227%"),
    height: 40,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.5072463768116%")
  },
  View_173_876: {
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
  View_173_760: {
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
  View_173_761: {
    width: wp("30.193236714975846%"),
    minWidth: wp("30.193236714975846%"),
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.78260869565217%"),
    top: 69
  },
  Text_173_761: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_173_771: {
    width: wp("6.763285024154589%"),
    height: 28,
    top: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.43961352657004%")
  },
  View_313_248: {
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
  View_313_249: {
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
  View_313_250: {
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
  View_313_251: {
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
  View_313_252: {
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
  ImageBackground_313_253: {
    width: wp("0.3220612012245805%"),
    height: 4,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555557%")
  },
  View_313_254: {
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
  View_313_255: {
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
  ImageBackground_313_256: {
    width: wp("3.703703626918332%"),
    height: 11,
    top: 1.33331298828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6441125547252398%")
  },
  View_313_260: {
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
  ImageBackground_313_261: {
    width: wp("4.1062801932367154%"),
    height: 10.666666984558105,
    top: 0.66668701171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16102076728562054%")
  },
  View_313_266: {
    width: wp("13.043478260869565%"),
    minWidth: wp("13.043478260869565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 12
  },
  Text_313_266: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_2: { height: 897 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
