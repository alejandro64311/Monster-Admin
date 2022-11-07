export class Measurement {
    id: number;
    weight: number;
    chest: number;
    hip: number;
    leg: number;
    arm: number;
    mc: number;
    fatP: number;
    neck: number;
    waist: number;
}

export class CreateMeasurementCommand {
    weight: number;
    chest: number;
    hip: number;
    leg: number;
    arm: number;
    mc: number;
    fatP: number;
    neck: number;
    waist: number;
}
export class UpdateMeasurementCommand {
    weight: number;
    chest: number;
    hip: number;
    leg: number;
    arm: number;
    mc: number;
    fatP: number;
    neck: number;
    waist: number;
}