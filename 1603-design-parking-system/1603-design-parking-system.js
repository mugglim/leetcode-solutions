class ParkingSystem{
    /**
     * @param {number} big
     * @param {number} medium
     * @param {number} small
     */
    constructor(big, medium, small){
        this.slots = [big,medium,small];
    }
    
    /** 
     * @param {number} carType
     * @return {boolean}
     */
    addCar(carType){
        if(this.slots[carType-1] === 0){
            return false;
        }
        
        this.slots[carType-1] -= 1;
        return true;
    }
}
