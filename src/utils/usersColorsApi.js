/* 
* Feladat:
Írj egy tetszőleges JS funkciót, ami lekér egy felhasználó listát egy 
képzeletbeli API-ról, majd miután ezt sikerrel megtette, 
lekér egy szín listát, majd miután ez is sikerült, 
egy tetszőleges színt rendel a 1-1 felhasználóhoz 
és így adja vissza a felhasználók listáját. 
Hiba esetén a console-ra ír illetve eredménytől függetlenül
a console-ra írja, ha végzett.
*/

/* User API response: 
{
  "users": [
    {
      "id": 1,
      "firstName": "Emily",
      "lastName": "Johnson",
      "maidenName": "Smith",
      "age": 28,
      "gender": "female",
      "email": "emily.johnson@x.dummyjson.com",
      "phone": "+81 965-431-3024",
      "username": "emilys",
    ...
    },
  ],
}
*/

//Get Users from an API
const getUsers = async () => {
	try {
		const response = await fetch("https://dummyjson.com/users");
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(`Felhasználó API hiba: ${error}`);
		throw error;
	}
};

/* response of the API:
   "status": 200,
    "statusText": "OK",
    "message": "All css colors retrieved.",
    "count": 148,
    "colors": [
        {
            "name": "Aqua",
            "theme": "light",
            "group": "Aqua",
            "hex": "00FFFF",
            "rgb": "0,255,255"
        },
        ... 
*/

//get colors from an API
const getColors = async () => {
	try {
		const response = await fetch("https://www.csscolorsapi.com/api/colors");
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(`Szín API hiba: ${error}`);
		throw error;
	}
};

//assign colors to users and give back the results
const assignColorsToUsers = async () => {
	try {
		//get users
		const { users } = await getUsers();

		//get colors
		const { colors } = await getColors();

		//get colors length
		const colorsLength = colors.length;

		//assign colors randomly, one color per user
		const usersWithColors = users.map((user) => {
			//get random color
			const color = colors[Math.floor(Math.random() * colorsLength)];

			return {
				...user,
				color,
			};
		});

		return usersWithColors;
	} catch (error) {
		console.log("Hiba történt a színnek hozzárendelése során.");
	} finally {
		console.log("Feladat befejezve");
	}
};

// export { assignColorsToUsers };

const results = await assignColorsToUsers();
console.log(results.at(0));
console.log(results.at(1));
