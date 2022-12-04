import React from "react";
import {Modal} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../../../core/hooks";
import {setIsVisibleModalAction} from "../../../../core/store/modal/modal.slices";

export const OrderModal = () => {
	// redux hooks
	const isModalVisible = useAppSelector(({modal}) => modal.order.isVisible);
	const dispatch = useAppDispatch();

	const onToggleModalVisibility = (isVisible: boolean) => () => {
		dispatch(setIsVisibleModalAction({name: "order", isVisible}));
	};

	return (
		<Modal
			className="main-modal"
			contentClassName="main-modal"
			onHide={onToggleModalVisibility(false)}
			show={isModalVisible}
			centered
		>
			<Modal.Body>
				<div className="d-flex pb-2">
					<button onClick={onToggleModalVisibility(false)} type="button" className="main-modal__close-btn ms-auto">
						<svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11.2832 31.9404L32.4964 10.7272" stroke="black" stroke-width="2" />
							<path d="M32.4971 31.9404L11.2839 10.7272" stroke="black" stroke-width="2" />
						</svg>
					</button>
				</div>
				<div className="main-modal__body">
					<div className="main-modal__forms">
						<form action="" method="post" className="main-modal__form" data-gtag-submit="popup">
							<div className="main-modal__input mb-3">
								<select className="form-select" aria-label="Default select example">
									<option value="1">type 1</option>
									<option value="2">type 2</option>
								</select>
							</div>
							<div className="main-modal__input form-floating mb-3">
								<input type="text" className="form-control" id="floatingInput1" placeholder="Link" required />
								<label htmlFor="floatingInput1">Link</label>
							</div>
							<div className="main-modal__input form-floating mb-3">
								<input type="name" className="form-control" id="floatingName" placeholder="Name" required />
								<label htmlFor="floatingName">Name</label>
							</div>
							<input type="hidden" name="project" value="bull_etrics" />
							<input type="hidden" name="description" value="page_form" />
							<input type="hidden" name="duration" className="duration" value="" />
							<input type="hidden" name="pasted_fields" className="pasted_fields" value="" />
							<input type="hidden" name="language" value="russian" />
							<a href="index.html" className="account__btn mt-4">
								Заказать
							</a>
						</form>
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
};
