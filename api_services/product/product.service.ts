import { apiCall } from "../common/apicall.helper";
import { apiRoutes } from "@/utils/urls";
import {
  SendProductCommentDto,
  GetSingleProductCommentsDto,
  SingleProductCommentDto,
  AddToCartType,
  PriceRangeData,
  AddToCartResponseDto,
  needBusinessProductId,
  GetSingleProductDto,
  SingleProductDto,
  RateRangeproducts,
} from "./product.interface";

export class ProductsServices {
  static GET_SINGLE_PRODUCT_COMMENTS_CACHEKEY = "GET_SINGLE_PRODUCT_COMMENTS";
  static PRODUCT_PRICE_RANGE_CACHEKEY = "PRODUCT_PRICE_RANGE_COMMENTS";
  static GET_FAVS_CACHEKEY = "GET_FAVS";
  static SINGLE_BUSSINESSES_PRODUCT_RATE_RANGE_API_CACHEKEY = "SINGLE_BUSSINESSES_PRODUCT_RATE_RANGE_API_CACHEKEY";

  // static async GetSingleProduct(dto: GetSingleProductDto) {
  //   try {
  //     const result = await apiCall<GetSingleProductDto, unknown>("GET", apiRoutes.SINGLE_PRODUCT_API(dto.id));
  //     return result;
  //   } catch (e) {
  //     throw e;
  //   }
  // }

  static async GetSingleProductComments(dto: GetSingleProductDto) {
    try {
      const result = await apiCall<GetSingleProductDto, SingleProductCommentDto[]>(
        "GET",
        apiRoutes.SINGLE_BUSSINESSES_PRODUCT_COMMENTS_API(dto?.business_id, dto.id)
      );
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async GetSingleProductRateRanges(dto: GetSingleProductDto) {
    try {
      const result = await apiCall<GetSingleProductDto, RateRangeproducts>(
        "GET",
        apiRoutes.SINGLE_BUSSINESSES_PRODUCT_RATE_RANGE_API(dto?.business_id, dto.id)
      );
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async GetProductPriceRange() {
    try {
      const result = await apiCall<unknown, PriceRangeData>("GET", apiRoutes.PRODUCT_PRICE_RANGE);
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async PostNewProductComment(dto: SendProductCommentDto & { productId: string }) {
    try {
      const result = await apiCall<SendProductCommentDto, unknown>(
        "POST",
        apiRoutes.SINGLE_PRODUCT_SEND_COMMENT_API(dto?.productId),
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

  static async AddToCart(dto: AddToCartType) {
    try {
      const result = await apiCall<AddToCartType, AddToCartResponseDto>("POST", apiRoutes.ADD_TO_CART, {
        business_product_id: dto.business_product_id,
        count: dto.count,
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async DeleteProduct(dto: needBusinessProductId) {
    try {
      const result = await apiCall<needBusinessProductId, AddToCartResponseDto>("DELETE", apiRoutes.ADD_TO_CART, {
        business_product_id: dto.business_product_id,
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async MakeProductFav(dto: needBusinessProductId) {
    try {
      const result = await apiCall<needBusinessProductId, AddToCartResponseDto>(
        "POST",
        apiRoutes.ADD_REMOVE_PRODUCT_TO_FAVORITES,
        {
          business_product_id: dto.business_product_id,
        }
      );
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async GetUsersFavs() {
    try {
      const result = await apiCall<unknown, SingleProductDto[]>("GET", apiRoutes.ADD_REMOVE_PRODUCT_TO_FAVORITES);
      return result;
    } catch (e) {
      throw e;
    }
  }
}
