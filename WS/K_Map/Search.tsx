import React, { useEffect, useState } from "react";
import { Button, Dimensions, StyleSheet } from "react-native";
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import Icon from 'react-native-vector-icons/AntDesign';
import { URL } from "../Ws36";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

function Search({webviewRef, state}:any )
{
    const [list, setList] = useState<any[]>([]);
    const [firstlist, setFirstList] = useState<any[]>([]);
    const [_state, setState] = useState<boolean>(true);
    const [data, setData] = useState<any[]>([]);
    const [text, setText] = useState<string>('');
    
    const searchlist:any[] = []
    useEffect(() => {
        searchMessage();    
    }, []);

    useEffect(() => {
        setState(current => !current)
    }, [state])

    const searchMessage = () => {    
    fetch(`${URL}/borimap`)
    .then((response) => response.json())
    .then((data) => {
        const getData = data
        for(let i of getData)
        {   
            const data = {
                id : i.id,
                title : i.name,
            }
            firstlist.push(data);
        }        
        setList(firstlist);
        setData(getData);
    })
};

    const changetext = (temp:string) => {
        setText(temp)
        keywordSearch(temp);
    }
    const set= () => {
        setList(firstlist)
    }

    const keywordSearch = (temp:string) => {
        try
        {
            for(let i of data){
                if(i.tag.includes(temp))
                {
                    const data = {
                        id : i.id,
                        title : i.name,
                    }
                    searchlist.push(data)
                }
            }
            setList(searchlist);
        }
        catch (error)
        {
        }
    }

    const sendlatlng = async (temp:any) => {
        try
        {
            const latlng = new Array();
            
            for(let i of data){
                if(temp.id === i.id)
                {                
                    const _data = {
                        picket : 'location'
                    }
                    latlng.push(_data)
                    latlng.push(i)
                }
            }
            const sendData = JSON.stringify(latlng);
            await webviewRef.current.postMessage(sendData);
        }
        catch(error)
        {
        }
      };

    return(
        <>
        {
        _state ? (
            <AutocompleteDropdown                
                suggestionsListContainerStyle = {{ opacity: 0.5}}
                textInputProps ={{
                    placeholder: '학과명이나 건물정보를 입력해주세요',
                }}
                ChevronIconComponent={<Icon name="down" size={20} color="black" />}
                ClearIconComponent={<Icon name="close" size={20} color="black" />}
                emptyResultText="오늘 점심 뭐 먹어?"
                onClear={() => set()}
                showChevron = {true}
                closeOnBlur={true}
                closeOnSubmit={true}
                clearOnFocus={true}
                useFilter={false}
                onOpenSuggestionsList={() => set()}
                onChangeText={text => changetext(text)}
                onSelectItem = {item => sendlatlng(item)}
                onSubmit={() => {console.log(text)}}
                dataSet={list}
            />
            ): null
        }
        </>
    )
}
export default Search;

