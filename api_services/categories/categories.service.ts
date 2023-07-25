import { apiCall } from "../common/apicall.helper";
import { apiRoutes } from "@/utils/urls";
import {
  CategoresDto,
  MainBannersDto,
  CategoriesProdctBodyDto,
  CategoriesProductResponseDto,
  BrandsDto,
} from "./categories.interface";

export class CategoriesServices {
  static CATEGORIES_CACHEKEY = "CATEGORIES";
  static MAIN_BANNERS_CACHEKEY = "MAIN_BANNERS";
  static GET_CATEGORY_PRODUCTS_CACHEKEY = "GET_CATEGORY_PRODUCTS";
  static GET_BRANDS_CACHEKEY = "GET_BRANDS";

  static async GetCategories() {
    try {
      const result = await apiCall<unknown, CategoresDto[]>("GET", apiRoutes.CATEGORIES);
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async GetMainBanners() {
    try {
      const result = await apiCall<unknown, MainBannersDto>("GET", apiRoutes.GET_MAIN_BANNERS);
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async GetBrands() {
    try {
      const result = await apiCall<unknown, BrandsDto[]>("GET", apiRoutes.GET_BRANDS);
      return result;
    } catch (e) {
      throw e;
    }
  }
  static async GetBussinessBrands(dto: { id: string | number }) {
    try {
      const result = await apiCall<unknown, BrandsDto[]>("GET", apiRoutes.SINGLE_BUSSINESSES_BRANDS(dto?.id));
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async GetCategoriesProducts(dto: CategoriesProdctBodyDto) {
    try {
      const result = await apiCall<CategoriesProdctBodyDto, CategoriesProductResponseDto>(
        "GET",
        apiRoutes.SINGLE_BUSSINESSES_Products_API(dto?.storeId || ""),
        {
          brand_id: dto?.brand_id || null,
          max_price: dto?.max_price || null,
          max_unit_value: dto?.max_unit_value || null,
          min_price: dto?.min_price || null,
          min_unit_value: dto?.min_unit_value || null,
          q: dto?.q || null,
          sort_by: dto?.sort_by || null,
          tag_ids: dto?.tag_ids || null,
          unit_id: dto?.unit_id || null,
          category_id: dto?.category_id || null,
          page: dto?.page || 1,
        }
      );
      return result;
    } catch (e) {
      throw e;
    }
  }
}
