import React from 'react';
import styled from "styled-components";
import {ListItemProps} from "./types";

const Image = styled.div<{ background: string }>`
  background: url('${props => props.background}') no-repeat;
  background-size: cover;
  height: 200px;
`

const ListItem: React.FunctionComponent<ListItemProps> = ({photo}) => {
    return (
        <Image background={photo}></Image>
    );
}

ListItem.displayName = 'ListItem';

export default ListItem;
