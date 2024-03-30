type ISize = { [key: keyof typeof EDeviceSize]: number };
type IDevices = { [key: keyof typeof EDeviceSize]: string };
type IColor = { [key: string]: string };



export { IColor, IDevices, ISize };
