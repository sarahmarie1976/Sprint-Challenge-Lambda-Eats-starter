/** @format */

import React, { useState } from 'react';
import {
	Card,
	CardImg,
	Form,
	FormGroup,
	Input,
	Dropdown,
	DropdownToggle,
  DropdownMenu,
  DropdownItem,
	Label,
	Button,
} from 'reactstrap';
import axios from 'axios';
import * as yup from 'yup';

const OrderForm = () => {
	const [formData, setFormData] = useState({
    name: '',
    size: '',
    sauce: '',
    pepperoni: '',
    sausage: '',
    asiago: '',
    meatball: '',
    xcheese: ''
  });

	const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  
  const schema = yup.object().shape({
		name: yup.string().required('Name must be filled out').min(2),
		size: yup.string().required('Must select at least one'),
		sauce: yup.string().required('Must select at least one'),
		pepperoni: yup.boolean(),
		sausage: yup.boolean(),
		asiago: yup.boolean(),
		meatball: yup.boolean(),
		xcheese: yup.boolean(),
	});

  const handleChange = (e) => {
  setFormData({...formData, [e.target.name]: e.target.value})
};

const handleTopping = (e) => {
  setFormData({...formData, [e.target.name]: e.target.checked})
}

const submit = () => {
	schema.validate(formData).then(() => {
		axios.post('https://reqres.in/api/users', formData).then((res) => {
			console.log(res.data, 'This is your posted data');
		});
	});
};

	return (
		<>
			{/* Creating header with Card and CardImg */}
			<Card color="info">
				<h2 style={{ color: 'whitesmoke', margin: '0 auto' }}>
					Build Your Own Pizza!
				</h2>
				<CardImg
					style={{ width: '80%', margin: '0 auto' }}
					src={require('./Assets/Pizza.jpg')}
				/>
			</Card>

			{/* Creating Name for form */}

			<Form
				onSubmit={(e) => {
					e.preventDefault();
					submit();
				}}
				style={{ margin: '5%' }}
			>
				<FormGroup>
					<legend>Name</legend>
					<Input type="name" name="name" onChange={handleChange} />
				</FormGroup>

				{/* Creating dropdown for how many pizza's */}

				<FormGroup>
					<Dropdown isOpen={dropdownOpen} toggle={toggle}>
						{/* Creating ternary expression if else statement formData.number, IF it is true (if equal to 0 is that true or not) then we can have number of pizza's display, ELSE put the formData.number  */}

						<DropdownToggle caret>Choose Your Size</DropdownToggle>

						<DropdownMenu>
							<DropdownItem>Small</DropdownItem>
							<DropdownItem>Medium</DropdownItem>
							<DropdownItem>Large</DropdownItem>
							<DropdownItem>Extra Large</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</FormGroup>

				{/* Creating radio button for Sauce */}

				<FormGroup tag="fieldset">
					<legend>Sauce</legend>

					<FormGroup check>
						<Label check>
							<Input
								type="radio"
								name="sauce"
								value="red"
								checked={formData.red}
								onChange={handleChange}
							/>
							Original Red
						</Label>
					</FormGroup>

					<FormGroup check>
						<Label check>
							<Input
								type="radio"
								name="sauce"
								value="garlic"
								checked={formData.garlic}
								onChange={handleChange}
							/>
							Garlic Butter
						</Label>
					</FormGroup>

					<FormGroup check>
						<Label check>
							<Input
								type="radio"
								name="sauce"
								value="bbq"
								checked={formData.bbq}
								onChange={handleChange}
							/>
							BBQ Sauce
						</Label>
					</FormGroup>

					<FormGroup check>
						<Label check>
							<Input
								type="radio"
								name="sauce"
								value="alfredo"
								checked={formData.alfredo}
								onChange={handleChange}
							/>
							Alfredo Sauce
						</Label>
					</FormGroup>

					{/* Creating checkbox for Toppings */}

					<FormGroup check>
						<legend>Toppings</legend>
						<Label check></Label>
						<Input type="checkbox" name="pepperoni" onChange={handleTopping} />
						Pepperoni
					</FormGroup>

					<FormGroup check>
						<Label check></Label>
						<Input type="checkbox" name="sausage" onChange={handleTopping} />
						Sausage
					</FormGroup>

					<FormGroup check>
						<Label check></Label>
						<Input type="checkbox" name="asiago" onChange={handleTopping} />
						Asiago Cheese
					</FormGroup>

					<FormGroup check>
						<Label check></Label>
						<Input type="checkbox" name="meatball" onChange={handleTopping} />
						MeatBall
					</FormGroup>

					<FormGroup check>
						<Label check></Label>
						<Input type="checkbox" name="xcheese" onChange={handleTopping} />
						Extra Cheese
					</FormGroup>
				</FormGroup>

				{/* Creating textarea for special instructions */}

				<FormGroup>
					<legend>Special Instructions</legend>
					<Input
						type="textarea"
						name="special"
						value={formData.special}
						onChange={handleChange}
					/>
				</FormGroup>

				{/* Creating textarea for special instructions */}
				<Button>Submit</Button>
			</Form>
		</>
	);
};

export default OrderForm;
