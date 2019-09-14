// defining a class
class Mobile {

    screenSize : string;
    RAM : string;
    processor : string;
    private camera:number;
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
    getCamera = ()=>{
        return this.camera; 
    }
    setCamera = (CAMERA:number)=>{
        this.camera=CAMERA;
    }
    }// end class 
    
    
    let onePlus = new Mobile("6 inch","6 GB","Snapdragon",20,3300,"Android")
    console.log(onePlus.battery)
    let OS = onePlus.getOperatingSystem()
    console.log(OS)
    console.log(onePlus.getCamera())
    onePlus.setCamera(50)
    console.log(onePlus.getCamera())