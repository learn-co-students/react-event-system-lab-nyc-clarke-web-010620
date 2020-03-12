import React from 'react';

class Keypad extends React.Component {

    specialMsg() {
        console.log('Entering password...')
    }

    render() {
        return (
            <div>
                <input type="password" onKeyUp={() => this.specialMsg()} />
            </div>
        )
    }
}

export default Keypad 