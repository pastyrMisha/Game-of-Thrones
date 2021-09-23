import React, {Component} from 'react';
import gotService from '../../services/gotService';
import ItemDetails, {Field} from '../itemDetails';

export default class HouseItem extends Component {

    gotService = new gotService();
    
    render () {
        return (
            <ItemDetails 
            itemId={this.props.houseId}
            getData={this.gotService.getHouse}>
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='ancestralWeapons' label='Ancestral weapons'/>
            </ItemDetails>
        )
    }
}
