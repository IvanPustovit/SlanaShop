import React from "react";
import Aside from "./Container/Aside";

const AdminPage = ({
  userSignOut,
  urlPreview,
  onChangeFileInput,
  handleFilesUpload,
  valueHandler,
  getItemFrom,
  listShop,
  form,
  props,
}) => {
  return (
    <>
      <Aside
        userSignOut={userSignOut}
        listShop={listShop}
        form={form}
        props={props}
        handleFilesUpload={handleFilesUpload}
        urlPreview={urlPreview}
        onChangeFileInput={onChangeFileInput}
        valueHandler={valueHandler}
        getItemFrom={getItemFrom}
      />
    </>
  );
};

export default AdminPage;
