import React from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { baseUrl } from "../utils/urls";

// import {errorHandling} from './errorHandling';
import validatorError from "./validatorError";
import Notify from "../components/shared/Toast";
const cache = require("memory-cache");

type MethodType = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

type OptionsProps = {
  multiErrorsCustomeMessage?: any;
  cacheDuration?: number;
  cacheKey?: string;
  readFromCache?: boolean;
};

interface ErrorMessage {
  message?: { fa: string };
  errors?: Object;
  // message?: string;
}
const headerItems = (token?: string) => {
  if (token) {
    return {
      Accept: "application/image",
      "Content-Type": "application/image",
      authorization: `Bearer ${token}`,
    };
  } else
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
};
const config = (method: string, url: string, data?: object | null, token?: string) => {
  if (method == "GET")
    return {
      method: method,
      headers: headerItems(token),
      url: `${baseUrl}${url}`,
      params: data,
    };
  else
    return {
      method: method,
      headers: headerItems(token),
      url: `${baseUrl}${url}`,
      data: data,
    };
};

export const ApiCall = async (
  method: MethodType,
  url: string,
  data: Object | null,
  name: string = "response ->",
  callback: (e: any) => void | null,
  onError?: (e: any) => void | null,
  options?: OptionsProps,
  checkAuth: boolean = true
) => {
  try {
    //CACHE CONTROL
    if (options?.readFromCache && method == "GET") {
      const cachedResponse = cache.get(options?.cacheKey || url);
      if (cachedResponse) {
        console.log("read from cache" + url);
        if (typeof callback == "function") callback(cachedResponse);
        return;
      }
    }
    if (method.toUpperCase() != "GET") cache.del(options?.cacheKey || url); //remove cache
    //END CACHE CONTROL

    const token: string = localStorage.getItem("access_token") || "";
    const response: AxiosResponse = await axios(config(method, url, data, token));

    if (response.status == 200 || response.status == 201) {
      const res = response.data;

      console.log(name, res);
      if (res.status == "successful") {
        if (typeof callback == "function") callback(res);
        !!options?.cacheDuration && cache.put(options?.cacheKey || url, res, options?.cacheDuration); //cache response
        res.messages?.fa && method != "GET" && Notify({ type: "success", body: res.messages?.fa });
      } else {
        //Failed
        if (typeof onError == "function") onError(response);
        Notify({ type: "error", title: "خطا", body: res.messages?.fa });
      }
    } else {
      // Status != 200
      response.status == 401 && window?.location?.replace("/auth");
      if (typeof onError == "function") onError(response);
    }
  } catch (err) {
    const error = err as AxiosError;

    if (error?.response?.status == 401 && checkAuth) {
      localStorage.removeItem("isLogin");
      localStorage.removeItem("access_token");
      window?.location?.replace("/auth");
    }
    if (typeof onError == "function") onError(error);

    console.log("Error", error.response?.data || error);
    if (error && error.message == "Network Error")
      Notify({ type: "warn", body: "لطفا اتصال اینترنت خود را بررسی کنید" });
    else {
      const ErrorMessage: ErrorMessage = error?.response?.data || {};
      const msg = validatorError(ErrorMessage?.errors);
      if (options?.multiErrorsCustomeMessage && Object.keys(ErrorMessage?.errors || {})?.length > 1) {
        Notify({
          type: "error",
          title: "error",
          body: ErrorMessage?.message?.fa,
        });
      } else console.log("ErrorMessage", ErrorMessage);
      Notify({
        type: "error",
        title: "error",
        body:
          msg || Array.isArray(ErrorMessage?.message?.fa)
            ? ErrorMessage?.message?.fa[0]
            : ErrorMessage?.message?.fa || "Unknown error occured",
      });
    }
  }
};
