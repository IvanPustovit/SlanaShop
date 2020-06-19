import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  uploadImgToStorage,
  writeDataToFirebase,
  updateFromFirebase,
} from "../utils/axios/firebase";
import { storage, db, auth } from "../firebaseConfig";

import { deleteUser } from "../module/action";
import AdminPage from "../Component/AdminPage/AdminPage";

import "./ad.css";

const formInitial = {
  img: "",
  alt: "",
  category: "",
  name: "",
  size: [],
  info: "",
  sizeImg: "",
  styleImg: "",
  price: "",
  MadeIn: "",
  article: "",
  amount: 1,
  id: "",
  amountInCart: 0,
};

const Admin = (props) => {
  const dispatch = useDispatch();
  const listShop = useSelector((state) => state.listShop);

  const [file, setFile] = useState(null);
  const [urlPreview, setUrlPreview] = useState("");
  const [form, setForm] = useState(formInitial);

  const handlerFiles = async (e) => {
    e.preventDefault();
    const fille = e.target.files[0];
    setFile(fille);
    prevFile(fille);
    await dispatch(uploadImgToStorage("images", fille));
    let urlImg = "";
    await uploadUrl("images", fille).then((url) => (urlImg = url));
    setForm({ ...form, img: urlImg });
  };

  const prevFile = (files) => {
    const reader = new FileReader();
    reader.onload = (() => {
      return (e) => {
        const r = e.target.result;
        setUrlPreview(r);
      };
    })(files);
    reader.readAsDataURL(files);
  };

  const uploadUrl = async (dbName, files) => {
    let urlImg = "";

    await storage
      .ref()
      .child(`${dbName}/${files.name}`)
      .getDownloadURL()
      .then((url) => (urlImg = url));
    return urlImg;
  };

  const valueHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleFilesUpload = async (e) => {
    e.preventDefault();
    if (form.id) {
      dispatch(updateFromFirebase("shop", form.id, form));
      setForm(formInitial);
      setFile(null);
    } else {
      dispatch(writeDataToFirebase("shop", form));
      setForm(formInitial);
      setFile(null);
    }
  };

  const onChangeFileInput = (e) => {
    handlerFiles(e);
  };

  const getItemFrom = async (dbName, dbId) => {
    const item = db.collection(dbName).doc(dbId);
    await item.get().then((doc) => {
      setForm({ ...doc.data(), id: dbId });
      setUrlPreview(doc.data().img);
      console.log(form);
    });
    console.log(form);
  };

  const userSignOut = () => {
    auth.signOut();
    dispatch(deleteUser());
  };

  return (
    <div className="admin">
      <AdminPage
        userSignOut={userSignOut}
        onChangeFileInput={onChangeFileInput}
        handleFilesUpload={handleFilesUpload}
        urlPreview={urlPreview}
        form={form}
        valueHandler={valueHandler}
        listShop={listShop}
        getItemFrom={getItemFrom}
        props={props}
      />
    </div>
  );
};

export default Admin;
