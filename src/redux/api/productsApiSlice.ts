import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import api from "./api";

const addProduct = createAsyncThunk(
  "addProduct",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post("/products", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await response.data;
      return data;
    } catch (err) {
      const error = err as AxiosError;
      return rejectWithValue(error.response?.data);
    }
  },
);

export default addProduct;
