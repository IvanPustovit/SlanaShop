import React from "react";
import AdminItem from "./Container/AdminItem";
import FormImg from "./Container/FormImg";
import FormItem from "./Container/FormItem";
import { useSelector } from "react-redux";

const GoodsPage = ({
  urlPreview,
  onChangeFileInput,
  handleFilesUpload,
  valueHandler,
  getItemFrom,
  form,
  props,
}) => {
  const listShop = useSelector((state) => state.listShop);
  // console.log(props);
  return (
    <section>
      <div className="container">
        <div className="">
          <FormImg
            urlPreview={urlPreview}
            onChangeFileInput={onChangeFileInput}
          />
          <FormItem
            handleFilesUpload={handleFilesUpload}
            form={form}
            valueHandler={valueHandler}
          />
        </div>
        <ul className="card-list_item">
          {listShop.map((prod) => (
            <AdminItem {...prod} key={prod.id} getItemFrom={getItemFrom} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GoodsPage;
