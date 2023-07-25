import { apiRoutes } from "@/utils/urls";
import {
  SendOtpDto,
  SendOtpType,
  SendOtpVerify,
  SendOtpVerifyResponse,
  SetPasswordResponse,
  SetPassword,
  SignInDTO,
  SignInResponseDTO,
  ForgetasswordListDto,
  SendForgetOtpDto,
  ConfirmForgetOtpDto,
  SetNewPassword,
  GetProfileDto,
  UpdateProfileDto,
} from "./auth.interface";
import { apiCall } from "../common/apicall.helper";

export class AuthService {
  static FORGOT_PASSWORD_LIST_CACHEKEY = "FORGOT_PASSWORD_LIST";
  static GET_PROFILE_CACHEKEY = "HET_PROFILE";

  static async SignIn(dto: SignInDTO) {
    try {
      const result = await apiCall<SignInDTO, SignInResponseDTO>("POST", apiRoutes.AU9, {
        password: dto.password,
        auth_param: dto.auth_param,
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async sendOtp(dto: SendOtpDto) {
    try {
      const result = await apiCall<SendOtpDto, SendOtpType>("POST", apiRoutes.AU1, {
        auth_param: dto.auth_param,
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async sendForgetOtp(dto: SendForgetOtpDto) {
    try {
      const result = await apiCall<SendForgetOtpDto, SendOtpType>("POST", apiRoutes.AU12, {
        auth_param: dto.auth_param,
        forget_type: dto.forget_type,
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async confirmOtp(dto: SendOtpVerify) {
    try {
      const result = await apiCall<SendOtpVerify, SendOtpVerifyResponse>("POST", apiRoutes.AU2, {
        auth_param: dto.auth_param,
        code: dto.code,
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async confirmForgetOtp(dto: ConfirmForgetOtpDto) {
    try {
      const result = await apiCall<ConfirmForgetOtpDto, SendOtpVerifyResponse>("POST", apiRoutes.AU13, {
        auth_param: dto.auth_param,
        forget_type: dto.forget_type,
        code: dto.code,
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async confirmOtpRegister(dto: SendOtpVerify) {
    try {
      const result = await apiCall<SendOtpVerify, SendOtpVerifyResponse>("POST", apiRoutes.AU10, {
        auth_param: dto.auth_param,
        code: dto.code,
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async SetUserPass(dto: SetPassword) {
    try {
      const result = await apiCall<SetPassword, SetPasswordResponse>("POST", apiRoutes.AU8, {
        password: dto?.password,
        password_confirm: dto?.password_confirm,
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async SetUsersNewPass(dto: SetNewPassword) {
    try {
      const result = await apiCall<SetNewPassword, SetPasswordResponse>("POST", apiRoutes.AU14, {
        password: dto?.password,
        password_confirm: dto?.password_confirm,
        auth_param: dto.auth_param,
        code: dto.code,
        forget_type: dto.forget_type,
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async UploadUsersImage(dto: FormData) {
    try {
      const result = await apiCall<FormData, SetPasswordResponse>("POST", apiRoutes.IMAGE_UPLOAD, dto, "file");
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async Logout() {
    try {
      const result = await apiCall<unknown, unknown>("POST", apiRoutes.LOGOUT);
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async SendZipCodes(dto: { zip_codes: string[] | number[] }) {
    try {
      const result = await apiCall<{ zip_codes: string[] | number[] }, unknown>("PUT", apiRoutes.USER_ZIP_CODE, {
        zip_codes: dto?.zip_codes,
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async ForgotPasswordList(dto: { param: string | number }) {
    try {
      const result = await apiCall<{ param: string | number }, ForgetasswordListDto>("GET", apiRoutes.AU11(dto?.param));
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async GetProfile() {
    try {
      const result = await apiCall<unknown, GetProfileDto>("GET", apiRoutes.AU4);
      return result;
    } catch (e) {
      throw e;
    }
  }

  static async UpdateProfile(dto: UpdateProfileDto) {
    try {
      const result = await apiCall<UpdateProfileDto, unknown>("PUT", apiRoutes.UPDATE_PROFILE, {
        first_name: dto?.first_name,
        last_name: dto?.last_name,
        birth_date: dto?.birth_date,
        gender: dto?.gender,
      });
      return result;
    } catch (e) {
      throw e;
    }
  }
}
