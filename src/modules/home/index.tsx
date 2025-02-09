import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import {Colors} from '../../utils/colors';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import MaterialIconsIcons from 'react-native-vector-icons/MaterialIcons';
import Fonts from '../../utils/fonts';
import VerticalSpace from '../../components/VerticalSpace';
import SongCardHorizontal from '../../components/SongCardHorizontal';
import FastImage from 'react-native-fast-image';
import axios from 'axios';

const songsData = [
  {
    name: 'Jeene Laga Hu',
    description: 'A soulful romantic song.',
    image: require('./../../assets/songImg1.png'),
    time: '2:30',
    videoId: '12323',
    artist: 'Arijit Singh',
    isPlay: false,
    isDeleted: false,
  },
  {
    name: 'Tum Hi Ho',
    description: 'A heart-touching melody.',
    image: require('./../../assets/songImg2.png'),
    time: '3:45',
    videoId: '45678',
    artist: 'Arijit Singh',
    isPlay: false,
    isDeleted: false,
  },
  {
    name: 'Kesariya',
    description: 'A vibrant romantic track.',
    image: require('./../../assets/songImg3.png'),
    time: '4:12',
    videoId: '78910',
    artist: 'Arijit Singh',
    isPlay: false,
    isDeleted: false,
  },
  {
    name: 'Raabta',
    description: 'A song that connects hearts.',
    image: require('./../../assets/songImg4.png'),
    time: '3:10',
    videoId: '11223',
    artist: 'Arijit Singh',
    isPlay: false,
    isDeleted: false,
  },
  {
    name: 'Shayad',
    description: 'A song of hope and love.',
    image: require('./../../assets/songImg5.png'),
    time: '3:55',
    videoId: '33445',
    artist: 'Arijit Singh',
    isPlay: false,
    isDeleted: false,
  },
];

const HomeScreen = ({navigation}) => {
  const [popandTrendData, setPopandTrendData] = useState([]);

  const [featuredData,setFeaturedData] = useState([]);

  useEffect(()=>{
    fetchPopularData()
    getFeaturedList()
    
    
  },[])


  const fetchPopularData = async () => {
    try {
      const response = await axios.get("http://musily.xyz/music/popular");
      console.log("popler fetchPopularData: " + JSON.stringify(response));

      createPopularList(response?.data);
    } catch (error) {
      console.log("popler Error: " + JSON.stringify(error));
    }
  };

  const createPopularList = (data) => {
    let revisedData = [];
    for (var i = 0; i < data.length; i++) {
      let dataItem = data[i];
      let obj = {
        name: dataItem?.title,
        description: "",
        image: "https://img.youtube.com/vi/" + dataItem?.id + "/mqdefault.jpg",
        time: dataItem?.duration,
        videoId: dataItem?.id,
        artist: dataItem?.channel,
        isPlay: false,
        isDeleted: false,
      };
      revisedData.push(obj);
    }
    setPopandTrendData(revisedData);
  };

  const getFeaturedList = () => {
    axios
      .get("http://musily.xyz/music/trending")
      .then(({ data }) => {
        createFeaturedList(data);
      })
      .catch((error) => console.log("featurs Error: " + JSON.stringify(error)));
  };

  const createFeaturedList = (data) => {
    let revisedData = [];
    for (var i = 0; i < data.length; i++) {
      let dataItem = data[i];
      let obj = {
        name: dataItem?.title,
        description: "",
        image: "https://img.youtube.com/vi/" + dataItem?.id + "/mqdefault.jpg",
        time: dataItem?.duration,
        videoId: dataItem?.id,
        artist: dataItem?.channel,
        isPlay: false,
        isDeleted: false,
      };
      revisedData.push(obj);
    }
    setFeaturedData(revisedData)

  };


  const SectionCardComponent = ({titleText}) => {
    return (
      <>
        <VerticalSpace top={30} />

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{titleText}</Text>
          <TouchableOpacity onPress={() => {}}>
            <MaterialIconsIcons
              name="arrow-forward-ios"
              size={16}
              color={Colors.MINT_GREEN}
            />
          </TouchableOpacity>
        </View>
        <VerticalSpace top={20} />
      </>
    );
  };

  const PopularAndTrending = () => {
    return (
      <View>
        <FlatList
          data={popandTrendData}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item}) => {
            console.log(JSON.stringify(item));
            return (
              <SongCardHorizontal
                item={item}
                onPress={() => {
                  // emitter.emit("open-player", {
                  //   item: item,
                  //   playlist: popandTrendData,
                  // });
                }}
              />
            );
          }}
        />
      </View>
    );
  };
  const FeaturedSongs = () => {
    return (
      <View>
        <FlatList
          data={featuredData}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item}) => {
            console.log(JSON.stringify(item));
            return (
              <SongCardHorizontal
                item={item}
                onPress={() => {
                  // emitter.emit("open-player", {
                  //   item: item,
                  //   playlist: popandTrendData,
                  // });
                }}
              />
            );
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Alpha Music</Text>
        <TouchableOpacity onPress={() => {}}>
          <AntDesignIcons name="search1" size={24} color={Colors.MINT_GREEN} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <VerticalSpace top={20} />

        <View style={{alignItems: 'center', marginStart: 5}}>
          <FlatList
            contentContainerStyle={{alignItems: 'center'}}
            data={popandTrendData.slice(0, 4)}
            numColumns={2}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={{
                    backgroundColor: '#404040',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '46.5%',
                    height: 45,
                    marginHorizontal: 6,
                    marginVertical: 8,
                    borderRadius: 2,
                    gap: 7,
                  }}>
                  <FastImage
                    source={{uri:item.image}}
                    style={{
                      width: 50,
                      height: '100%',
                      borderRadius:3
                    }}
                  />
                  <View style={{width:'90%'}}>
                    <Text numberOfLines={1} style={{color: Colors.White,width:'75%'}}>{item.name}</Text>
                    <Text numberOfLines={1} style={{color: '#b3b3b3'}}>{item.artist}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <SectionCardComponent titleText="Recently Played" />
        <FeaturedSongs />

        <SectionCardComponent titleText="Populer and Tranding" />
        <PopularAndTrending />

        <SectionCardComponent titleText="Featured" />
        <FeaturedSongs />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK_CHARCOAL,
  },
  headerContainer: {
    flexDirection: 'row',
    width: '93%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: Colors.MINT_GREEN,
    fontFamily: Fonts.Gilroy_Bold,
    fontSize: 20,
  },

  arrowButton: {
    transform: [{rotate: '180deg'}],
    paddingRight: 50,
    paddingVertical: 10,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '92%',
    alignSelf: 'center',
    marginBottom: 15,
  },
  welcomeText: {
    fontSize: 24,
    color: '#ffffff',

    fontWeight: '700',
  },
  divider: {
    height: 1,
    backgroundColor: 'red',
  },
});

export default HomeScreen;
