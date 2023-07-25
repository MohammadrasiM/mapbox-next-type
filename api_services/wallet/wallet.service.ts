import { apiCall } from "../common/apicall.helper";
import { apiRoutes } from "@/utils/urls";
// import {  } from "./wallet.interface";

export class WalletServices {
  static GET_USER_CASH_REQUESTS_CACHEKEY = "GET_USER_CASH_REQUESTS";

  static async UserCashRequests() {
    try {
      const result = await apiCall<unknown, unknown>("GET", apiRoutes.GET_USER_CASH_REQUESTS);
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async CashRequest(dto: { amount: number }) {
    try {
      const result = await apiCall<{ amount: number }, unknown>("POST", apiRoutes.USER_CASH_REQUEST, {
        amount: dto?.amount,
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async ChargeUserCredit(dto: { amount: number }) {
    try {
      const result = await apiCall<{ amount: number }, unknown>("POST", apiRoutes.USER_CREDIT, {
        amount: dto?.amount,
      });
      return result;
    } catch (e) {
      throw e;
    }
  }
}
