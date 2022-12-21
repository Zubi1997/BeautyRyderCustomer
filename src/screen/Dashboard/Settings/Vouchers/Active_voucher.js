import React,{useState} from 'react'
import { FlatList, ScrollView , TouchableOpacity, View ,TextInput, Text , StyleSheet ,Dimensions, Image, SafeAreaView } from 'react-native'
import colors from '../../../../assets/colors';
import Divider from '../../../../Components/Divider';
import Text_normal from '../../../../Components/Text_components/Text_normal';
import Text_sub_heading from '../../../../Components/Text_components/Text_sub_heading';

// import Carousel, { Pagination } from 'react-native-snap-carousel';
var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height


function Active_voucher({navigation}) {
    const [phone, set_phone] = useState('');
    const [code, setCode] = useState("");
    const [activeSlide, setactiveSlide] = useState([]);

    const activeArray = [
      {
        id: 1,
        text1: '50% OFF Your First Shop Order!',
        text2: 'v4weq9e',
        text3: 'Help',
        text4: 'Help',
        subtext: 'Legal issue',
        onPress: () => {}
      },
      {
        id: 2,
        text1: '50% OFF Your First Shop Order!',
        text2: 'v4weq9e',
        text3: 'Help',
        text4: 'Help',
        subtext: 'Legal issue',
        onPress: () => {}
      },
      {
        id: 3,
        text1: '50% OFF Your First Shop Order!',
        text2: 'v4weq9e',
        text3: 'Help',
        text4: 'Help',
        subtext: 'Legal issue',
        onPress: () => {}
      },
      {
        id: 4,
        text1: '50% OFF Your First Shop Order!',
        text2: 'v4weq9e',
        text3: 'Help',
        text4: 'Help',
        subtext: 'Legal issue',
        onPress: () => {}
      },
      {
        id: 5,
        text1: '50% OFF Your First Shop Order!',
        text2: 'v4weq9e',
        text3: 'Help',
        text4: 'Help',
        subtext: 'Legal issue',
        onPress: () => {}
      },
      {
        id: 6,
        text1: '50% OFF Your First Shop Order!',
        text2: 'v4weq9e',
        text3: 'Help',
        text4: 'Help',
        subtext: 'Legal issue',
        onPress: () => {}
      },
      {
        id: 7,
        text1: '50% OFF Your First Shop Order!',
        text2: 'v4weq9e',
        text3: 'Help',
        text4: 'Help',
        subtext: 'Legal issue',
        onPress: () => {}
      },
      {
        id: 8,
        text1: '50% OFF Your First Shop Order!',
        text2: 'v4weq9e',
        text3: 'Help',
        text4: 'Help',
        subtext: 'Legal issue',
        onPress: () => {}
      },
      {
        id: 9,
        text1: '50% OFF Your First Shop Order!',
        text2: 'v4weq9e',
        text3: 'Help',
        text4: 'Help',
        subtext: 'Legal issue',
        onPress: () => {}
      },
    ];
 
    return (
        <SafeAreaView style={styles.cont} > 

            <ScrollView style={styles.list}>
            {activeArray.map((item,index)=>(
              <TouchableOpacity onPress={item.onPress}  key={index} style={styles.single_list}>
                <View style={{padding:10}}>
                  <View style={styles.view1}>
                    <Text_sub_heading style={styles.subtxt_black} text={item.text1}/>
                    <Text_sub_heading style={styles.subtxt} text={'50%'}/>
                  </View>
                  <View style={styles.view1}>
                    <Text_sub_heading style={styles.subtxt_primary} text={'v4weq9e'}/>
                    <View style={{padding:3,paddingHorizontal:5,borderRadius:20,borderWidth:1,borderColor:colors.primary}}>
                      <Text_sub_heading style={[styles.subtxt_primary,{fontSize:10}]} text={'Archive'}/>
                    </View>
                  </View>
                  <View style={styles.view1}>
                    <Text_sub_heading style={styles.subtxt} text={'$:02.24 minim'}/>
                    <Text_sub_heading style={styles.subtxt} text={'Expired on 15 Nov 2022'}/>
                  </View>
                </View>
                <Divider height={1} width={'100%'} />
                <View style={{marginVertical:5,paddingHorizontal:10}}>
                  <View style={styles.view1}>
                    <Text_sub_heading style={styles.subtxt} text={'Order Number: 25487'}/>
                    <Text_sub_heading style={styles.subtxt_primary} text={'T&C'}/>
                  </View>
                </View>
                {/* <Text style={styles.list_name}>{item.text}</Text> */}
              </TouchableOpacity>
            ))}
            </ScrollView>
           

        </SafeAreaView>
    )
}
export default Active_voucher

const styles = StyleSheet.create({
  
    cont: {
      flex:1,
    //   alignItems:'center',
      backgroundColor:'#FFFFFF',
      marginTop:10
    },
    subtxt:{
      fontSize:12,
      color:colors.inpt
    },
    subtxt_black:{
      fontSize:12,
      color:colors.black
    },
    subtxt_primary:{
      fontSize:12,
      color:colors.primary
    },
    list:{
      flex:1,
      backgroundColor:colors.grey_list
    },
    single_list:{
      backgroundColor:colors.white,
      marginHorizontal:10,
      marginVertical:5,
      borderRadius:10,
    },
    view1:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginVertical:3,
      alignItems:'center'
    },
});
  