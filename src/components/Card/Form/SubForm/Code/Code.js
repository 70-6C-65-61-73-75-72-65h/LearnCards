import React, { useEffect } from "react";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";

import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another

import useStyles from "./styles";
const codeState = {
  code: "",
  _type: "code",
};

const Code = ({ setCardData, cardData, handleSubmit }) => {
  const classes = useStyles();
  useEffect(() => {
    // if cant find apropp field  => will fill with '' => but if has (update session) => nothing to do with it
    for (let key in codeState) {
      if (cardData[key] === void 0) {
        setCardData((prev) => ({ ...prev, [key]: codeState[key] }));
      }
    }
  }, [cardData, setCardData]);

  // useEffect(() => {
  //   Prism.highlightAll();
  // }, [cardData.code]);
  // console.log("languages dict\n\n");
  // console.log(languages.js);

  return (
    <div className={`${classes.codeWrapper} `}>
      <Editor
        value={cardData.code || ""}
        onValueChange={(code) => setCardData({ ...cardData, code })}
        highlight={(code) => highlight(code, languages.js)}
        padding={10}
        preClassName={classes.pre}
        textareaClassName={classes.code}
        className={classes.wholeBunch}
        placeholder={"Write some code..."}
        onKeyDown={(e) => e.key === "Enter" && e.ctrlKey && handleSubmit(e)}
      />
    </div>
    // <TextField
    //   multiline
    //   rows={4}
    //   name="code"
    //   variant="outlined"
    //   label="code"
    //   fullWidth
    //   className={classes.codeField}
    //   //   useLayout for value be setled before rendered in textfield
    //   //   || ''
    //   value={cardData.code}
    //   onChange={(e) =>
    //     setCardData({
    //       ...cardData,
    //       code: highlight(e.target.value, languages.js),
    //     })
    //   }
    // />
  );
};

export default Code;
