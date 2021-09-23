import React, { Component } from 'react';
import gotService from '../../services/gotService';
import ItemDetails, { Field } from '../itemDetails';

export default class CharacterItem extends Component {

    gotService = new gotService();

    render () {
        return (
            <ItemDetails 
            itemId={this.props.charId}
            getData={this.gotService.getCharacter}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )
    }
}
