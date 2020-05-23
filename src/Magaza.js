import {ReplaySubject} from "rxjs";
import axios from 'axios';

export const saatSubject = new ReplaySubject(1);

export function saatGuncelle() {
    axios.get('http://worldtimeapi.org/api/timezone/Europe/Istanbul')
        .then(({data}) => {
            saatSubject.next(data.datetime);
        });
}

saatGuncelle();
