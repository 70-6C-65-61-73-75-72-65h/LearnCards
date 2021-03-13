import React, { useState } from "react";

export const useHandleForm = (initialState, reduxAction) => {
  const [form, setForm] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    reduxAction(form);
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return [setForm, handleChange, handleSubmit];
};
