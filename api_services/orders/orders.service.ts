import { apiCall } from "../common/apicall.helper";
import { apiRoutes } from "@/utils/urls";
import { OrderStatusesDto, GetOrdersDto, SingleProductDto } from "./orders.interface";

export class OrdersServices {
  static ORDERS_STATUSES_CACHEKEY = "ORDERS_STATUSES";
  static GET_ORDERS_CACHEKEY = "GET_ORDERS";
  static GET_SINGLE_ORDER_CACHEKEY = "GET_ORDERS";

  static async GetUsersOrdersStatuses() {
    try {
      const result = await apiCall<unknown, OrderStatusesDto[]>("GET", apiRoutes.ORDERS_STATUSES);
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async GetOrders(dto: { status_id: number | null }) {
    try {
      const result = await apiCall<{ status_id: number | null }, GetOrdersDto>("GET", apiRoutes.GET_ORDERS, {
        status_id: dto?.status_id,
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async GetSingleOrderDetails(dto: { id: number | null }) {
    try {
      const result = await apiCall<{ id: number | null }, SingleProductDto>("GET", apiRoutes.GET_SINGLE_ORDER(dto?.id));
      return result;
    } catch (e) {
      throw e;
    }
  }

  // static async CheckoutCall(dto: CheckoutDto) {
  //   try {
  //     const result = await apiCall<CheckoutDto, unknown>("POST", apiRoutes.CHECKOUT_API, {
  //       billing_address_id: dto?.billing_address_id,
  //       discount_code: dto?.discount_code,
  //       payment_method: dto?.payment_method,
  //       shipping_address_id: dto?.shipping_address_id,
  //     });
  //     return result;
  //   } catch (e) {
  //     throw e;
  //   }
  // }
}
