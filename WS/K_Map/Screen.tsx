import React, {useEffect, useState} from 'react';
import {
  Modal,
  Text,
  Pressable,
  View,
  ImageBackground,
  Linking,
} from 'react-native';
import {URL} from '../Ws36';
import {modalstyles} from './styles/modalstyles';

export const Screen = ({_state, _name}: any) => {
  const [state, setState] = useState<boolean>(true);
  const [data, setData] = useState<any[]>([]);
  const [list, setList] = useState<any[]>([]);
  const [text, setText] = useState<any[]>([]);
  const [description, setDescription] = useState<any[]>([]);
  const name: string = _name;

  useEffect(() => {
    setState(current => !current);
  }, [_state]);

  useEffect(() => {
    showdata();
  }, [state]);

  const onPress = () => {
    setState(current => !current);
  };

  useEffect(() => {
    loadList();
  }, []);

  const loadList = () => {
    fetch(`${URL}/borimap`)
      .then(response => response.json())
      .then(data => {
        const getData = data;
        setList(getData);
      });
  };

  const showdata = () => {
    for (let d of list) {
      if (d.name === name) {
        setData(d);
        setText(d.name.split(" "));
        const str = d.description;
        setDescription(str.split('@'));
      }
    }
  };

  const Screen_View = (a: number) => {
    const desc_arr = description[a].split('#');
    return (
      <View key={a} style={{flexDirection: 'row'}}>
        <Text style={modalstyles.subunitText}>- {desc_arr[0]}</Text>
        <View>{description_view(desc_arr)}</View>
      </View>
    );
  };

  const description_view = (desc_arr: Array<String>) => {
    let d_arr = [];
    for (let i = 1; i < desc_arr.length; i++) {
      const tel_arr = desc_arr[i].split('$')
      d_arr.push(
        <View key={i} style={{flexDirection:'row'}}>
          <Text style={modalstyles.description_text}>{tel_arr[0]}</Text>
          <Pressable
            style={modalstyles.phonbtn}
            onPress={() => Linking.openURL(`tel:042${tel_arr[1]}`)}>
            <Text style={{color: '#8181F7'}}>{tel_arr[1]}</Text>
          </Pressable>
        </View>
      );
    }
    return d_arr;
  };

  function Screen() {
    let arr: any = [];
    for (let ab = 0; ab < description.length; ab++) {
      arr.push(Screen_View(ab));
    }
    return arr;
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
                      <Text style={modalstyles.largeUnitText}>
                        {text[0]}
                      </Text>
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
                    <Text style={modalstyles.largeUnitTextnum}>
                      {text[1]}
                    </Text>
                    <Text style={modalstyles.largeUnitText2}>
                      {data.address}
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                  }}>
                  <Text style={{color:"black"}}>______________________________________________</Text>
                </Text>
                  <Text style={modalstyles.subunitText2}>
                    층별 시설 및 학과
                  </Text>
                  {/* ------------------------------------------------------------------------------------------- */}
                  {Screen()}
                  {/* ------------------------------------------------------------------------------------------- */}
              </View>
            </View>
          </Modal>
        </View>
      ) : null}
    </>
  );
};
