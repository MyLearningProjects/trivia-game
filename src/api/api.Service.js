import BaseApi from "./baseApi.services";
import { API_ROUTES} from "./api.Constants";

class Api extends BaseApi {

    getQuestionList = async (queryParams = {}) => {
		const endPoint = API_ROUTES.QUESTIONS;
        const url = this.makeUrl(endPoint);
		try {
			const { data } = await this.makeRequest( queryParams,url,"GET");
			return data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	};
	
}


const ApiService = new Api();
Object.freeze(ApiService);

export default ApiService;