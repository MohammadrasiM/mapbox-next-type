import { apiCall } from "../common/apicall.helper";
import { apiRoutes } from "@/utils/urls";
import {
  CartDto,
  CartStatsDto,
  AddressListDto,
  createAddressDto,
  CheckoutDto,
  CheckoutResponseDto,
  DisposablesDto,
  setDepositsDto,
} from "./cart.interface";

export class CartServices {
  static CART_CACHEKEY = "CART";
  static CART_STATS_CACHEKEY = "CART_STATS";
  static GET_USER_ADDRESS_CACHEKEY = "GET_USER_ADDRESS";
  static GET_USER_DELIVERY_FEE_CACHEKEY = "GET_USER_DELIVERY_FEE";
  static GET_DISPOSABLES_CACHEKEY = "GET_DISPOSABLES";

  static async GetCart() {
    try {
      const result = await apiCall<unknown, CartDto>("GET", apiRoutes.CART);
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async GetCartStats() {
    try {
      const result = await apiCall<unknown, CartStatsDto>("GET", apiRoutes.CART_STATS);
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async GetDisposables() {
    try {
      const result = await apiCall<unknown, DisposablesDto[]>("GET", apiRoutes.GET_DISPOSABLES);
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async SetDisposables(dto: setDepositsDto) {
    try {
      const result = await apiCall<setDepositsDto, unknown>("POST", apiRoutes.GET_DISPOSABLES, {
        depositItems: dto?.depositItems,
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async GetAddresses(dto: { type: "billing" | "shipping" }) {
    try {
      const result = await apiCall<{ type: "billing" | "shipping" }, AddressListDto[]>(
        "GET",
        apiRoutes.GET_USER_ADDRESS(dto?.type)
      );
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async GetDeliveryFee(dto: { address_id: number | null; business_id: number }) {
    try {
      const result = await apiCall<{ address_id: number | null; business_id: number }, string>(
        "GET",
        apiRoutes.USER_DELIVERY_FEE,
        { address_id: dto?.address_id, business_id: dto?.business_id }
      );
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async CreatAddress(dto: createAddressDto & { request_type: "POST" | "PUT" }) {
    try {
      const result = await apiCall<createAddressDto, unknown>(
        dto?.request_type,
        dto?.request_type == "PUT" ? `${apiRoutes.USER_ADDRESS}/${dto?.address_id}` : apiRoutes.USER_ADDRESS,
        {
          address: dto?.address,
          city_id: dto?.city_id,
          latitude: dto?.latitude,
          longitude: dto?.longitude,
          phone_number: dto?.phone_number,
          post_code: dto?.post_code,
          recipient_family: dto?.recipient_family,
          recipient_name: dto?.recipient_name,
          type: dto?.type,
          default: dto?.default,
          address_id: dto?.address_id,
        }
      );
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async DeleteAddress(dto: { id: string | number | null }) {
    try {
      const result = await apiCall<{ id: string | number | null }, unknown>("DELETE", apiRoutes.DELETE_ADDRESS(dto.id));
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async CheckoutCall(dto: CheckoutDto) {
    try {
      const result = await apiCall<CheckoutDto, CheckoutResponseDto>("POST", apiRoutes.CHECKOUT_API, {
        billing_address_id: dto?.billing_address_id,
        discount_code: dto?.discount_code,
        payment_method: dto?.payment_method,
        shipping_address_id: dto?.shipping_address_id,
      });
      return result;
    } catch (e) {
      throw e;
    }
  }
}
