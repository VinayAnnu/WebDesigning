// defining a class
class MobilePhone {

    screenSize : string;
    RAM : string;
    processor : string;
    camera:number;
    battery:number;
    operatingSystem : string
    
    
    constructor (screenSize : string,RAM : string,processor : string,camera:number,battery:number,operatingSystem : string){
       this.screenSize = screenSize;
       this.RAM = RAM;
       this.processor = processor;
       this.camera = camera;
       this.battery = battery;
       this.operatingSystem = operatingSystem
    }// end constructor
    
    // method.
    getOperatingSystem = ()=>{
        return this.operatingSystem
    }
    
    }// end class 
    
    
    let onePlus5t = new MobilePhone("6 inch","6 GB","Snapdragon",20,3300,"Android")
    
    let os = onePlus5t.getOperatingSystem()
    console.log(os)