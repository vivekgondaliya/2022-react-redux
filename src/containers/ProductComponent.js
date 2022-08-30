import React from "react";
import {useSelector} from "react-redux";
import { Card, Icon, Image } from 'semantic-ui-react';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    //const {id, title, category} = products[0];
    return (
        <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
            <Card.Header>Vivek</Card.Header>
            <Card.Meta>
                <span className='date'>Programmer</span>
            </Card.Meta>
            <Card.Description>
                {/* Matthew is a musician living in Nashville. */}
            </Card.Description>
            </Card.Content>
            {/* <Card.Content extra>
            <a>
                <Icon name='user' />
                22 Friends
            </a>
            </Card.Content> */}
        </Card>
    )
}

export default ProductComponent;