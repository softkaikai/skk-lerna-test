import React, { useState } from 'react';

export default function Main(props) {
    const [num, setNum] = useState(0);

    return (
        <div>
            <div>
                <span onClick={() => setNum(num - 1)}>---</span>
                <span onClick={() => setNum(num + 1)}>+++</span>
            </div>
            <div>
                num is: {num}
            </div>
        </div>
    )
}
