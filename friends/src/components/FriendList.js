import React, { useEffect, useState } from 'react';
import '../App.css';
import {
	Button,Row,Modal,ModalHeader,ModalFooter,Col,Form,FormGroup,Label,Input,
} from 'reactstrap';
import { axiosAuth } from '../utils/auth';
import Friend from './Friend';

const FriendList = (props) => {
	const [ modal, setModal ] = useState(false);
	const [ friends, setFriends ] = useState([ { name: '', email: '', age: '' } ]);
	const [ forms, setForms ] = useState({ name: '', email: '', age: '' });

	useEffect(() => {
		axiosAuth()
			.get('/api/friends')
			.then((res) => {
				console.log(res.data);
				setFriends(res.data);
			})
			.catch((err) => console.log(err.response));
	}, []);

	const handleChanges = (e) => {
		e.preventDefault();
		setForms({ ...forms, [e.target.name]: e.target.value });
	};

	const addFriend = (e) => {
		console.log('Add friend', forms);
		e.preventDefault();
		setForms({ name: '', email: '', age: '' });
		axiosAuth()
			.post(`/api/friends`, forms)
			.then((res) => {
				console.log(res);
				setFriends(res.data);
			})
			.catch((err) => {
				console.log(err.response);
			});
	};

	const deleteFriend = (id) => {
		console.log('ID to delete', id);
		axiosAuth()
			.delete(`/api/friends/${id}`, forms)
			.then((res) => {
				console.log(res);
				setFriends(res.data);
			})
			.catch((err) => {
				console.log(err.response);
			});
	};

	const toggle = () => setModal(!modal);

	return (
		<div className="usercard">
			<div>
				<Modal className='usercard' isOpen={modal} toggle={toggle}>
					<ModalHeader toggle={toggle}>Add Me to Friend List</ModalHeader>
					<Form className='formStyle' onSubmit={addFriend}>
						<Row form>
							<Col md={6}>
								<FormGroup>
									<Label for='nameLabel'>Name</Label>
									<Input
										type='text'
										name='name'
										id='nameLabel'
										placeholder='Jane Doe'
										value={forms.name}
										onChange={handleChanges}
									/>
								</FormGroup>
							</Col>
							<Col md={6}>
								<FormGroup>
									<Label for='emailLabel'>Email</Label>
									<Input
										type='email'
										name='email'
										id='emailLabel'
										placeholder='jane.doe@abc.com'
										value={forms.email}
										onChange={handleChanges}
									/>
								</FormGroup>
							</Col>
							<Col md={6}>
								<FormGroup>
									<Label for='ageLabel'>Age</Label>
									<Input
										type='number'
										name='age'
										id='ageLabel'
										placeholder='33'
										value={forms.age}
										onChange={handleChanges}
									/>
								</FormGroup>
							</Col>
						</Row>
						<ModalFooter>
							<Button color='primary' onClick={toggle} type='submit'>
								Add
							</Button>
							<Button color='secondary' onClick={toggle}>
								Cancel
							</Button>
						</ModalFooter>
					</Form>
				</Modal>
			</div>
			<h2>Friends List Card</h2>
			<Button color='danger' onClick={toggle}>
				Add Friend
			</Button>
			<Row>{friends.map((friend) => <Friend key={friend.id} friend={friend} deleteFriend={deleteFriend} />)}</Row>
		</div>
	);
};

export default FriendList;