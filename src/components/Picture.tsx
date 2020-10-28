import React from 'react';
import styled from 'styled-components'


type Props = {
  picture: {
    title: string;
    url: string;
  };
};

const StyledImage = styled.div`
  border: 1px solid black;
`

export const Picture = ({ picture }: Props) => {


  return (


    <div>

      {picture.title}
<StyledImage>
      <img src={picture.url}/>
      </StyledImage>
    </div>
  );

};
