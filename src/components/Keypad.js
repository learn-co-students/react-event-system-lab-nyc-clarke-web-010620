
import React from 'react';



class KeyPad extends React.Component {

    checkChange = () => {
        console.log('Entering password...')
    }


    render(){
        return(
            <div>
                <input onKeyUp={this.checkChange} type="password" value=""></input>
            </div>
        )
    }

}

export default KeyPad