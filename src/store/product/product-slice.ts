import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  products: any;
  productById: any;
  paginationProduct?: any;
  loadingProduct?: boolean;
  messageProduct?: string;
}

const init: IUser = {
  products: [],
  productById: [],
  paginationProduct: {},
  loadingProduct: false,
  messageProduct: "",
};

const productSlice: any = createSlice({
  name: "product",
  initialState: init,
  reducers: {
    productCreateProduct: () => {},
    productUpdateProduct: () => {},
    productGetProduct: () => {},
    productDeleteProductById: () => {},
    productGetProductById: () => {},
    productUpdateProductRedux: (state: any, action: any) => ({
      ...state,
      products: action.payload.products,
    }),
    productUpdatePaginationRedux: (state: any, action: any) => ({
      ...state,
      paginationProduct: action.payload.paginationProduct,
    }),
    productUpdateLoadingRedux: (state: any, action: any) => ({
      ...state,
      loadingProduct: action.payload.loadingProduct,
    }),
    productUpdateMessageRedux: (state: any, action: any) => ({
      ...state,
      messageProduct: action.payload.messageProduct,
    }),
    productUpdateProductByIdRedux: (state: any, action: any) => ({
      ...state,
      productById: action.payload.productById,
    }),
  },
});
export const {
  productGetProduct,
  productGetProductById,
  productUpdateProductRedux,
  productUpdatePaginationRedux,
  productUpdateLoadingRedux,
  productUpdateMessageRedux,
  productCreateProduct,
  productUpdateProductByIdRedux,
  productUpdateProduct,
  productDeleteProductById,
} = productSlice.actions;
export default productSlice.reducer;
