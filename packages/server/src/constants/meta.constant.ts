import * as constants from '@nestjs/common/constants';
import { CACHE_KEY_METADATA } from '@nestjs/common/cache/cache.constants';

export const META = {
  HTTP_ERROR_CODE: '__customHttpErrorCode__',
  HTTP_SUCCESS_CODE: constants.HTTP_CODE_METADATA,
  HTTP_MESSAGE: '__customHttpMessage__',
  HTTP_ERROR_MESSAGE: '__customHttpErrorMessage__',
  HTTP_SUCCESS_MESSAGE: '__customHttpSuccessMessage__',
  HTTP_RES_TRANSFORM_PAGINATE: '__customHttpResTransformPaginate__',
  HTTP_CACHE_KEY_METADATA: CACHE_KEY_METADATA,
  HTTP_CACHE_TTL_METADATA: '__customHttpCacheTTL__',
};
