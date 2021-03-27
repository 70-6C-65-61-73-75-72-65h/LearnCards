import React, { useEffect } from "react";

const useCardExtraFields = ({ cardData, setCardData, extraState }) => {
  useEffect(() => {
    // if cant find apropp field  => will fill with '' => but if has (update session) => nothing to do with it
    for (let key in extraState) {
      if (cardData[key] === void 0) {
        setCardData((prev) => ({ ...prev, [key]: extraState[key] }));
      }
    }
  }, [cardData, setCardData, extraState]);
};

export default useCardExtraFields;
