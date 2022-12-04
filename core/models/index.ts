import {ReactElement} from 'react';

export enum eRoleType {
	Admin = 1,
	User,
}

export enum eSlideoverModes {
	edit = 'Edit',
	show = 'Show',
	create = 'Create',
	none = 'None',
}

export enum eTHead {
	avatar = 'Avatar',
	edit = 'Edit',
}

export enum eBannerPosition {
	full = 'full',
	right = 'right',
	left = 'left',
}

export enum eContextPriority {
	urgent = 'urgent',
	medium = 'medium',
	low = 'low',
}

export enum eBannerSize {
	size_1600x200 = 'size_1600x200',
	size_728x90 = 'size_728x90',
	size_1200x150 = 'size_1200x150',
	size_160x600 = 'size_160x600',
	size_150x150 = 'size_150x150',
}

export interface ILinkObj {
	name: string;
	href: string;
	icon: ReactElement;
	current: boolean;
}

export interface IStatus {
	id: number;
	title: string;
}

export interface IType {
	id: number;
	title: string;
	createdAt?: string;
	updatedAt?: string;
}

export interface ILogin {
	login: string;
	password: string;
}

export interface ISignup {
	name: string;
	email: string;
	phone: string;
	password: string;
}

export interface IAuthResponse {
	jwt: string;
	user: IUser;
}

export type IPatchUser = Partial<{
	name: string;
	roleId: number;
	email: string;
	phone: string;
	balance: number;
	password: string;
	oldPassword: string;
}>;

export interface IRole {
	id: number;
	title: string;
}

export interface IBannerType {
	id: number;
	name: string;
	size: eBannerSize;
	price: number;
	index?: number;
	position: eBannerPosition;
}

export interface IBanner {
	id: number;
	type: IBannerType;
	poster: IFile;
	url: string;
	activeAt: string;
}

export interface IChainType {
	id: number;
	price: number;
	active: boolean;
}

export interface IChain {
	id: number;
	type: IChainType;
	url: string;
	title: string;
	activeAt: string;
}

export interface IContextType {
	id: number;
	name: string;
	price: number;
	priority: eContextPriority;
}

export interface IContext {
	id: number;
	type: IContextType;
	url: string;
	title: string;
	description?: string;
	activeAt: string;
}

export interface IUser {
	id: number;
	name: string;
	email: string;
	phone: string;
	role: IRole;
	contexts: IContext[];
	banners: IBanner[];
	chains: IChain[];
	password: string;

	balance?: number;
}

export interface IFile {
	id: number;
	name: string;
	url: string;
}
