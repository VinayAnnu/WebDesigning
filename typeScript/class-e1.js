// defining a class
var MobilePhone = /** @class */ (function () {
    function MobilePhone(screenSize, RAM, processor, camera, battery, operatingSystem) {
        var _this = this;
        // method.
        this.getOperatingSystem = function () {
            return _this.operatingSystem;
        };
        this.screenSize = screenSize;
        this.RAM = RAM;
        this.processor = processor;
        this.camera = camera;
        this.battery = battery;
        this.operatingSystem = operatingSystem;
    } // end constructor
    return MobilePhone;
}()); // end class 
var onePlus5t = new MobilePhone("6 inch", "6 GB", "Snapdragon", 20, 3300, "Android");
var os = onePlus5t.getOperatingSystem();
console.log(os);
