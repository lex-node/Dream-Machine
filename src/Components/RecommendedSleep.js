import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

/*### Users

* /api/users "GET"
  1. Returns a list of all users
	2. JWT must be in the header under "authorize"
	3. Only accessible as admin
* /api/user/:id "GET"
	1. Returns user that matches the params: id
	  * All the sleep data for that user is included an array of objects
			* {
					sleepData: [{}, {}]
			* }
	2. JWT must be in the header under "authorize"
	3. accessible by the user and admin
* /api/user/:id "PUT"
  1. Modifies user that matches the params: id
	2. Takes an object with the updated user values {id: , username: , password: }
	3. JWT must be in the header under "authorize"
	4. accessible by the user and admin
	5. On success returns the edited record
	6. checkpassword is required on the request.
	  * checks the password for authenticity before submitting the request
		  * {
					username: "example",
					password: "example",
					birthdate: "example",
					checkpassword: "current password of user"
			  }
		* if username, password, or birthdate aren't changed, they don't need to be included in the request.
			* {
					birthdate: "example",
					checkpassword: "current password of user"
			  }
		* need to logout user after a username or password change
* /api/user/:id "DELETE"
  1. Deletes user that matches the params: id
	2. JWT must be in the header under "authorize"
	3. accessible by the user and admin
	4. On success returns the number of records deleted
*/