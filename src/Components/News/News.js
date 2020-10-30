import React from "react";
import CardColumns from "react-bootstrap/CardColumns";
import NewsCard from "./NewsCard/NewsCard";
import newsimg from "../../Images/News/newsCard.jpg";
import CardGroup from "react-bootstrap/CardGroup";
const News = () => {
  return (
    <div>
      <CardColumns style={{ margin: "10px" }}>
        <NewsCard
          imgUrl={newsimg}
          title={"Title"}
          body={
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
        />
        <NewsCard
          imgUrl={newsimg}
          title={"Title"}
          body={
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
        />
        <NewsCard
          imgUrl={newsimg}
          title={"Title"}
          body={
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
        />
        <NewsCard
          imgUrl={newsimg}
          title={"Title"}
          body={
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
        />
      </CardColumns>
    </div>
  );
};

export default News;
