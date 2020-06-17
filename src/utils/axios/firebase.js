import { db, auth, storage } from "../../firebaseConfig";
import { addToShop, getItems, setUser, deleteItem } from "../../module/action";

export const readDataFromFirebase = (dbName) => async (dispatch) => {
  try {
    const result = await db.collection(dbName).get();
    const resp = result.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    dispatch(getItems(resp));
  } catch (error) {
    console.log("error", error);
  }
};

export const writeDataToFirebase = (dbName, data) => async (dispatch) => {
  try {
    const result = await db.collection(dbName).add(data);
    const item = { ...data, id: result.id };
    dispatch(addToShop(item));
  } catch (error) {
    console.log("error", error);
  }
};

export const uploadImgToStorage = (dbName, files) => async (dispatch) => {
  try {
    const storageRef = storage.ref(`${dbName}/${files.name}`);
    const result = await storageRef.put(files);
    console.log(result);
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteFromFirebase = (dbName, docId) => async (dispatch) => {
  try {
    await db.collection(dbName).doc(docId).delete();
    dispatch(deleteItem(docId));
  } catch (error) {
    console.log("error", error);
  }
};

export const loginUser = (user) => async (dispatch) => {
  const { email, password } = user;
  try {
    const result = await auth.signInWithEmailAndPassword(email, password);
    const authUser = { email: result.user.email };
    dispatch(setUser(authUser));
  } catch (error) {
    console.log("error", error);
  }
};
