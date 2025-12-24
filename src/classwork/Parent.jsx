/**
 * Создайте родительский компонент Parent и дочерний компонент Child. Дочерний компонент должен принимать свойство data.
В родительском компоненте Parent добавьте кнопку, которая меняет значение свойства data (например, с 10 на 20). В дочернем компоненте Child используйте метод жизненного цикла componentDidUpdate(prevProps) для вывода в консоль сообщения, когда свойство data изменилось.
 */

import React from 'react';
import {useState, useEffect} from 'react';

export default function Parent({min = 10, max = 20 }) {
    const [data, setData] = useState(10);

    
    const handleChangeData = () => {
        setData(data === min ? max : min);
    };
    return (
        <div>
            <button onClick={handleChangeData}>Change Data</button>
            <Child data={data} />
        </div>
    );
}

class Child extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            console.log(`Data changed to: ${this.props.data}`);
        }
    }
    
    render() {
        return (
            <></>
        );
    }
}

/*----------------------Я сперва попыталась через хук useEffect, но он чуть чуть иначе работает------------------------- */

// function Child({data}) {
//     useEffect(() => {
//         console.log(`Data changed to: ${data}`)
//     }, [data]); // использую хук в ф-циональном вместо componentDidUpdate в классовом
//     //из минусов он срабатывает и при первом рендере и надо скорее всего через useRef добавить проверку первый ли это рендер? тогда я смогу изменить в дочернем компоненте полученное из родительского компонента значение isFirst и тогда выводить только после первого рендера, я думаю

// }