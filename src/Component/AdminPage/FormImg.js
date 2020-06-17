import React from "react";

const FormImg = ({ urlPreview, onChangeFileInput }) => {
  return (
    <form id="upload-container" method="POST" action="send.php">
      <img id="upload-image" src={urlPreview} />
      <div>
        <input
          id="file-input"
          type="file"
          name="file"
          accept="image/*"
          onChange={onChangeFileInput}
          required
        />
        <label htmlFor="file-input">Виберіть файл</label>
      </div>
    </form>
  );
};

export default FormImg;
