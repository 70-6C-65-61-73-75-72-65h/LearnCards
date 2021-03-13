import LockOpenIcon from "@material-ui/icons/LockOpenRounded";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoomRounded";
import MemoryIcon from "@material-ui/icons/MemoryRounded";
import NoteAddIcon from "@material-ui/icons/NoteAddRounded";
import FormatListNumberedRoundedIcon from "@material-ui/icons/FormatListNumberedRounded";

// text, redirectLink, icon
// gj - по сути описываем только константы в обьектах определенных елементов
export const signin = ({ iconProps }) => ({
  text: "Войти",
  redirectLink: "/auth",
  icon: <LockOpenIcon {...iconProps} />,
});
export const signout = ({ iconProps, ...props }) => ({
  text: "Выйти",
  redirectLink: void 0,
  icon: <MeetingRoomIcon {...iconProps} />,
  ...props,
});
export const learn = ({ iconProps }) => ({
  text: "Учить",
  redirectLink: "/card/create",
  icon: <MemoryIcon {...iconProps} />,
});
export const create = ({ iconProps }) => ({
  text: "Загрузить",
  redirectLink: "/card/create",
  icon: <NoteAddIcon {...iconProps} />,
});
export const list = ({ iconProps }) => ({
  text: "Все Карточки",
  redirectLink: "/",
  icon: <FormatListNumberedRoundedIcon {...iconProps} />,
});

const withLargeIcon = (constant) => ({ ...props }) =>
  constant({ ...props, iconProps: { ...props.iconProps, fontSize: "large" } });
const withMediumIcon = (constant) => ({ ...props }) =>
  constant({ ...props, iconProps: { ...props.iconProps, fontSize: "medium" } });
const withSmallIcon = (constant) => ({ ...props }) =>
  constant({ ...props, iconProps: { ...props.iconProps, fontSize: "small" } });

const withSecondaryIcon = (constant) => ({ ...props }) =>
  constant({ ...props, iconProps: { ...props.iconProps, color: "secondary" } });

export const CONSTANTS = {
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
  Secondary: withSecondaryIcon,
  // White: withWhite,
};

const api = new Proxy(
  {},
  {
    get(target, propKey) {
      // console.log("propKey");
      // console.log(propKey.startsWith);
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
        //  .log(constant);
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

// navbar constants api
// it was implemented in purposes to make dry for navbar drawer and navbar
// (for breakpoint.sm('up') devices and breakpoint.sm('down') devices properly)
// (for dry in adaptive design of NavBar)
export default api;

// api.signin$Large({iconProps: {color: 'secondary'}})
// api.signout$Large( {operation: logout})
