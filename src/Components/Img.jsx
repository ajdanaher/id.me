import styled from "styled-components";

const Image = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
`;

export default function Img({ src, alt }) {
  return <Image src={src} alt={alt}></Image>;
}
