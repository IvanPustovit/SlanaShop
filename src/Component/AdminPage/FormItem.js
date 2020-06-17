import React from "react";

const FormItem = ({ handleFilesUpload, valueHandler, form }) => {
  return (
    <form onSubmit={handleFilesUpload} className="new-item">
      <div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Назва товара"
          value={form.name}
          onChange={valueHandler}
          required
        />
        <input
          type="text"
          name="size"
          id="size"
          placeholder="Розміри, вказуємо через кому"
          value={form.size}
          onChange={valueHandler}
          required
        />
        <input
          type="text"
          name="info"
          id="info"
          placeholder="Короткий опис товару"
          value={form.info}
          onChange={valueHandler}
          required
        />
        <input
          type="text"
          name="sizeImg"
          id="sizeImg"
          placeholder="Розмір малюнка вишивки"
          value={form.sizeImg}
          onChange={valueHandler}
          required
        />
        <input
          type="text"
          name="styleImg"
          id="styleImg"
          placeholder="Стиль вишивки"
          value={form.styleImg}
          onChange={valueHandler}
          required
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Ціна товару"
          value={form.price}
          onChange={valueHandler}
          required
        />
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Катeгорія товару"
          value={form.category}
          onChange={valueHandler}
          required
        />
        <input
          type="text"
          name="MadeIn"
          id="MadeIn"
          placeholder="Виробник товару"
          value={form.MadeIn}
          onChange={valueHandler}
          required
        />
        <input
          type="text"
          name="article"
          id="article"
          placeholder="Артикул"
          value={form.article}
          onChange={valueHandler}
          required
        />
      </div>
      <button type="submit" className="button-to">
        Записати товар
      </button>
    </form>
  );
};

export default FormItem;
