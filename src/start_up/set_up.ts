import chalk from "chalk";
import figlet from "figlet";
import clear from "clear";

/**
 * @description sets up our cli and prints welcome message
 * @returns {void}
 */
export function cliSetup(): void {
  clear();
  console.log(
    chalk.yellow(figlet.textSync("CHIRCHIR", { horizontalLayout: "full" }))
  );
}
