import React, {useEffect} from "react";
import {Modal} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../../../core/hooks";
import {setIsVisibleModalAction} from "../../../../core/store/modal/modal.slices";
import {useForm} from "react-hook-form";

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
	const [modal, banner] = useAppSelector(({modal, banner}) => [modal.order, banner]);
	const dispatch = useAppDispatch();

	// react-hook-form
	const {register, setValue, handleSubmit, watch} = useForm<IFields>({defaultValues: {days: 0}});

	// react hooks
	useEffect(() => {
		if (modal.typeId) {
			setValue("typeId", modal.typeId);
		}
	}, [modal.typeId]);

	const watchDays = watch("days", 0);

	const onToggleModalVisibility = (isVisible: boolean) => () => {
		dispatch(setIsVisibleModalAction({name: "order", data: {isVisible, price: 0, currentType: "banner"}}));
	};

	const onSubmit = (state: IFields) => {
		console.log(state);
	};

	const renderTypesOptions = () =>
		banner.types.data.map((b) => (
			<option value={b.id} key={b.id}>
				{b.name} ({b.size})
			</option>
		));

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
							{modal.currentType === "context" && (
								<div className="main-modal__input form-floating mb-3">
									<input
										type="name"
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
									<select className="form-select" {...register("typeId")}>
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
							{/*<input type="hidden" name="project" value="bull_etrics" />
							<input type="hidden" name="description" value="page_form" />
							<input type="hidden" name="duration" className="duration" value="" />
							<input type="hidden" name="pasted_fields" className="pasted_fields" value="" />
							<input type="hidden" name="language" value="russian" />*/}
							<h3>
								Цена: <strong>{modal.price * (isNaN(watchDays) ? 0 : watchDays)}</strong> сум
							</h3>
							<button className="account__btn mt-4">Заказать</button>
						</form>
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
};
