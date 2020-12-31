import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function Categories() {
    return (
        <Container className="d-flex">
            
        <ButtonGroup vertical>
        <Button className="btn-secondary">Button</Button>
        <Button className="btn-secondary">Button</Button>
        <Button className="btn-secondary">Button</Button>
        <Button className="btn-secondary">Button</Button>
        <Button className="btn-secondary">Button</Button>
        <Button className="btn-secondary">Button</Button>
        <Button className="btn-secondary">Button</Button>
        <Button className="btn-secondary">Button</Button>
      </ButtonGroup>
      </Container>
    )
}
export default Categories;