import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: { "API-KEY": '' } //enter your api-key here
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
};

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },

    login(email, password, rememberMe = false, captcha) {
        debugger
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },

    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    },

    async getCaptcha() {
        return instance.get('/security/get-captcha-url')
            .then(response => response.data);
    }
};
    

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
            .then(response => response.data)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})

    },

    savePhoto(photo) {
        const formData = new FormData();
        formData.append('image', photo);
        return instance.put('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    updateProfile(profileData) {
        return instance.put('/profile', profileData)
    }
    
};

export const followAPI = {
    post(id) {
        return instance.post(`follow/` + id)
            .then(response => response.data)
    },
    
    delete(id) {
        return instance.delete(`follow/` + id)
            .then(response => response.data)
    }
}

