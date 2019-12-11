import fakeInfo from './data/sample.info.json';
import BaseService from './base.service.js';

class ContentService extends BaseService {
	constructor() {
		super();
	}

	getProducts() {
		return this.get('products');
	}

	getInfo() {
		return this.get('documents');
	}
}

export default new ContentService();