import { InjectionToken } from "@angular/core";
import { ApiTokenConfig } from "./api-token-config";

export const DEFAULT_URL_CFG = new InjectionToken<ApiTokenConfig>('DEFAULT_URL_CFG');
