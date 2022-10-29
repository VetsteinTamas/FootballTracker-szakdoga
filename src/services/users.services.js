import { db } from "../firebase";

import {
  collection,
  getDoc,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const userinfoCollectionRef = collection(db, "usersInfo");
class UserinfoDataService {
  setUserinfo = (id, newUserinfo) => {
    const userinfoDoc = doc(db, "usersInfo", id);
    return setDoc(userinfoDoc, newUserinfo);
  };

  updateUserinfo = (id, updatedUserinfo) => {
    const userinfoDoc = doc(db, "usersInfo", id);
    return updateDoc(userinfoDoc, updatedUserinfo);
  };

  deleteUserinfo = (id) => {
    const userinfoDoc = doc(db, "usersInfo", id);
    return deleteDoc(userinfoDoc);
  };

  getUserinfo = (id) => {
    const userinfoDoc = doc(db, "usersInfo", id);
    return getDoc(userinfoDoc);
  };
}

export default new UserinfoDataService();
