import { db } from "../firebase";

import {
  setDoc,
  doc,
} from "firebase/firestore";

class UserinfoDataService {
  setUserinfo = (id, newUserinfo) => {
    const userinfoDoc = doc(db, "usersInfo", id);
    return setDoc(userinfoDoc, newUserinfo);
  };
}

export default new UserinfoDataService();
