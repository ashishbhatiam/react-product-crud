import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import { Card, Icon } from "semantic-ui-react";

function CustomModal(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      style={{ position: "relative" }}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      dimmer={"blurring"}
      trigger={
        <Button animated color="red">
          <Button.Content visible>Delete</Button.Content>
          <Button.Content hidden>
            <Icon name="delete" />
          </Button.Content>
        </Button>
      }
    >
      <Modal.Header>Delete</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={props.image} wrapped />
        <Modal.Description>
          <Header>{props.title}.</Header>
          <p>{props.description}</p>
          <Header as="h3" style={{ fontSize: "1.5em", marginTop: "3rem" }}>
            Are you Sure ? You want to delete this Card?
          </Header>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions style={{marginTop:'3rem'}}>
        <Button color="green" onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, I am Sure"
          labelPosition="right"
          icon="checkmark"
          color="red"
          onClick={() => (setOpen(false), props.deleteProduct(props.id))}
        />
      </Modal.Actions>
    </Modal>
  );
}

export default CustomModal;
