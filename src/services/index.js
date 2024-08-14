import UserService from "./user/index.js";


const services = [
    UserService,
];

const factory = (function () {
    const instances = {};

    const bootstrapServices = (options) => {
        services.forEach((service) => {
            instances[service.serviceName] = new service(options);
        });

        console.log("Bootstrapped services...");
    };

    return {
        bootstrapServices,
        instances: (service) => {
            return instances[service];
        },
    };
})();

export const bootstrapServices = factory.bootstrapServices;
export default (service) => factory.instances(service);