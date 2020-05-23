import React, {useEffect, useState} from "react";
import useStateWithLocalStorage from "./useStateWithLocalStorage";
import {Button} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import { Select } from 'antd';

const { Option } = Select;

export default function AltSayfa(props) {

    const [sayi, setSayi] = useStateWithLocalStorage(0, 'sayi');
    const [deger, setDeger] = useState(null);
    const [secenekler, ] = useState([{id: 1, name: 'Option-1'},{id: 2, name: 'Option-2'},{id: 3, name: 'Option-3'},]);

    useEffect(() => {
       console.log('AltSayfa yüklendi');

       return () => console.log('AltSayfa kalkıyor');
    }, []);

    return (
        <>
            <div>
                Alt sayfa
            </div>
            <div>
                <Button type="primary" shape="circle" icon={<SearchOutlined />} />
            </div>
            <div>
                <Select
                    showSearch
                    allowClear
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={setDeger}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }>
                    {secenekler.map(val => <Option key={val.id} value={val.id}>{val.name}</Option>)}
                </Select>
            </div>
            <div>
                {deger}
            </div>
            <div>
                <button onClick={() => setSayi(sayi + 1)} >Alt Sayfa Artır {sayi}</button>
            </div>
        </>
    );

}
