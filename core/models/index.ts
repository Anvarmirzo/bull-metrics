import {ReactElement} from 'react';

export enum RoleType {
	Admin = 1,
	User,
}

export enum SlideoverModes {
	edit = 'Edit',
	show = 'Show',
	create = 'Create',
	none = 'None',
}

export enum THead {
	avatar = 'Avatar',
	edit = 'Edit',
}

export enum BannerPosition {
	full = 'full',
	right = 'right',
	left = 'left',
}

export enum ContextPriority {
	urgent = 'urgent',
	medium = 'medium',
	low = 'low',
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
	size: string;
	price: number;
	index?: number;
	position: BannerPosition;
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
	priority: ContextPriority;
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
