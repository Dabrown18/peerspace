import React, {FC, useState, useContext} from 'react';
import {
  FlatList,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  Text,
} from 'react-native';
import PicSumImage from './PicSumImage';
import {HomeViewProps} from '../interfaces';
import { WebView } from 'react-native-webview';
import {styles} from '../styles';
import globalStyles from '../../../utils/globalStyles';

const HomeView: FC<HomeViewProps> = ({data}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalUrl, setModalUrl] = useState('');

  const openModal = (url: string) => {
    setModalVisible(!modalVisible);
    setModalUrl(url);
  };

  return (
    <SafeAreaView>
      {data?.length > 0 && (
        <>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return <PicSumImage data={item} openModal={openModal} />;
            }}
            keyExtractor={item => item.id}
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{color: globalStyles.COLORS.WHITE}}>Close</Text>
            </TouchableOpacity>
            <WebView
              source={{ uri: modalUrl }}
            />
          </Modal>
        </>
      )}
    </SafeAreaView>
  );
};

export default HomeView;
