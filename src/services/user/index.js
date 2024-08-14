class UserService {
    constructor(options) {
        this.db = options.db;
    }

    static serviceName = "user";

    async create(payload) {
        const user = await this.db.User.create({
            email: payload.email,
            password: payload.password,
            role: payload.role,
            isActive: payload.isActive || true
        });

        return user;
    }
}

export default UserService;