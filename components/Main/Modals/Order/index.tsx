import React, {ChangeEvent, useEffect, useState} from "react";
import {Modal} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../../../core/hooks";
import {setIsVisibleModalAction} from "../../../../core/store/modal/modal.slices";
import {useForm} from "react-hook-form";
import {getURLFromFile} from "../../../../core/utils";
import {fileUploadThunk} from "../../../../core/store/fileUpload/fileUpload.thunks";
import {IFileUpload} from "../../../../core/models";
import {postBannerThunk} from "../../../../core/store/banner/banner.thunks";
import {toast} from "react-toastify";
import {postChainThunk} from "../../../../core/store/chain/chain.thunks";
import {postContextThunk} from "../../../../core/store/context/context.thunks";

interface IFields {
	url: string;
	typeId: number;
	days: number;
	posterId: number;
	title: string;
	description: string;
}

export const OrderModal = () => {
	// redux hooks
	const [modal, banner, context] = useAppSelector(({modal, banner, context}) => [modal.order, banner, context]);
	const dispatch = useAppDispatch();

	// react-hook-form
	const {register, setValue, handleSubmit, reset, watch} = useForm<IFields>({defaultValues: {days: 0}});

	// react hooks
	const [preview, setPreview] = useState<{url: string; formData: FormData | null}>({url: "", formData: null});
	const [isSending, setIsSending] = useState(false);

	useEffect(() => {
		if (modal.typeId) {
			setValue("typeId", modal.typeId);
		}
	}, [modal.typeId]);

	const watchDays = watch("days", 0);

	const onToggleModalVisibility = (isVisible: boolean) => () => {
		if (!isVisible) {
			reset();
			setPreview({url: "/images/logo.png", formData: null});
		}
		dispatch(setIsVisibleModalAction({name: "order", data: {isVisible, price: 0, currentType: "banner"}}));
	};

	const onSubmit = async (state: IFields) => {
		setIsSending(true);
		if (modal.currentType === "banner") {
			if (preview.formData) {
				const action = await dispatch(fileUploadThunk(preview.formData));
				const payload = action.payload as IFileUpload[];

				if (payload) {
					const banner = await dispatch(
						postBannerThunk({days: state.days, typeId: state.typeId, url: state.url, posterId: payload[0].id}),
					);

					if (banner) {
						toast.success("Вы приобрели баннер и можете проверить в личном кабинете.");
						reset();
						setPreview({url: "/images/logo.png", formData: null});
						onToggleModalVisibility(false)();
					}
					setIsSending(false);
				}
			} else {
				setIsSending(false);
			}
		} else if (modal.currentType === "chain") {
			const chain = await dispatch(postChainThunk({days: state.days, url: state.url, title: state.title}));
			if (chain) {
				toast.success("Вы приобрели цепочку и можете проверить в личном кабинете.");
				reset();
				onToggleModalVisibility(false)();
			}
			setIsSending(false);
		} else if (modal.currentType === "context") {
			const context = await dispatch(
				postContextThunk({
					days: state.days,
					url: state.url,
					typeId: state.typeId,
					title: state.title,
					description: state.description,
				}),
			);

			if (context) {
				toast.success("Вы приобрели контекст и можете проверить в личном кабинете.");
				reset();
				onToggleModalVisibility(false)();
			}

			setIsSending(false);
		}
	};

	const renderTypesOptions = () => {
		if (modal.currentType === "banner") {
			return banner.types.data.map((b) => (
				<option value={b.id} key={b.id}>
					{b.name} ({b.size})
				</option>
			));
		} else if (modal.currentType === "context") {
			return context.types.data.map((c) => (
				<option value={c.id} key={c.id}>
					{c.name}
				</option>
			));
		}
	};

	const imageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const formData = new FormData();
			formData.set("files", e.target.files[0]);
			const url = await getURLFromFile(e.target.files[0]);

			setPreview({url: url as string, formData});
		}
	};

	return (
		<Modal
			className="main-modal"
			contentClassName="main-modal"
			onHide={onToggleModalVisibility(false)}
			show={modal.isVisible}
			centered
		>
			<Modal.Body>
				<div className="d-flex pb-2">
					<button onClick={onToggleModalVisibility(false)} type="button" className="main-modal__close-btn ms-auto">
						<svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11.2832 31.9404L32.4964 10.7272" stroke="black" strokeWidth="2" />
							<path d="M32.4971 31.9404L11.2839 10.7272" stroke="black" strokeWidth="2" />
						</svg>
					</button>
				</div>
				<div className="main-modal__body">
					<div className="main-modal__forms">
						<form onSubmit={handleSubmit(onSubmit)} className="main-modal__form">
							{modal.currentType === "banner" && (
								<div className="main-modal__input mb-3">
									<img
										className="border border-2"
										src={preview.url || "/images/logo.png"}
										alt="preview"
										style={{
											width: "100%",
											height: "160px",
											objectFit: "cover",
										}}
									/>
									<div className="flex gap-3 mt-1">
										<label
											htmlFor="fileUpload"
											className="bg-white py-2 px-3 border border-gray-300 rounded-sm shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
											style={{
												cursor: "pointer",
											}}
										>
											Загрузить
										</label>

										<input
											style={{opacity: 0, visibility: "hidden"}}
											id="fileUpload"
											type="file"
											accept="image/*"
											className="w-0"
											onChange={imageUpload}
										/>
									</div>
								</div>
							)}
							{["context", "chain"].includes(modal.currentType) && (
								<div className="main-modal__input form-floating mb-3">
									<input
										type="name"
										className="form-control"
										id="floatingName"
										placeholder="Name"
										{...register("title", {required: true})}
									/>
									<label htmlFor="floatingName">Name</label>
								</div>
							)}
							{modal.currentType === "context" && (
								<div className="main-modal__input form-floating mb-3">
									<input
										type="text"
										className="form-control"
										id="floatingName"
										placeholder="Name"
										{...register("description", {required: true})}
									/>
									<label htmlFor="floatingName">Description</label>
								</div>
							)}
							{modal.currentType !== "chain" && (
								<div className="main-modal__input mb-3">
									<select
										className="form-select"
										{...register("typeId", {valueAsNumber: true, value: modal.typeId})}
										disabled={modal.currentType !== "context"}
									>
										{renderTypesOptions()}
									</select>
								</div>
							)}

							<div className="main-modal__input form-floating mb-3">
								<input
									type="text"
									className="form-control"
									id="floatingInput1"
									placeholder="Link"
									{...register("url", {required: true})}
								/>
								<label htmlFor="floatingInput1">Link</label>
							</div>
							<div className="main-modal__input form-floating mb-3">
								<input
									type="number"
									className="form-control"
									id="floatingDay"
									placeholder="Дни"
									defaultValue={0}
									{...register("days", {required: true, valueAsNumber: true})}
								/>
								<label htmlFor="floatingDay">На сколько дней?</label>
							</div>
							<h3>
								Цена: <strong>{modal.price * (isNaN(watchDays) ? 0 : watchDays)}</strong> сум
							</h3>
							<button
								style={{cursor: isSending ? "default" : "pointer"}}
								disabled={isSending}
								className="account__btn mt-4"
							>
								Заказать
							</button>
						</form>
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
};
