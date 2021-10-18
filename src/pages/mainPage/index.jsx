import axios from "axios";
import React, { useEffect, useState } from "react";
import { Body, CardsBox, CardsWrapper, Title } from "./styles";

function MainPage() {
  const [posts, setPosts] = useState([]);

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch((err)=>{
          console.log("error",err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CardsWrapper>
      {posts.map((value, index) => (
        <CardsBox key={value.id}>
          <Title> Name: {value.name}</Title>
          <Body> Username: {value.username}</Body>
          <Body> Email adress: {value.email}</Body>
          <Body> Street: {value.address.street}</Body>
          <Body> Suit: {value.address.suite}</Body>
          <Body> City: {value.address.city}</Body>
          <Body> Zipcode: {value.address.zipcode}</Body>
          <Body> LAT:  {value.address.geo.lat}</Body>
          <Body> LNG:  {value.address.geo.lng}</Body>
          <Body> Number: {value.phone}</Body>
          <Body> Website: {value.website}</Body>
          <Body> Company Name: {value.company.name}</Body>
          <Body> CatchPhrase: {value.company.catchPhrase}</Body>
          <Body> Company bs: {value.company.bs}</Body>
        </CardsBox>
      ))}
    </CardsWrapper>
  );
}
// https://jsonplaceholder.typicode.com/posts
export default MainPage;
