import LocationModel from "../models/locationModel.js";



export const createLocation = async (name, type, capacity, price, address) => {
    const location = await LocationModel.create({
        name, type, capacity, price, address
    });
    
    return location;
};

export const getLocation = async (name, type, capacity, price, address) => {
    const query = {};

    if (name) {
        query.name = name;
    };
    if (type) {
        query.type = type;
    };
    if (capacity) {
        query.capacity = capacity;
    };
    if (price) {
        query.price = price;
    };
    if (address) {
        query.address = address;
    };

    const location = await LocationModel.findOne(query);
    return location;
};

export const getLocationById = async (id) => {
    const location = await LocationModel.findById(id); 
    return location;
};

export const getAllLocation = async () => {
    const locations = await LocationModel.getAllLocation();
    return locations;
};




