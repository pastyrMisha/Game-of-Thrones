import React, { Component } from 'react';
import './itemList.css';
import withData from '../withData/withData';

class ItemList extends Component {
    
        renderItems(arr) {
            return arr.map((item) => {
                const {id} = item;
            
                const label = this.props.renderItem(item);

                return (
                    <li
                        key={id}
                        className="list-group-item"
                        onClick={() => this.props.onItemSelected(id)}>
                        {label}
                    </li>
                )
            })
        }

        render() {

            const {data} = this.props;
    
            const items = this.renderItems(data);

            return (
                
                <ul className="item-list list-group">
                   {items}
                </ul>
            );
        }
    }


export default withData(ItemList);