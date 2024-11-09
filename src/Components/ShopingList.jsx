import { useState, useEffect } from "react";
import { httpGet } from "./http";
import { ColorRing } from "react-loader-spinner";
import moment from "moment";
import styled from "styled-components";
import "./ShopingList.css";
import Img from "./Img";
import he from "he";

const apiPath =
  "https://storage.googleapis.com/marketplace-prod-7728-shop-cdn-e5e2/interview/data.json";

const StyledContainer = styled.div`
  margin: 5%;
  padding: 3%;
  width: 80%;
  background-color: lightgrey;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Table = styled.table`
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
`;

const Caption = styled.caption`
  caption-side: bottom;
  padding: 10px;
  font-weight: bold;
`;

const Thead = styled.thead`
  background-color: rgb(228 240 245);
`;

const Th = styled.th`
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
`;

const Td = styled.td`
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
`;

export default function ShopingList() {
  const [shopingList, setShopingList] = useState([{ name: "value" }]);
  const [isLoading, setUseLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRemoteData() {
      try {
        const data = await httpGet(apiPath, setUseLoading);
        setShopingList(data);
        // setShopingList(data.slice(data.length - 1));
      } catch (e) {
        setError(e.message);
      }
    }
    fetchRemoteData();
  }, []);

  function formatPrice(str) {
    if (str) {
      str = "" + str;
      const str1 = str.slice(0, str.length - 2);
      const str2 = str.slice(-2);
      const returnValue = `$ ${str1}.${str2}`;
      return returnValue;
    }
  }

  function decodeDescription(str) {
    if (str) {
      str = he.decode(str);
    }
    return str;
  }

  return (
    <div>
      {isLoading && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#b65be1", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      )}
      {error && <p>{error}</p>}
      {error === null && (
        <StyledContainer>
          <Caption>Purchase List for the Account</Caption>
          <Table>
            <Thead>
              <tr>
                <Th className="nameClass">Name</Th>
                <Th className="locationClass">Location</Th>
                <Th className="purchaseDateClass">Purchase Date</Th>
                <Th className="catagoryClass">Category</Th>
                <Th>Description</Th>
                <Th className="priceClass">Price</Th>
              </tr>
            </Thead>
          </Table>
          {shopingList.map((item) => {
            return (
              <div>
                <tbody>
                  <tr>
                    <Th className="nameClass">{item.name}</Th>
                    <Td className="locationClass">
                      <Img src={item.location} alt="MerchantImage" />
                    </Td>
                    <Td className="purchaseDateClass">
                      {moment(item.purchaseDate).format("ll")}
                    </Td>
                    <Td className="catagoryClass">{item.category}</Td>
                    <Td>{decodeDescription(item.description)}</Td>
                    <Th className="priceClass">{formatPrice(item.price)}</Th>
                  </tr>
                </tbody>
              </div>
            );
          })}
        </StyledContainer>
      )}
    </div>
  );
}
