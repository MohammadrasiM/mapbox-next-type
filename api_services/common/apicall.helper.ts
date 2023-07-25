import { baseUrl } from "@/utils/urls";
import { getCookies, getCookie, CookieValueTypes } from "cookies-next";
import axios, { AxiosRequestHeaders, AxiosResponse, AxiosRequestConfig } from "axios";

type Methods = "POST" | "PUT" | "DELETE" | "PATCH" | "GET";

interface SuccessResponse<K> {
  status: "successful" | "failed";
  messages: { fa: string | undefined };
  data: K;
}

// x-language en-US
/**
 * call route with axios and return data\
 * **T** is `body` type\
 * **K** is `return` type
 * @param method
 * @param url
 * @param body
 * @returns
 */
export async function apiCall<T, K>(method: Methods, url: string, body?: T, type?: "file"): Promise<K | undefined> {
  let language = getCookie("language");

  try {
    /**
     * create axios config
     */
    const config: AxiosRequestConfig = {
      method,
      url: baseUrl + url,
      headers: headerItems(type, language),
      data: body,
    };
    if (method == "GET") {
      config.params = body;
    }
    const response = await axios(config);

    /**
     * return data if status is success
     */

    if (response.data?.meta) {
      const res: K & { status: "successful" | "failed"; messages: { fa: string | undefined } } = response.data;

      if (res?.status == "successful") {
        const message = res?.messages?.fa;
        if (message) {
        }
        return res;
      }
      return undefined;
    } else {
      const res: SuccessResponse<K> = response.data;

      if (res.status == "successful") {
        const message = res?.messages?.fa;
        if (message) {
        }
        return res.data;
      }
    }
    return undefined;
  } catch (error: any) {
    /**
     * Notify error
     * throw function
     * check auth
     */
    handleError(error);
    if (error?.response?.status == 401) {
      localStorage?.removeItem("access_token");
      window?.location?.replace("/auth");
    }
    throw error?.response.data || "Failed";
  }
}

/**
 * Create header items
 * @returns
 */
const headerItems = (type?: "file", language?: string | null | CookieValueTypes) => {
  const token: string = localStorage.getItem("access_token") || "";
  let headers = {
    Accept: `application/json`,
    "Content-Type": `application/json`,
    // "x-language": language ? language : "en-Us",
    "x-language": "en-Us",
  } as AxiosRequestHeaders | { authorization?: string };
  if (type == "file") {
    headers = {};
  }

  if (token) headers.authorization = `Bearer ${token}`;

  return headers;
};

/**
 * find error message and notify
 * @param error
 */
const handleError = (error: any) => {
  const message = error?.response?.data?.messages?.fa || error?.message;
};
