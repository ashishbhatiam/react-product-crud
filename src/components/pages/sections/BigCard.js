import React from 'react';
import {  Image,  Container,  Header, Card, Message } from 'semantic-ui-react';
import { Rating } from 'semantic-ui-react'

const BigCard = props => (

<Container text >
	<div title={props.description}>
    	<Image bordered rounded centered src={props.imageURL} style={{maxHeight: '500px',border: 'none' }}/>
        <Header as='h3' style={{ fontSize: '1.5em', marginBottom: '0'}} >{props.title}.</Header>    
        <Rating defaultRating={props.rating.rate} maxRating={5} icon='star' size='huge' disabled style={{margin: '0.5rem 0 1rem 0', display: 'inline-block',}}/>
        <Message
        info
        content={`${props.rating.count} reviews`}
        style={{padding:'0', marginLeft: '1rem', display: 'inline-block',boxShadow : 'unset',  fontSize: '14px',}}
        />
        <div style={{ fontStyle: 'bold', marginBottom: '1rem'}}>{props.category}</div>
        <p > {props.description} </p>  
        <Card.Meta>${props.price}</Card.Meta>    
	</div>
</Container>
)


export default BigCard;