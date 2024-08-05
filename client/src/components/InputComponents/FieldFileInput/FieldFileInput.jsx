import React from 'react';
import { useField } from 'formik';

const FieldFileInput = ({ classes, name, ...rest }) => {
  const { fileUploadContainer, labelClass, fileNameClass, fileInput } = classes;

  const [{ value, ...restField }, meta, helpers] = useField(name);

  const getFileName = () => {
    if (value) {
      return value.name;
    }
    return '';
  };

  onchange = (e) => {
    const file = e.target.files[0];
    helpers.setValue(file, false);
  };

  return (
    <div className={fileUploadContainer}>
      <label htmlFor="fileInput" className={labelClass}>
        Choose file
      </label>
      <span id="fileNameContainer" className={fileNameClass}>
        {getFileName()}
      </span>
      <input
        {...restField}
        className={fileInput}
        onChange={onChange}
        id="fileInput"
        type="file"
      />
    </div>
  );
};

export default FieldFileInput;
