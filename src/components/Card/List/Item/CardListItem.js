import React, { useState } from "react";

import { subSpeciesRelation } from "../../../../utils/getTypeRelativeComponents";
import {
  ListExtraFields,
  ListFSCode,
  ListFSPicture,
} from "../../ExtraFieldSets/List/List";

import {
  ListShowExtraFields,
  ListSFSCode,
  ListSFSPicture,
} from "../../ExtraFieldSets/List/ListShow";
import { CardRevealedConcealed } from "./CardItem";

import useStyles from "./styles";

const relativeComponents = [ListFSCode, ListFSPicture, ListExtraFields];

const relativeComponentsShow = [
  ListSFSCode,
  ListSFSPicture,
  ListShowExtraFields,
];

const getRelativeComponent = subSpeciesRelation(relativeComponents);
const getRelativeComponentShow = subSpeciesRelation(relativeComponentsShow);

const CardItem = ({ cardData }) => {
  const classes = useStyles();
  const [flipped, setFlipped] = useState(false);

  const flip = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <div className={`${classes.card} ${flipped ? classes.cardShow : ""}`}>
      {flipped ? (
        <CardRevealedConcealed
          {...{
            cardData,
            callMethod: flip,
            flipped,
            realtiveFieldSet: getRelativeComponentShow(cardData._type, {
              cardData,
            }),
          }}
        />
      ) : (
        <CardRevealedConcealed
          {...{
            cardData,
            callMethod: flip,
            flipped,
            realtiveFieldSet: getRelativeComponent(cardData._type, {
              cardData,
            }),
          }}
        />
      )}
    </div>
  );
};

export default CardItem;
