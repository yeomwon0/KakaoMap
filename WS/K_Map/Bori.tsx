import { useEffect, useState } from "react";
import { Dimensions, Image, TouchableOpacity, View } from "react-native";

function Bori({state}:any){
    const [_state, setState] = useState(false);
    const [bori_state, setbori_state] = useState(false);

    const onPress = () => {
        setState(current => !current);
    };
    
    useEffect(() => {
        setbori_state(current => !current)
    }, [state])

    return(
        <>
            {_state ? (
                <View style={{position: 'absolute', bottom: bori_state?(80):(120), right: 30}}>
                <TouchableOpacity onPress={onPress}>
                    <Image
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 100,
                        overflow: 'visible',
                        borderWidth: 3,
                    }}
                    source={{
                        uri: 'https://mblogthumb-phinf.pstatic.net/MjAyMDAzMTFfMjA0/MDAxNTgzOTM3Mzk3MDA1.B-rFBKnmSITMMkIl5aOKQReek5aujFbnruF4-TbKV-og.-eZyD1GnuUaxwoQfiU-ZJM5N3h8j45-cHe-9z3bytb8g.JPEG.ultrainsup/download.jpg?type=w800',
                    }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress}>
                    <Image
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 100,
                        overflow: 'visible',
                        borderWidth: 3,
                        marginTop: 10,
                    }}
                    source={{
                        uri: 'https://t1.daumcdn.net/cfile/tistory/2645B13A5696811B03',
                    }}
                    />
                </TouchableOpacity>
                </View>
            ) : null}
            <View style={{position: 'absolute', bottom: bori_state?(10):(50), right: 30}}>
                <TouchableOpacity onPress={onPress}>
                <Image
                    style={{
                    width: 60,
                    height: 60,
                    borderRadius: 100,
                    overflow: 'visible',
                    borderWidth: 3,
                    }}
                    source={{
                    uri: 'https://t1.daumcdn.net/cfile/tistory/99BB433359E8C2BF32',
                    }}
                />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Bori;