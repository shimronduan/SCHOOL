import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const NewsCard = (props) => {
  return (
    <Card style={{ width: "18rem", padding: "10px" }}>
      <Card.Img variant="top" src={props.imgUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.body}</Card.Text>
        <Button variant="link">Read more...</Button>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
