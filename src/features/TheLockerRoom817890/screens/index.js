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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a30a/f2fd/eb7482daf5a5df4f6e420d421f6a450f"
        }}
        style={styles.ImageBackground_277_125}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5ea/a8b2/e42cb313b661297f6c1d9ad7eef861a5"
        }}
        style={styles.ImageBackground_277_126}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f132/4565/c2f06bedebd21e10423e66ed3e2e30b9"
        }}
        style={styles.ImageBackground_277_127}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d51/6a85/08fc7a2d364b94631c6f74e29cd8ec99"
        }}
        style={styles.ImageBackground_277_128}
      />
      <View style={styles.View_277_132}>
        <View style={styles.View_277_133}>
          <Text style={styles.Text_277_133}>Aaron Williams</Text>
        </View>
        <View style={styles.View_277_134}>
          <Text style={styles.Text_277_134}>Plan a round</Text>
        </View>
      </View>
      <View style={styles.View_277_135}>
        <View style={styles.View_277_136}>
          <Text style={styles.Text_277_136}>Austen Brave</Text>
        </View>
        <View style={styles.View_277_137}>
          <Text style={styles.Text_277_137}>Plan a round</Text>
        </View>
      </View>
      <View style={styles.View_277_138}>
        <View style={styles.View_277_139}>
          <Text style={styles.Text_277_139}>Aly Koch</Text>
        </View>
        <View style={styles.View_277_140}>
          <Text style={styles.Text_277_140}>Plan a round</Text>
        </View>
      </View>
      <View style={styles.View_277_141}>
        <View style={styles.View_277_142}>
          <Text style={styles.Text_277_142}>Adam Sweeney</Text>
        </View>
        <View style={styles.View_277_143}>
          <Text style={styles.Text_277_143}>Plan a round</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1d3/d1f6/b2bc12272e2a8c298e7a2f3e3f685db0"
        }}
        style={styles.ImageBackground_277_150}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1d3/d1f6/b2bc12272e2a8c298e7a2f3e3f685db0"
        }}
        style={styles.ImageBackground_277_151}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1d3/d1f6/b2bc12272e2a8c298e7a2f3e3f685db0"
        }}
        style={styles.ImageBackground_277_152}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1d3/d1f6/b2bc12272e2a8c298e7a2f3e3f685db0"
        }}
        style={styles.ImageBackground_277_153}
      />
      <View style={styles.View_277_260}>
        <View style={styles.View_277_252}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15ee/60d4/1bf4e8f7e283d52864a7b07fc5976766"
            }}
            style={styles.ImageBackground_277_251}
          />
          <View style={styles.View_277_144}>
            <View style={styles.View_277_145}>
              <Text style={styles.Text_277_145}>Avis Cartwright</Text>
            </View>
            <View style={styles.View_277_146}>
              <Text style={styles.Text_277_146}>Plan a round</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_277_253}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a047/bd05/78a6fb6038f68c51081c60c9031364ac"
            }}
            style={styles.ImageBackground_277_254}
          />
          <View style={styles.View_277_257}>
            <View style={styles.View_277_258}>
              <Text style={styles.Text_277_258}>Bryan Wellington</Text>
            </View>
            <View style={styles.View_277_259}>
              <Text style={styles.Text_277_259}>Plan a round</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_277_261}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd8/fef4/e01d5f5ebbc581b483fbf8a31c7a2c76"
            }}
            style={styles.ImageBackground_277_262}
          />
          <View style={styles.View_277_265}>
            <View style={styles.View_277_266}>
              <Text style={styles.Text_277_266}>Ben Johnston</Text>
            </View>
            <View style={styles.View_277_267}>
              <Text style={styles.Text_277_267}>Plan a round</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_277_268}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b97/458f/024dead872b0ad58a5a66acd430d9917"
            }}
            style={styles.ImageBackground_277_269}
          />
          <View style={styles.View_277_272}>
            <View style={styles.View_277_273}>
              <Text style={styles.Text_277_273}>Bryce Willcox</Text>
            </View>
            <View style={styles.View_277_274}>
              <Text style={styles.Text_277_274}>Plan a round</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_277_275}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8791/cbff/ebc6023ed7e035ddd3b1adfefbd54950"
            }}
            style={styles.ImageBackground_277_276}
          />
          <View style={styles.View_277_279}>
            <View style={styles.View_277_280}>
              <Text style={styles.Text_277_280}>Cameron Alvarado</Text>
            </View>
            <View style={styles.View_277_281}>
              <Text style={styles.Text_277_281}>Plan a round</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_277_282}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7933/4c4f/d0749ae6da53f34b7ec0cfa130ad8a3e"
            }}
            style={styles.ImageBackground_277_283}
          />
          <View style={styles.View_277_286}>
            <View style={styles.View_277_287}>
              <Text style={styles.Text_277_287}>Collin Johnston</Text>
            </View>
            <View style={styles.View_277_288}>
              <Text style={styles.Text_277_288}>Plan a round</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_277_289}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/933d/f705/bbd7613d674f4dc57f7b301124be60a7"
            }}
            style={styles.ImageBackground_277_290}
          />
          <View style={styles.View_277_293}>
            <View style={styles.View_277_294}>
              <Text style={styles.Text_277_294}>Cayden Westbrooke</Text>
            </View>
            <View style={styles.View_277_295}>
              <Text style={styles.Text_277_295}>Plan a round</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_277_296}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8485/7c16/ee9db17800f980238d2895d456e4280e"
            }}
            style={styles.ImageBackground_277_297}
          />
          <View style={styles.View_277_300}>
            <View style={styles.View_277_301}>
              <Text style={styles.Text_277_301}>Damien Lillard</Text>
            </View>
            <View style={styles.View_277_302}>
              <Text style={styles.Text_277_302}>Plan a round</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_277_303}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d920/663a/6bcd2e66fb0f0d84d422d0200d432fc3"
            }}
            style={styles.ImageBackground_277_304}
          />
          <View style={styles.View_277_307}>
            <View style={styles.View_277_308}>
              <Text style={styles.Text_277_308}>Dennis Jackson</Text>
            </View>
            <View style={styles.View_277_309}>
              <Text style={styles.Text_277_309}>Plan a round</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_277_310}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/810c/a046/f26800c581be6f5be503237713ca5896"
            }}
            style={styles.ImageBackground_277_311}
          />
          <View style={styles.View_277_314}>
            <View style={styles.View_277_315}>
              <Text style={styles.Text_277_315}>Elton rupes</Text>
            </View>
            <View style={styles.View_277_316}>
              <Text style={styles.Text_277_316}>Plan a round</Text>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a67e/79f2/cae03ca11a4a485ce7e7763176187687"
        }}
        style={styles.ImageBackground_277_182}
      />
      <View style={styles.View_277_183}>
        <View style={styles.View_277_184} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1af/ff75/40f5df368ba3f4a1816ff8bfe36ff603"
          }}
          style={styles.ImageBackground_277_186}
        />
        <View style={styles.View_277_188}>
          <View style={styles.View_277_190} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63bd/bfe5/5a2d3544c2a398795038e473fb14382a"
          }}
          style={styles.ImageBackground_277_193}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b2c/8a97/7643df3b64f0a639cd8e2ab6192bd0f4"
          }}
          style={styles.ImageBackground_277_196}
        />
        <View style={styles.View_277_201}>
          <View style={styles.View_277_202} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/282e/7726/4e9d233dab46818eb4240355d3c2aea4"
            }}
            style={styles.ImageBackground_277_203}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e276/9748/36796217a8926d608877d2f1e878a6cb"
          }}
          style={styles.ImageBackground_277_206}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edfc/9132/8757d2213595c71666fd6fbe5f01e8c7"
          }}
          style={styles.ImageBackground_277_210}
        />
      </View>
      <View style={styles.View_277_317}>
        <View style={styles.View_277_318} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4275/1142/b4675f7140550123313153ada4b3df40"
          }}
          style={styles.ImageBackground_277_109}
        />
        <View style={styles.View_277_110} />
        <View style={styles.View_277_111}>
          <Text style={styles.Text_277_111}>Locker room</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b33d/3e23/402e7b837c7c6a38147c9f39acd8d723"
          }}
          style={styles.ImageBackground_277_112}
        />
        <View style={styles.View_277_113}>
          <View style={styles.View_277_114}>
            <Text style={styles.Text_277_114}>Social</Text>
          </View>
          <View style={styles.View_277_115}>
            <Text style={styles.Text_277_115}>What’s in the bag</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d968/cb3e/8698e0b1633f1b7a09782b4089d4e2ca"
            }}
            style={styles.ImageBackground_277_116}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4275/1142/b4675f7140550123313153ada4b3df40"
            }}
            style={styles.ImageBackground_277_108}
          />
        </View>
        <View style={styles.View_277_117} />
        <View style={styles.View_277_118}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44ee/6695/c45e12f39a05009252f48448be30055a"
            }}
            style={styles.ImageBackground_277_119}
          />
          <View style={styles.View_277_120}>
            <View style={styles.View_277_121}>
              <Text style={styles.Text_277_121}>Ralph Steadman</Text>
            </View>
            <View style={styles.View_277_122}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ec2/eea8/9754dc9b0b792bd5454c638ded397b05"
                }}
                style={styles.ImageBackground_277_123}
              />
              <View style={styles.View_277_124}>
                <Text style={styles.Text_277_124}>+1 (450)-312-4876</Text>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e208/8ca7/57e0029219b9e9051e032d343d5f594f"
          }}
          style={styles.ImageBackground_277_211}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53a6/0571/cd667c0208ac64e3590f9f4f9f37f0e4"
          }}
          style={styles.ImageBackground_277_212}
        />
        <View style={styles.View_277_213}>
          <View style={styles.View_277_214}>
            <Text style={styles.Text_277_214}>Add friends</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9c9/ad77/afe7c08cae287f66cc88159547910194"
            }}
            style={styles.ImageBackground_277_215}
          />
        </View>
      </View>
      <View style={styles.View_277_155}>
        <View style={styles.View_277_156}>
          <Text style={styles.Text_277_156}>A</Text>
        </View>
        <View style={styles.View_277_157}>
          <Text style={styles.Text_277_157}>B</Text>
        </View>
        <View style={styles.View_277_158}>
          <Text style={styles.Text_277_158}>C</Text>
        </View>
        <View style={styles.View_277_159}>
          <Text style={styles.Text_277_159}>D</Text>
        </View>
        <View style={styles.View_277_160}>
          <Text style={styles.Text_277_160}>E</Text>
        </View>
        <View style={styles.View_277_161}>
          <Text style={styles.Text_277_161}>F</Text>
        </View>
        <View style={styles.View_277_162}>
          <Text style={styles.Text_277_162}>G</Text>
        </View>
        <View style={styles.View_277_163}>
          <Text style={styles.Text_277_163}>H</Text>
        </View>
        <View style={styles.View_277_164}>
          <Text style={styles.Text_277_164}>I</Text>
        </View>
        <View style={styles.View_277_165}>
          <Text style={styles.Text_277_165}>J</Text>
        </View>
        <View style={styles.View_277_166}>
          <Text style={styles.Text_277_166}>K</Text>
        </View>
        <View style={styles.View_277_167}>
          <Text style={styles.Text_277_167}>L</Text>
        </View>
        <View style={styles.View_277_168}>
          <Text style={styles.Text_277_168}>M</Text>
        </View>
        <View style={styles.View_277_169}>
          <Text style={styles.Text_277_169}>N</Text>
        </View>
        <View style={styles.View_277_170}>
          <Text style={styles.Text_277_170}>O</Text>
        </View>
        <View style={styles.View_277_171}>
          <Text style={styles.Text_277_171}>P</Text>
        </View>
        <View style={styles.View_277_172}>
          <Text style={styles.Text_277_172}>Q</Text>
        </View>
        <View style={styles.View_277_173}>
          <Text style={styles.Text_277_173}>R</Text>
        </View>
        <View style={styles.View_277_174}>
          <Text style={styles.Text_277_174}>S</Text>
        </View>
        <View style={styles.View_277_175}>
          <Text style={styles.Text_277_175}>T</Text>
        </View>
        <View style={styles.View_277_176}>
          <Text style={styles.Text_277_176}>U</Text>
        </View>
        <View style={styles.View_277_177}>
          <Text style={styles.Text_277_177}>V</Text>
        </View>
        <View style={styles.View_277_178}>
          <Text style={styles.Text_277_178}>W</Text>
        </View>
        <View style={styles.View_277_179}>
          <Text style={styles.Text_277_179}>X</Text>
        </View>
        <View style={styles.View_277_180}>
          <Text style={styles.Text_277_180}>Y</Text>
        </View>
        <View style={styles.View_277_181}>
          <Text style={styles.Text_277_181}>Z</Text>
        </View>
      </View>
      <View style={styles.View_313_267}>
        <View style={styles.View_313_268}>
          <View style={styles.View_313_269} />
          <View style={styles.View_313_270}>
            <View style={styles.View_313_271} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc96/bb06/04f8ec2b38013fd2116d1bb6c2b39332"
              }}
              style={styles.ImageBackground_313_272}
            />
            <View style={styles.View_313_273} />
          </View>
          <View style={styles.View_313_274}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d16a/ea59/af3b43a3d1442ed44b8f478721d47850"
              }}
              style={styles.ImageBackground_313_275}
            />
          </View>
          <View style={styles.View_313_279}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_313_280}
            />
          </View>
          <View style={styles.View_313_285}>
            <Text style={styles.Text_313_285}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_277_125: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 328
  },
  ImageBackground_277_126: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 412
  },
  ImageBackground_277_127: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 496
  },
  ImageBackground_277_128: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 580
  },
  View_277_132: {
    width: wp("22.946859903381643%"),
    minWidth: wp("22.946859903381643%"),
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.18840579710145%"),
    top: 342,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_133: {
    width: wp("22.946859903381643%"),
    minWidth: wp("22.946859903381643%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_277_133: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_134: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 21
  },
  Text_277_134: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_135: {
    width: wp("20.531400966183575%"),
    minWidth: wp("20.531400966183575%"),
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.18840579710145%"),
    top: 426,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_136: {
    width: wp("20.531400966183575%"),
    minWidth: wp("20.531400966183575%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_277_136: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_137: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 21
  },
  Text_277_137: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_138: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.18840579710145%"),
    top: 510,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_139: {
    width: wp("13.768115942028986%"),
    minWidth: wp("13.768115942028986%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_277_139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_140: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 21
  },
  Text_277_140: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_141: {
    width: wp("23.91304347826087%"),
    minWidth: wp("23.91304347826087%"),
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.18840579710145%"),
    top: 594,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_142: {
    width: wp("23.91304347826087%"),
    minWidth: wp("23.91304347826087%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_277_142: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_143: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 21
  },
  Text_277_143: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_277_150: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.183574879227052%"),
    top: 381
  },
  ImageBackground_277_151: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.183574879227052%"),
    top: 465
  },
  ImageBackground_277_152: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.183574879227052%"),
    top: 549
  },
  ImageBackground_277_153: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.183574879227052%"),
    top: 633
  },
  View_277_260: {
    width: wp("49.51690821256038%"),
    minWidth: wp("49.51690821256038%"),
    height: 820,
    minHeight: 820,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 664,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_252: {
    width: wp("42.270531400966185%"),
    minWidth: wp("42.270531400966185%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_277_251: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_277_144: {
    width: wp("23.91304347826087%"),
    minWidth: wp("23.91304347826087%"),
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.357487922705314%"),
    top: 14.5,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_145: {
    width: wp("23.91304347826087%"),
    minWidth: wp("23.91304347826087%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_277_145: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_146: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 21
  },
  Text_277_146: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_253: {
    width: wp("44.44444444444444%"),
    minWidth: wp("44.44444444444444%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 84,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_277_254: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_277_257: {
    width: wp("26.08695652173913%"),
    minWidth: wp("26.08695652173913%"),
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.357487922705314%"),
    top: 14.5,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_258: {
    width: wp("26.08695652173913%"),
    minWidth: wp("26.08695652173913%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_277_258: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_259: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 21
  },
  Text_277_259: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_261: {
    width: wp("39.61352657004831%"),
    minWidth: wp("39.61352657004831%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 168,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_277_262: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_277_265: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.357487922705314%"),
    top: 14.5,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_266: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_277_266: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_267: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 21
  },
  Text_277_267: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_268: {
    width: wp("39.371980676328505%"),
    minWidth: wp("39.371980676328505%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 252,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_277_269: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_277_272: {
    width: wp("21.014492753623188%"),
    minWidth: wp("21.014492753623188%"),
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.357487922705314%"),
    top: 14.5,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_273: {
    width: wp("21.014492753623188%"),
    minWidth: wp("21.014492753623188%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_277_273: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_274: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 21
  },
  Text_277_274: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_275: {
    width: wp("47.10144927536232%"),
    minWidth: wp("47.10144927536232%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 336,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_277_276: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_277_279: {
    width: wp("28.743961352657006%"),
    minWidth: wp("28.743961352657006%"),
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.357487922705314%"),
    top: 14.5,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_280: {
    width: wp("28.743961352657006%"),
    minWidth: wp("28.743961352657006%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_277_280: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_281: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 21
  },
  Text_277_281: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_282: {
    width: wp("42.51207729468599%"),
    minWidth: wp("42.51207729468599%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 420,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_277_283: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_277_286: {
    width: wp("24.154589371980677%"),
    minWidth: wp("24.154589371980677%"),
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.357487922705314%"),
    top: 14.5,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_287: {
    width: wp("24.154589371980677%"),
    minWidth: wp("24.154589371980677%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_277_287: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_288: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 21
  },
  Text_277_288: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_289: {
    width: wp("49.51690821256038%"),
    minWidth: wp("49.51690821256038%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 504,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_277_290: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_277_293: {
    width: wp("31.15942028985507%"),
    minWidth: wp("31.15942028985507%"),
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.357487922705314%"),
    top: 14.5,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_294: {
    width: wp("31.15942028985507%"),
    minWidth: wp("31.15942028985507%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_277_294: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_295: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 21
  },
  Text_277_295: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_296: {
    width: wp("40.33816425120773%"),
    minWidth: wp("40.33816425120773%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 588,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_277_297: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_277_300: {
    width: wp("21.980676328502415%"),
    minWidth: wp("21.980676328502415%"),
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.357487922705314%"),
    top: 14.5,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_301: {
    width: wp("21.980676328502415%"),
    minWidth: wp("21.980676328502415%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_277_301: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_302: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 21
  },
  Text_277_302: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_303: {
    width: wp("42.7536231884058%"),
    minWidth: wp("42.7536231884058%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 672,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_277_304: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_277_307: {
    width: wp("24.396135265700483%"),
    minWidth: wp("24.396135265700483%"),
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.357487922705314%"),
    top: 14.5,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_308: {
    width: wp("24.396135265700483%"),
    minWidth: wp("24.396135265700483%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_277_308: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_309: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 21
  },
  Text_277_309: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_310: {
    width: wp("35.748792270531396%"),
    minWidth: wp("35.748792270531396%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 756,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_277_311: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_277_314: {
    width: wp("17.391304347826086%"),
    minWidth: wp("17.391304347826086%"),
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.357487922705314%"),
    top: 14.5,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_315: {
    width: wp("17.391304347826086%"),
    minWidth: wp("17.391304347826086%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_277_315: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_316: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 21
  },
  Text_277_316: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_277_182: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: 10.5,
    minHeight: 10.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("99.7584541062802%"),
    top: 330
  },
  View_277_183: {
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
  View_277_184: {
    width: wp("100%"),
    height: 83,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 250, 1)"
  },
  ImageBackground_277_186: {
    width: wp("100%"),
    height: 0,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_277_188: {
    width: wp("24.00000014742791%"),
    minWidth: wp("24.00000014742791%"),
    height: 84.85281372070312,
    minHeight: 84.85281372070312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.16422172214674%"),
    top: -17.426406860351562
  },
  View_277_190: {
    width: wp("14.492753623188406%"),
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.6203023569595345%"),
    top: 12.426406860351562,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(209, 207, 215, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 99,
    borderTopRightRadius: 99,
    borderBottomLeftRadius: 99,
    borderBottomRightRadius: 99
  },
  ImageBackground_277_193: {
    width: wp("9.66183574879227%"),
    height: 40,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%")
  },
  ImageBackground_277_196: {
    width: wp("9.66183574879227%"),
    height: 40,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.91304347826087%")
  },
  View_277_201: {
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
  View_277_202: {
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
  ImageBackground_277_203: {
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
  ImageBackground_277_206: {
    width: wp("9.66183574879227%"),
    height: 40,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.90821256038647%")
  },
  ImageBackground_277_210: {
    width: wp("9.66183574879227%"),
    height: 40,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.5072463768116%")
  },
  View_277_317: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 307,
    minHeight: 307,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_277_318: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 73,
    minHeight: 73,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 234,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_277_109: {
    width: wp("100%"),
    minWidth: wp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 307
  },
  View_277_110: {
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
  View_277_111: {
    width: wp("33.091787439613526%"),
    minWidth: wp("33.091787439613526%"),
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.57487922705314%"),
    top: 69
  },
  Text_277_111: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_277_112: {
    width: wp("6.763285024154589%"),
    height: 28,
    top: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.43961352657004%")
  },
  View_277_113: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 242
  },
  View_277_114: {
    width: wp("10.628019323671497%"),
    minWidth: wp("10.628019323671497%"),
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 0
  },
  Text_277_114: {
    color: "rgba(15, 98, 78, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_115: {
    width: wp("29.468599033816425%"),
    minWidth: wp("29.468599033816425%"),
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.053140096618357%"),
    top: 0
  },
  Text_277_115: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_277_116: {
    width: wp("10.628019323671497%"),
    minWidth: wp("10.628019323671497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 26
  },
  ImageBackground_277_108: {
    width: wp("100%"),
    minWidth: wp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 27
  },
  View_277_117: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 110,
    minHeight: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 124,
    backgroundColor: "rgba(249, 249, 249, 1)"
  },
  View_277_118: {
    width: wp("57.729468599033815%"),
    minWidth: wp("57.729468599033815%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 146,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_277_119: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_277_120: {
    width: wp("39.371980676328505%"),
    minWidth: wp("39.371980676328505%"),
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.357487922705314%"),
    top: 2,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_121: {
    width: wp("34.29951690821256%"),
    minWidth: wp("34.29951690821256%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_277_121: {
    color: "rgba(78, 86, 80, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_122: {
    width: wp("39.371980676328505%"),
    minWidth: wp("39.371980676328505%"),
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32
  },
  ImageBackground_277_123: {
    width: wp("6.763285024154589%"),
    height: 28,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_277_124: {
    width: wp("31.15942028985507%"),
    minWidth: wp("31.15942028985507%"),
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: 5
  },
  Text_277_124: {
    color: "rgba(78, 86, 80, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_277_211: {
    width: wp("6.763285024154589%"),
    height: 28,
    top: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%")
  },
  ImageBackground_277_212: {
    width: wp("6.763285024154589%"),
    height: 28,
    top: 146,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.43961352657004%")
  },
  View_277_213: {
    width: wp("28.26086956521739%"),
    minWidth: wp("28.26086956521739%"),
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.90821256038647%"),
    top: 268,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_214: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: 10
  },
  Text_277_214: {
    color: "rgba(15, 98, 78, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_277_215: {
    width: wp("3.864734299516908%"),
    height: 16,
    top: 11.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.980676328502412%")
  },
  View_277_155: {
    width: wp("2.898550724637681%"),
    minWidth: wp("2.898550724637681%"),
    height: 464,
    minHeight: 464,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.27053140096618%"),
    top: 328,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_277_156: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_277_156: {
    color: "rgba(15, 98, 78, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_157: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 18
  },
  Text_277_157: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_158: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 36
  },
  Text_277_158: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_159: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 54
  },
  Text_277_159: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_160: {
    width: wp("1.6908212560386473%"),
    minWidth: wp("1.6908212560386473%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 72
  },
  Text_277_160: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_161: {
    width: wp("1.6908212560386473%"),
    minWidth: wp("1.6908212560386473%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 90
  },
  Text_277_161: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_162: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 108
  },
  Text_277_162: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_163: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 126
  },
  Text_277_163: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_164: {
    width: wp("0.7246376811594203%"),
    minWidth: wp("0.7246376811594203%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 144
  },
  Text_277_164: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_165: {
    width: wp("1.6908212560386473%"),
    minWidth: wp("1.6908212560386473%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 162
  },
  Text_277_165: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_166: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 180
  },
  Text_277_166: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_167: {
    width: wp("1.6908212560386473%"),
    minWidth: wp("1.6908212560386473%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 198
  },
  Text_277_167: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_168: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 216
  },
  Text_277_168: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_169: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 234
  },
  Text_277_169: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_170: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 252
  },
  Text_277_170: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_171: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 270
  },
  Text_277_171: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_172: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 288
  },
  Text_277_172: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_173: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 306
  },
  Text_277_173: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_174: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 324
  },
  Text_277_174: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_175: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 342
  },
  Text_277_175: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_176: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 360
  },
  Text_277_176: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_177: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 378
  },
  Text_277_177: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_178: {
    width: wp("2.898550724637681%"),
    minWidth: wp("2.898550724637681%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 396
  },
  Text_277_178: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_179: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 414
  },
  Text_277_179: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_180: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 432
  },
  Text_277_180: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_277_181: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 450
  },
  Text_277_181: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_313_267: {
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
  View_313_268: {
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
  View_313_269: {
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
  View_313_270: {
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
  View_313_271: {
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
  ImageBackground_313_272: {
    width: wp("0.3220612012245805%"),
    height: 4,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555557%")
  },
  View_313_273: {
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
  View_313_274: {
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
  ImageBackground_313_275: {
    width: wp("3.703703626918332%"),
    height: 11,
    top: 1.33331298828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6441125547252398%")
  },
  View_313_279: {
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
  ImageBackground_313_280: {
    width: wp("4.1062801932367154%"),
    height: 10.666666984558105,
    top: 0.66668701171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16102076728562054%")
  },
  View_313_285: {
    width: wp("13.043478260869565%"),
    minWidth: wp("13.043478260869565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 12
  },
  Text_313_285: {
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
