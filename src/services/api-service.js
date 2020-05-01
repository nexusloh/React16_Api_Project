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
        let user = await this.getServiceApiByUrl(`/users/`);
        return user.map(this._userDataTransform);
    }

    async getUserById(id) {
        let user = await this.getServiceApiByUrl(`/users/${id}`);
        return this._userDataTransform(user);
    }

    async getAllSites() {
        let site = await this.getServiceApiByUrl(`/sites/`);
        return site.map(this._siteDataTransform);
    }

    async getSiteById(id) {
        let site = await this.getServiceApiByUrl(`/sites/${id}`);
        return this._siteDataTransform(site);
    }

    _userDataTransform(user) {
        return {
            name: user.name,
            avatar: user.avatar
        }
    }

    _siteDataTransform(site) {
        return {
            site: site.site,
            ip: site.ip,
            activity: site.activity,
            image: site.image
        }
    }
}