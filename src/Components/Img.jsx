import styled from "styled-components";

const Image = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  @media (min-width: 768px) {
    align-items: center;
  }
`;

export default function Img({ src, alt }) {
  return <Image src={src} alt={alt}></Image>;
}
