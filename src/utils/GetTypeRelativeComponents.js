import PropTypes from "prop-types";

export const types = ["code", "picture", "theory"];

export const subSpeciesRelation = (
  relativeComponents,
  availableTypes = types
) => {
  if (availableTypes.length !== relativeComponents.length)
    throw new Error(
      "sub Species Relative params should be arrays with the same length"
    );
  return (type, props) => {
    for (let index in relativeComponents) {
      if (type === availableTypes[index]) {
        const Component = relativeComponents[index];
        return <Component {...props} />;
      }
    }
  };
};

subSpeciesRelation.PropTypes = {
  relativeComponents: PropTypes.arrayOf(PropTypes.func),
  availableTypes: PropTypes.arrayOf(PropTypes.string),
};
