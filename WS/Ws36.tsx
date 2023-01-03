import {View} from 'react-native';
import React, {useRef} from 'react';
import KMap from './K_Map/KMap';
import Direction from './K_Map/Direction';

export const Ws36 = ()=>{
  const webviewRef:any = useRef();
  return (    
    <View style={{flex: 1}}>
      <KMap webviewRef={webviewRef}/>
      <Direction webviewRef={webviewRef}></Direction>
    </View>
  );
}
