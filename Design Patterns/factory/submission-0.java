interface Vehicle {
    String getType();
}
class Car implements Vehicle {
    @Override
    public String getType() {
        return "Car";
    }
}

class Truck implements Vehicle {
    @Override
    public String getType() {
        return "Truck";
    }
}

class Bike implements Vehicle {
    @Override
    public String getType() {
        return "Bike";
    }
}
abstract class VehicleFactory {
    public abstract Vehicle createVehicle();
}
class CarFactory extends VehicleFactory {
    @Override
    public Vehicle createVehicle() {
        return new Car();
    }
}

class TruckFactory extends VehicleFactory {
    @Override
    public Vehicle createVehicle() {
        return new Truck();
    }
}

class BikeFactory extends VehicleFactory {
    @Override
    public Vehicle createVehicle() {
        return new Bike();
    }
}