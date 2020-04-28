export default class ApiService {
    _apiUrl = 'https://5ea7474e84f6290016ba7df7.mockapi.io/v1';

    async getServiceApiByUrl(url) {
        let res = await fetch(`${this._apiUrl}${url}`);
        if (!res.ok) {
            throw new Error(`Problems with connections to API service ${url}`)
        }

        return await res.json();
    }

    async getAllUsers() {
        return await this.getServiceApiByUrl(`/users/`);
    }

    async getUserById(id) {
        return await this.getServiceApiByUrl(`/users/${id}`);
    }

    async getAllSites() {
        return await this.getServiceApiByUrl(`/sites/`);
    }

    async getSiteById(id) {
        return await this.getServiceApiByUrl(`/sites/${id}`);
    }
}