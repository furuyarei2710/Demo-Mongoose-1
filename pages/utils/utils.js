export const utilsPackage = {
  style: {
    alert: {
      show: (alertNofication, message, color) => {
        alertNofication.innerText = message;
        alertNofication.style.color = color;
        setTimeout(() => {
          alertNofication.innerText = "";
          alertNofication.style.color = "";
        }, 3000);
      },
    }
  },
	time: {
		day: () => new Date().getDate(),
		month: () => new Date().getMonth() + 1,
		year: () => new Date().getFullYear(),
		hour: () => new Date().getHours(),
		minute: () => new Date().getMinutes(),
		validateHourMinute: (inputField) => {
			var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(
				inputField.value
			);
			return isValid;
		},
	},
};
