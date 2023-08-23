import { atom } from "recoil";

import { imageList } from "../components/mock/images";

const imageListState = atom({
  key: "imageListState",
  default: imageList,
});

export { imageListState };
