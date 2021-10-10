import React from 'react';
import {  Button, Grid  } from 'semantic-ui-react';

const CustomButton = props => (

<div style={{marginTop: '20px'}}>
    <Grid container stackable>      
        <Grid.Column textAlign='center'>
            <Button as='button' href={props.url} className="ui button customButton" size='huge'>
                Edit Card
            </Button>
        </Grid.Column>
    </Grid>
    </div>
)

export default CustomButton;