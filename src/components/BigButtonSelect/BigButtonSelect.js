import React, { Component } from 'react';
import "./BigButtonSelect.css";
import { Button } from 'reactstrap';


class BigButtonSelect extends Component {

    render() {

        const userItems = this.props.items.map((item) => (

            <Button key={item} className="bigButton" size="lg" outline color="light">{item}</Button>
        ))

        return (

            <div className="bigButtonCardsDiv">
                {userItems}
            </div>

        );
    }
}

export default BigButtonSelect;