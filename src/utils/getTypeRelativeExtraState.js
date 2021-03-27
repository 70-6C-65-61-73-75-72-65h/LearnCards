import PropTypes from "prop-types";
import { availableTypes } from "./availableExtraFieldTypes";

const codeState = {
  _type: "code",
  code: "",
  question: [""],
  answer: "",
};
const pictureState = {
  picture: {},
  picturePreview: "",
  _type: "picture",
  question: [""],
  answer: "",
};
const theoryState = {
  question: [""],
  answer: "",
  _type: "theory",
};

export const ExtraState = ({ availableType }) => {
  switch (availableType) {
    case availableTypes[0]: {
      return codeState;
    }
    case availableTypes[1]: {
      return pictureState;
    }
    case availableTypes[2]: {
      return theoryState;
    }
    default: {
      return {};
      //   its impossible cause of PropTypes validation
      //   throw new Error(`passed availableType not in `);
    }
  }
};

ExtraState.propTypes = {
  availableType: PropTypes.oneOf(availableTypes),
};
