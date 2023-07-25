import { apiCall } from "../common/apicall.helper";
import { apiRoutes } from "@/utils/urls";
import {
  SingleShopType,
  FreeLancerDto,
  StroesDto,
  ProductsCarddto,
  SendBusinessCommentDto,
  Datum,
  SingleShopBanners,
  bussinessDto,
} from "./business.interface";
import { RateRangeproducts } from "../product/product.interface";

export class BusinessServices {
  static BUSINESSES_CACHEKEY = "BUSINESSES";
  static SINGLE_BUSINESSES_CACHEKEY = "SINGLE_BUSINESSES";
  static SINGLE_BUSINESSES_PRODUCTS_CACHEKEY = "SINGLE_BUSINESSES_PRODUCTS";
  static SINGLE_BUSINESSES_COMMENTS_CACHEKEY = "SINGLE_BUSINESSES_COMMENTS";
  static SINGLE_BUSSINESSES_BANNERS_CACHEKEY = "SINGLE_BUSSINESSES_BANNERS";
  static SINGLE_BUSSINESSES_RATE_RANGES_API_CACHEKEY = "SINGLE_BUSSINESSES_RATE_RANGES_API";

  static async GetBusinessNoZipZode() {
    try {
      const result = await apiCall<unknown, StroesDto[]>("GET", apiRoutes.BUSSINESSES);
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async GetBusiness(dto: bussinessDto) {
    try {
      const result = await apiCall<bussinessDto, StroesDto>("GET", apiRoutes.BUSSINESSES_API, {
        post_code: dto?.post_code,
        filter_category: dto?.filter_category,
        q: dto?.q,
        page: dto?.page,
        category_id: dto?.category_id,
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async GetSingleBusiness(dto: { id: string | number }) {
    try {
      const result = await apiCall<{ id: string | number }, SingleShopType>(
        "GET",
        apiRoutes.SINGLE_BUSSINESSES_API(dto?.id)
      );
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async GetSingleBusinessBanners(dto: { id: string | number }) {
    try {
      const result = await apiCall<{ id: string | number }, SingleShopBanners>(
        "GET",
        apiRoutes.SINGLE_BUSSINESSES_BANNERS_API(dto?.id)
      );
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async GetSingleBusinessComments(dto: { id: string | number }) {
    try {
      const result = await apiCall<{ id: string | number }, Datum[]>(
        "GET",
        apiRoutes.SINGLE_BUSSINESSES_COMMENTS_API(dto?.id)
      );
      return result;
    } catch (e) {
      throw e;
    }
  }
  static async GetSingleBusinessRateRanges(dto: { id: string | number }) {
    try {
      const result = await apiCall<{ id: string | number }, RateRangeproducts>(
        "GET",
        apiRoutes.SINGLE_BUSSINESSES_RATE_RANGES_API(dto?.id)
      );
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async GetSingleBusinessProducts(dto: { id: string | number }) {
    try {
      const result = await apiCall<{ id: string | number }, ProductsCarddto>(
        "GET",
        apiRoutes.SINGLE_BUSSINESSES_PRODUCTS_API(dto?.id)
      );
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async Freelancer<t>(dto: FreeLancerDto) {
    try {
      const result = await apiCall<unknown, t>("GET", dto?.url || "", { ...dto?.body });
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async PostNewBusinessComment(dto: SendBusinessCommentDto & { businessId: string }) {
    try {
      const result = await apiCall<SendBusinessCommentDto, unknown>(
        "POST",
        apiRoutes.SINGLE_BUSSINESSES_SEND_COMMENT_API(dto?.businessId),
        {
          rate: dto?.rate,
          message: dto?.message,
          title: dto?.title,
        }
      );
      return result;
    } catch (e) {
      throw e;
    }
  }
}
