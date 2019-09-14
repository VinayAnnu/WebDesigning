// defining a class
var Mobile = /** @class */ (function () {
    function Mobile(screenSize, RAM, processor, camera, battery, operatingSystem) {
        var _this = this;
        // method.
        this.getOperatingSystem = function () {
            return _this.operatingSystem;
        };
        this.getCamera = function () {
            return _this.camera;
        };
        this.setCamera = function (CAMERA) {
            _this.camera = CAMERA;
        };
        this.screenSize = screenSize;
        this.RAM = RAM;
        this.processor = processor;
        this.camera = camera;
        this.battery = battery;
        this.operatingSystem = operatingSystem;
    } // end constructor
    return Mobile;
}()); // end class 
var onePlus = new Mobile("6 inch", "6 GB", "Snapdragon", 20, 3300, "Android");
console.log(onePlus.battery);
var OS = onePlus.getOperatingSystem();
console.log(OS);
console.log(onePlus.getCamera());
onePlus.setCamera(50);
console.log(onePlus.getCamera());
