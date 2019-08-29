DESCRIPTION
Pitch:
Not everyone needs 8 hours of sleep, but how do you know if you’re someone lucky enough to need only 6? Or an unlucky one that 
needs 10?! Enter Sleep Tracker.

MVP:
Onboarding process for a user.
Homepage view shows a graph of your nightly hours of sleep over time .
Ability to create a night’s sleep entry. For each date set (1/1/19-1/2/19), 
user can scroll through a digital clock image 
(like when you set your alarm on your phone, or just type in) to enter what time they got in bed and what time they woke up. 
From this data, app will calculate their total time in bed.
Ability to edit or delete a sleep entry.
Ability to click one of four emoji buttons to rate how they felt right when they woke up, how they felt during the day, 
and how tired they felt when they went to bed. Behind the scenes, a score 1-4 is given for each emoji. 
The app will calculate an average mood score for 1/2/19, and compare it to the time spent in bed. 
The app will then recommend after using for >1 month how much sleep you need.  
“Your mood score tends to be highest when you sleep 7.5 hours”

Stretch: Connect the app to a movement tracking device to automatically track when user is asleep.



# bw-sleep-tracker-pt-BE

## ENDPOINTS

### Auth - DONE 

* /api/register "POST"
	1. Registers a new user to the database
  2. Takes an object with properties "username", "password"
	  * {username: "lorem", password: "lorem", birthdate: "Standard Date such as 'new Date()'" }
	  * all three are required
* /api/login "POST"
  1. Login existing user. Returns the web token. 
	2. Takes an object with properties "username", "password"
	  * {username: "lorem", password: "lorem"}
		* both are reqired
	3. Successful login returns web token
	4. Unsuccessful returns an object with the error in question 

### Users

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

### Sleep Data

* /api/sleepData "POST"
  1. Posts new sleep data to the DB
	2. Takes an object {userID: , start: ,end: ,hours: , scale}
	  * userID is required. Must match the user. 
		* start = start time
		* end = end time
		* hours = diffence of END and START
		* scale = emoji value, currently set for 1 - 4
	3. JWT must be in the header under "authorize"
	4. accessible by the user and admin
* /api/sleepData/:id "PUT"
  1. Edits the recored matching the params: id
	2. Takes a sleep data object {userID: , start: ,end: , hours: , scale}
	3. JWT must be in the header under "authorize"
	4. accessible by the user and admin
	5. On success returns number of edited records 
* /api/sleepData/:id "DELETE"
  1. Deletes record that matches the params: id
	2. JWT must be in the header under "authorize"
	3. accessible by the user and admin
	4. On Success Returns the number of records deleted

### Axios jwt

* const options = {
		headers: {
			authorize: "Returned Web Token"
		}
 }

* const url = "https://sleeptrack.hero........"
* axios.get(url, options).then(....)

