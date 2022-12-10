
  // export default async function form(event){
  //   // Stop the form from submitting and refreshing the page.
  //   event.preventDefault();
  //   const data = {
  //     firstName: event.target.firstName.value,
  //     lastName: event.target.lastName.value,
	// 		email: event.target.email.value,
	// 		password: event.target.password.value,
  //   };

import createUser from "./user/create"

  //   // Send the data to the server in JSON format.
  //   const JSONdata = JSON.stringify(data);

	// 	console.log(data.firstName, data.lastName)

  //   // Get data from the form.
  // };

	export default function handler(req, res) {
		const body = req.body
		console.log('body: ', body)
		if (!body.firstName || !body.lastName || !body.email) {
			return res.status(400).json({ data: 'First or last name not found' })
		}
		res.status(200).json({ data: `${body.firstName} ${body.lastName} ${body.gender}` })
		// createUser()
	}