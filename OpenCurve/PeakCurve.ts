export function SimplePeakCurve(peak: number) : number {
    const random = Math.random();
    return Math.pow(Math.E, (-8 * ( Math.pow(random - peak, 2))));
}


export default class PeakCurve {
    max: number;
    min: number;
    constructor(max:number, min:number){
        this.max = max;
        this.min = min;  
    }

    random(peak: number) : number {
        const normalizedPeak = (peak - this.min) / (this.max - this.min);
        const normalizedValue = SimplePeakCurve(normalizedPeak);
        return normalizedValue * (this.max - this.min) + this.min;
    }
}

