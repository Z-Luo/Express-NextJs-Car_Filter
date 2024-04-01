import { IColor, IDevices, ISize } from '@/interfaces/variables';

export enum EDeviceSize {
	miniMobile = 'miniMobile',
	mobile = 'mobile',
	tablet = 'tablet',
	laptop = 'laptop',
	largeLaptop = 'largeLaptop',
	desktop = 'desktop',
	largeDesktop = 'largeDesktop',
	wideScreen = 'wideScreen'
}

export const sizes: ISize = {
	miniMobile: 320,
	mobile: 576,
	tablet: 768,
	laptop: 1024,
	largeLaptop: 1440,
	desktop: 1920,
	largeDesktop: 2560,
	wideScreen: 3840
};

export const devices: IDevices = {
	miniMobile: `(max-width: ${sizes.miniMobile}px)`,
	mobile: `(max-width: ${sizes.mobile}px)`,
	tablet: `(max-width: ${sizes.tablet}px)`,
	laptop: `(max-width: ${sizes.laptop}px)`,
	largeLaptop: `(max-width: ${sizes.largeLaptop}px)`,
	desktop: `(max-width: ${sizes.desktop}px)`,
	largeDesktop: `(max-width: ${sizes.largeDesktop}px)`
};

export const color: IColor = {
	primaryColor: '#051c2c',
	whiteColor: '#fff',
	textColor: '#FFFFFFDE',
	blackColor: '#000',
    blueColor: '#00A1CB',
    greyColor: '#212121',
    darkGreyColor: '#051c2c',
};


export const headerHeight = '100px';
