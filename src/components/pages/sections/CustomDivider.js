import React from 'react';
import { Divider } from 'semantic-ui-react';


const CustomDivider = props => (

    <div>
        <Divider as='h4'
                className='header'
                id={props.name}
                horizontal
                style={{ 
                    textTransform: 'uppercase',
                    margin: '4em 0'
                }} >
                {props.name}
        </Divider>
    </div>
)

export default CustomDivider;