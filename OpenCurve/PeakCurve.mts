export class PeakCurve {
    max: number;
    min: number;

    constructor(max: number, min: number) {
        this.max = max;
        this.min = min;
    }

    // Gaussian random using Box-Muller transform
    private gaussianRandom(mean: number, stdDev: number): number {
        let u = 0;
        let v = 0;

        while (u === 0) u = Math.random();
        while (v === 0) v = Math.random();

        const num = Math.sqrt(-2.0 * Math.log(u)) *
                    Math.cos(2.0 * Math.PI * v);

        return num * stdDev + mean;
    }

    random(peak: number): number {
        const stdDev = (this.max - this.min) / 6;

        let value = this.gaussianRandom(peak, stdDev);

        // Clamp to range
        value = Math.max(this.min, Math.min(this.max, value));

        return Math.round(value);
    }
}

export default function CreatePeakCurve(min: number, max: number): PeakCurve {
    return new PeakCurve(max, min);
}