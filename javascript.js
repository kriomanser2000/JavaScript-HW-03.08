/*
1.
Реалізуйте клас, який описує простий маркер. Клас має міс-
тити наступні компоненти:
поле, яке зберігає колір маркера;
поле, яке зберігає кількість чорнил в маркері (в процен-
тах);
метод для друку (метод приймає рядок і виводить текст
відповідним кольором; текст виводиться, доки в маркері є
чорнила; один не пробільний символ – це 0,5% чорнил в
маркері).
Реалізуйте клас, який описує маркер, що заправляється, успад-
кувавши його від простого маркера і додавши метод для заправки
маркера.
Продемонструйте роботу написаних методів.
*/
//--
/*
class Marker 
{
    constructor(color, inkLevel) 
    {
        this.color = color;
        this.inkLevel = inkLevel;
    }
    print(text) 
    {
        let printedText = '';
        for (let char of text) 
        {
            if (char !== ' ' && this.inkLevel > 0) 
            {
                printedText += char;
                this.inkLevel -= 0.5;
            } 
            else 
            {
                printedText += ' ';
            }
        }
        console.log(`Printed text: ${printedText}`);
    }
}
class RefillableMarker extends Marker 
{
    refill(inkAmount) 
    {
        this.inkLevel += inkAmount;
        console.log(`Marker refilled. Current ink level: ${this.inkLevel}%`);
    }
}
const marker1 = new Marker('blue', 50);
marker1.print('OIHDiosdfdsjfasfdsapo TESTING ! ! !.');
const refillableMarker1 = new RefillableMarker('red', 20);
refillableMarker1.print('Marker test.');
refillableMarker1.refill(50);
refillableMarker1.print('Marker test.');
*/

/*
Реалізуйте клас ExtendedDate, успадкувавши його від стан-
дартного класу Date і додавши такі можливості:
метод для виведення дати (число та місяць) текстом;
метод для перевірки минулої або майбутньої дати (якщо
дата минула, тоді метод повертає false, якщо майбутня
або поточна – true);
метод для перевірки високосного року;
метод, який повертає наступну дату.
Створіть об’єкт класу ExtendedDate і виведіть на екран ре-
зультати роботи нових методів.
*/
//--
/*
class ExtDate extends Date
{
    constructor(year, month, day)
    {
        super(year, month, day);
    }
    getDateTxt()
    {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return `${this.getDate()} ${months[this.getMonth()]}`;
    }
    isPaOrPr()
    {
        const now = new Date();
        return this <= now;
    }
    isLpYear()
    {
        const year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
    getNextDate()
    {
        const nextDate = new Date(this);
        nextDate.setDate(nextDate.getDate() + 1);
        return nextDate;
    }
}
const today = new ExtDate();
console.log("Today date: ", today.getDateTxt());
console.log("Today past or current date?: ", today.isPaOrPr());
console.log("Curret year is leap?: ", today.isLpYear());
console.log("Next date: ", new ExtDate(today.getNextDate()).getDateTxt());
*/

/*
Реалізуйте клас Employee, що описує працівника, і створіть
масив працівників банку.
Реалізуйте клас EmpTable для генерації HTML-код таблиці зі
списком працівників банку. Масив працівників необхідно пере-
давати через конструктор, а отримувати HTML-код за допомогою
методу getHtml().
Створіть об’єкт класу EmpTable та виведіть на екран результат
роботи методу getHtml().
*/
//--
/*
class Employee
{
    constructor(name, position, departament, salary)
    {
        this.name = name;
        this.position = position;
        this.departament = departament;
        this. salary = salary;
    }
}
class EmpTable
{
    constructor(employees)
    {
        this.employees = employees;
    }
    getHtml()
    {
        let html = '<table border = "1">';
        html += '<tr><th> Name </th><th> Position </th><th> Departament </th><th> Salary </th></tr>';
        this.employees.forEach(employee => 
            {
                html +=`<tr><td>${employee.name}</td><td>${employee.position}</td><td>${employee.salary}</td></tdr>`;
            });
            html += '</table>';
            return html;
    }
}
const bankEmps = [new Employee("Kuzmenko Oleksandr", "GOD", "Sitting Home", 999999),
new Employee("Stepan Bandera", "Manager", "Nationalist", 60000),
new Employee("Artem Bonov", "Doctor", "AFU", 90000),
new Employee("Von Wachter", "Gruppenführer", "Austrian lawyer", 85000)];
const empTable = new EmpTable(bankEmps);
const htmlCode = empTable.getHtml();
console.log(htmlCode);
*/


/*
Реалізуйте клас StyledEmpTable, який успадковується від
класу EmpTable. Додайте метод getStyles(), який повертає рядок
зі стилями для таблиці в тегах style. Перевизначте метод getHtml(),
який додає стилі до того, який повертає метод getHtml() з бать-
ківського класу.
Створіть об’єкт класу StyledEmpTable та виведіть на екран
результат роботи методу getHtml().
*/
//--
class Employee
{
    constructor(name, position, departament, salary)
    {
        this.name = name;
        this.position = position;
        this.departament = departament;
        this. salary = salary;
    }
}
class EmpTable
{
    constructor(employees)
    {
        this.employees = employees;
    }
    getHtml()
    {
        let html = '<table border = "1">';
        html += '<tr><th> Name </th><th> Position </th><th> Departament </th><th> Salary </th></tr>';
        this.employees.forEach(employee => 
            {
                html +=`<tr><td>${employee.name}</td><td>${employee.position}</td><td>${employee.salary}</td></tdr>`;
            });
            html += '</table>';
            return html;
    }
}
class StyledEmpTable extends EmpTable
{
    constructor(employees)
    {
        super(employees);
    }
    getStyles()
    {
        return`
        <style> table {border-collapse: collapse; width: 100%;} th, td { border: 1px, solid, black; padding: 8px; text-align: left;} th { background-color: #f2f2f2;} </style>`;
    }
    getHtml()
    {
        const parentHtml = super.getHtml();
        const styles = this.getStyles();
        return styles + parentHtml;
    }
}
const bankEmps = [new Employee("Kuzmenko Oleksandr", "GOD", "Sitting Home", 999999),
new Employee("Stepan Bandera", "Manager", "Nationalist", 60000),
new Employee("Artem Bonov", "Doctor", "AFU", 90000),
new Employee("Von Wachter", "Gruppenführer", "Austrian lawyer", 85000)];
const styledEmpTable = new StyledEmpTable(bankEmps);
const styledHtmlCode = styledEmpTable.getHtml();
console.log(styledHtmlCode);