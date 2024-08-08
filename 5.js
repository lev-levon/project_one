console.clear();
//!Змінна та константа
let a=5
console.log(typeof(a),a)
a=6
console.log(a)
const a1 = 7
console.log(typeof(a1),a1)
//! Типи даних
//? undefind,null,number, string, arr
a = "5"
console.log(typeof(a),a)
a = [1,2,3,4,5]
console.log(typeof(a),a)
let b 
console.log(b)
//! Арифметичні операції
//? + - / % ** * ++ --
a=6
console.log(a+2)
console.log(a-2)
console.log(a*2)
console.log(a**2)
console.log(a/2)
console.log(a%5)
a--
console.log(a)
a++
console.log(a)


//* Визнач скільки буде 2 в 5 степені та 2 в 15 степені
console.log(2**5)
console.log(2**15)
//* Обрахуй значення рівняння x^2+2xy+y^2
let x = 4, y = 7
console.log(x**2+2*x*y+y**2)
//* Напишіть програму, яка перевіряє, чи число парне чи непарне.
a = 4
a%2==0?console.log("Парне число"): console.log("Непарне число")
//* Створіть програму, яка визначає, чи є введене число додатним, від'ємним чи нулем.
a = 0
a<0?console.log("Число від'ємне"): a>0?console.log("Число додатнє"): console.log("Число це нуль");
//* Напишіть програму, яка обчислює площу прямокутника за його довжиною і шириною.
width = 3
height = 5
console.log("P="+width*height)
//* Створіть програму, яка перевіряє, чи є введене число кратним 3 або 5.
a = 15
a%3==0 || a%5==0?console.log("Число кратне 3 або 5"): console.log("Число не кратне 3 або 5")
////? Alert (Попередження):
////? Використовується для відображення повідомлення користувачу з кнопкою "OK". Наприклад:
////? window.alert("Це попередження!");
////? Prompt (Запит):
////? Використовується для отримання введеного користувачем значення. Він також має кнопки "OK" і "Cancel". Наприклад:
////? let result = window.prompt("Будь ласка, введіть своє ім'я", "Гість");
////? Confirm (Підтвердження):
////? Використовується для підтвердження або скасування дії користувачем. Має кнопки
let login, password
if(login=prompt("Введіть ваш логін")=="1", password=prompt("Введіть ваш пароль")=="1"){
    alert("Ви успішно авторизувалися")
}else{
    window.location='https://www.google.com/'
}