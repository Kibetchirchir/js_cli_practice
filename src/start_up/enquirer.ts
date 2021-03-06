import inquirer from "inquirer";

export const askGithubCredentials = (): any => {
  const questions = [
    {
      name: "username",
      type: "input",
      message: "Enter your GitHub username or e-mail address:",
      validate: function(value: any): any {
        if (value.length) {
          return true;
        } else {
          return "Please enter your username or e-mail address.";
        }
      }
    },
    {
      name: "password",
      type: "password",
      message: "Enter your password:",
      validate: function(value: any): any {
        if (value.length) {
          return true;
        } else {
          return "Please enter your password.";
        }
      }
    }
  ];
  return inquirer.prompt(questions);
};
