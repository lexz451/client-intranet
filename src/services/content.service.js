import fakeInfo from './data/sample.info.json';
import fakeProducts from './data/sample.products.json';
import BaseService from './base.service.js';

class ContentService extends BaseService {
	constructor() {
		super();
	}

	getProducts() {
		//return this.get('products');
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(fakeProducts);
			}, 5000);
		});
	}

	getInfo() {
		//return this.get('documents');
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(fakeInfo);
			}, 5000);
		});
	}
}

export default new ContentService();