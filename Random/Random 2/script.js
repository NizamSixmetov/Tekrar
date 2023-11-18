function getRandomNumbersWithoutRepeats(n, min, max) {
    const randomNumbers = [];

    while (randomNumbers.length < n) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        // Проверяем, содержится ли сгенерированное число в массиве randomNumbers
        const isUnique = !randomNumbers.includes(randomNumber);

        // Если число уникально, добавляем его в массив, иначе генерируем новое число
        isUnique && randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}
console.log(getRandomNumbersWithoutRepeats(10, 1, 100));
// Пример использования:
// var uniqueRandomNumbers = getRandomNumbersWithoutRepeats(10, 1, 100); // Генерировать 10 уникальных случайных чисел от 1 до 100
// console.log(uniqueRandomNumbers);