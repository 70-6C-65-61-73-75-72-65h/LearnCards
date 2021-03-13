const signin = ({ ...props }) => ({
  text: "1",
  redirectLink: "/auth",
  icon: { ...props },
});
const signout = ({ ...props }) => ({
  text: "2",
  redirectLink: void 0,
  icon: { ...props },
});
const learn = ({ ...props }) => ({
  text: "3",
  redirectLink: "/card/learn",
  icon: { ...props },
});
const create = ({ ...props }) => ({
  text: "4",
  redirectLink: "/card/create",
  icon: { ...props },
});
const list = ({ ...props }) => ({
  text: "5",
  redirectLink: "/",
  icon: { ...props },
});

const withLargeIcon = (constant) => ({ ...props }) =>
  constant({ ...props, fontSize: "large" });
const withMediumIcon = (constant) => ({ ...props }) =>
  constant({ ...props, fontSize: "medium" });
const withSmallIcon = (constant) => ({ ...props }) =>
  constant({ ...props, fontSize: "small" });
const withWhite = (constant) => ({ ...props }) =>
  constant({ ...props, color: "white" });

const CONSTANTS = {
  signin,
  signout,
  learn,
  create,
  list,
};

const WRAPPERS = {
  Large: withLargeIcon,
  Medium: withMediumIcon,
  Small: withSmallIcon,
  White: withWhite,
};

//  const signinDawerItemLarge = ({ ...props }) =>
//   relations({ ...props, fontSize: "large" });

const api = new Proxy(
  {},
  {
    get(target, propKey) {
      const constant =
        CONSTANTS[
          Object.keys(CONSTANTS).find((constant) =>
            propKey.startsWith(constant.toLowerCase())
          )
        ];
      if (!constant) return;
      const wrappers = propKey
        .split(/\$/g)
        .slice(1)
        .map((key) => WRAPPERS[key])
        .filter((wrFunc) => wrFunc instanceof Function);
      return (...args) => {
        const props = args.shift() || {};
        // result alweays will be an object (no matter exists wrappers or not)
        //  acum === constant wich will be changing (oxumuron) after wrappers
        console.log(constant);
        // we should inverse order if the same prop will override
        return wrappers.length
          ? wrappers
              .reverse()
              .reduce(
                (acum, currWr) => ((acum = currWr(acum, props)), acum),
                constant
              )(props)
          : constant(props);
      };
    },
  }
);
// api.signin$Large()
// console.log(api[`signin`]());
// console.log(api[`signin$Large`]());
// console.log(api[`signin$Large`]({ color: "red" }));
// console.log(api.signin());
// console.log(api.signin$Large());
// console.log(api.signin$Large({ color: "red" }));
console.log(api.signin$Large$Medium({ color: "black" }));
console.log(api.signin$Large$Medium$White({ color: "black" }));
