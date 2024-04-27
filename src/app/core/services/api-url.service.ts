import { Inject, Injectable } from '@angular/core';
import { ApiTokenConfig } from '../injection-tokens/api-token-config';
import { DEFAULT_URL_CFG } from '../injection-tokens/injection-token-configurations';

@Injectable({
	providedIn: 'root'
})
export class ApiUrlService {

	constructor(@Inject(DEFAULT_URL_CFG) private apiConfig: ApiTokenConfig) { }

}
