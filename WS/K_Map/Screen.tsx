import React, {useEffect, useState} from 'react';
import {Modal, Text, Pressable, View, ImageBackground, Linking} from 'react-native';
import { modalstyles } from './styles/modalstyles';

export const Screen = ({_state, _name}: any) => {
  const [state, setState] = useState<boolean>(true);
  const [data, setData] = useState<any[]>([]);
  const [list, setList] = useState<any[]>([]);
  const [description, setDescription] = useState<any[]>([]);
  const name:string = _name;

  const num1: string = '01092501850';

  useEffect(() => {
    setState(current => !current);
  }, [_state]);

  useEffect(() => {
    showdata();
  }, [state])

  const onPress = () => {
    setState(current => !current);
  };

  useEffect(() => {
    loadList();
  }, []);

  const loadList = () => {
    fetch(
      'https://bc1b-2001-2d8-6885-ea72-c09a-4668-8b28-3036.jp.ngrok.io/borimap',
    )
      .then(response => response.json())
      .then(data => {
        const getData = data;
        setList(getData);
      });
  };

  const showdata = () => {
    for(let d of list)
    {
        if(d.name === name)
        {
            setData(d);
            const str = d.description;
            setDescription(str.split("@"))
        }
    }
  }

  return (
    <>
      {state ? (
        <View style={modalstyles.centeredView}>
          <Modal
            animationType="none"
            presentationStyle="overFullScreen"
            transparent={true}
            visible={state}>
            <View style={modalstyles.centeredView}>
              {/* 모달을 감싸기위한 뷰 */}
              <View style={modalstyles.modalView}>
                <View style={modalstyles.modalTopView}>
                  <View style={modalstyles.buttonOutView}>
                    <View style={{alignItems: 'flex-start', flex: 1}}>
                      <Text style={modalstyles.largeUnitText}>{_name}</Text>
                    </View>
                    <View style={{alignItems: 'flex-end', flex: 1}}>
                      <Pressable
                        style={[modalstyles.buttonout]}
                        onPress={() => onPress()}>
                        <Text style={modalstyles.textStyle}>✖️</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <ImageBackground
                    source={{uri: data.imgName}}
                    resizeMode="stretch"
                    style={modalstyles.image}
                  />
                  <View>
                    <Text style={modalstyles.largeUnitTextnum}>{data.name.split(" ")[0]}</Text>
                    {/* <Text style={modalstyles.largeUnitTextnum}>{data.name}</Text> */}
                    <Text style={modalstyles.largeUnitText2}>{data.address}</Text>
                    <Text style={modalstyles.largeUnitText3}>
                      -자동증명 발급기
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                  }}>
                  _____________________________________________
                </Text>
                <Text style={modalstyles.subunitText2}>층별 및 연락처</Text>
                {/* ------------------------------------------------------------------------------------------- */}
                <View style={{flexDirection: 'row'}}>
                  <Text style={modalstyles.subunitText}>-{description[0]}</Text>
                  <Pressable
                    style={modalstyles.phonbtn}
                    onPress={() => Linking.openURL(`tel:${num1}`)}>
                    <Text style={{color: 'white'}}>{num1}</Text>
                  </Pressable>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={modalstyles.subunitText}>-{description[1]}</Text>
                  <Pressable
                    style={modalstyles.phonbtn}
                    onPress={() => Linking.openURL(`tel:${num1}`)}>
                    <Text style={{color: 'white'}}>{num1}</Text>
                  </Pressable>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={modalstyles.subunitText}>-{description[2]}</Text>
                  <Pressable
                    style={modalstyles.phonbtn}
                    onPress={() => Linking.openURL(`tel:${num1}`)}>
                    <Text style={{color: 'white'}}>{num1}</Text>
                  </Pressable>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={modalstyles.subunitText}>-{description[3]}</Text>
                  <Pressable
                    style={modalstyles.phonbtn}
                    onPress={() => Linking.openURL(`tel:${num1}`)}>
                    <Text style={{color: 'white'}}>{num1}</Text>
                  </Pressable>
                </View>
                {/* ------------------------------------------------------------------------------------------- */}
              </View>
            </View>
          </Modal>
        </View>
      ) : null}
    </>
  );
};

