import React, { useState } from "react";
import PropTypes from "prop-types";

import { FileUploader } from "react-drag-drop-files";

// const fileTypes = ["JPG", "PNG", "GIF"];

function ContentFile(props) {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <>
      <FileUploader
        handleChange={handleChange}
        name="file"
        types={Array.from(props.fileTypes)}
      />
    </>
  );
}

ContentFile.propTypes = {
  fileTypes: PropTypes.array,
};

export default ContentFile;
