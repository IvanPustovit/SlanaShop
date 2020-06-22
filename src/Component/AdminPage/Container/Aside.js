import React, { lazy, Suspense } from "react";
import { NavLink, Switch, Route } from "react-router-dom";

const GoodsPage = lazy(() => import("../GoodsPage"));
const ContactPage = lazy(() => import("../ContactPage"));

const activeStyle = {
  color: "black",
};
const Aside = ({
  userSignOut,
  form,
  props,
  urlPreview,
  onChangeFileInput,
  handleFilesUpload,
  valueHandler,
  getItemFrom,
  listShop,
}) => {
  return (
    <>
      <section>
        <div className="aside">
          <div>
            <p>User</p>
            <div className="button-exit">
              <button onClick={userSignOut}>Exit</button>
            </div>
          </div>
          <div>
            <NavLink
              to={{
                pathname: "/admin/goods",
              }}
              className="aside-link"
              exact
              activeStyle={activeStyle}
            >
              Товари
            </NavLink>
            <a href="#" className="aside-link">
              Графік роботи
            </a>
            <NavLink to="/admin/contact" className="aside-link">
              Контакти
            </NavLink>
            <a href="#" className="aside-link">
              Товари
            </a>
          </div>
        </div>
      </section>

      <Suspense fallback={<p>...Loading</p>}>
        <Switch>
          <Route
            path="/admin/goods"
            render={(props) => (
              <GoodsPage
                form={form}
                urlPreview={urlPreview}
                onChangeFileInput={onChangeFileInput}
                handleFilesUpload={handleFilesUpload}
                valueHandler={valueHandler}
                getItemFrom={getItemFrom}
              />
            )}
          />
          <Route path="/admin/contact" component={ContactPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default Aside;
