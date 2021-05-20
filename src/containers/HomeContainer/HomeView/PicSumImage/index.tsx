import React, {FC} from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import {styles} from '../../styles';
import {PicSumImageProps} from '../../interfaces';

const PicSumImage: FC<PicSumImageProps> = ({data, openModal}) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => openModal(data.url)}
    >
      <ImageBackground
        source={{ uri: data.download_url }}
        style={{
          height: 200,
          borderRadius: 15,
        }}
      >
        <View style={styles.byLineContainer}>
          <Text style={styles.byline}>{data.author}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default PicSumImage;
